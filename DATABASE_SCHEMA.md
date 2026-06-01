# BuildNext – Database Schema

Complete Prisma ORM Schema for BuildNext SaaS platform.

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================================================
// AUTHENTICATION & USERS
// ============================================================================

model User {
  id                    String      @id @default(cuid())
  email                 String      @unique
  emailVerified         DateTime?
  name                  String?
  image                 String?
  clerkId               String?     @unique
  
  // Profile
  skills                String[]    @default([])      // JSON array of skills
  experienceLevel       String?     // "beginner" | "intermediate" | "advanced"
  interests             String?
  preferredTechStack    String[]    @default([])      // JSON array
  hoursPerWeek          Int?
  teamSize              String?     // "solo" | "team"
  careerGoals           String[]    @default([])      // JSON array
  
  // Account Status
  status                UserStatus  @default(ACTIVE)
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  deletedAt             DateTime?
  
  // Relations
  subscription          Subscription?
  projectGenerations    ProjectGeneration[]
  savedProjects         SavedProject[]
  apiUsage              ApiUsage[]
  payments              Payment[]
  feedback              Feedback[]
  
  @@index([email])
  @@index([clerkId])
  @@index([status])
}

enum UserStatus {
  ACTIVE
  INACTIVE
  BANNED
  DELETED
}

// ============================================================================
// SUBSCRIPTIONS & BILLING
// ============================================================================

model Subscription {
  id                    String      @id @default(cuid())
  userId                String      @unique
  
  // Plan Information
  planId                String      // "free" | "pro" | "enterprise"
  planName              String      // "Free" | "Pro" | "Enterprise"
  status                SubscriptionStatus @default(ACTIVE)
  
  // Billing
  stripeCustomerId      String?     @unique
  stripeSubscriptionId  String?     @unique
  currentPeriodStart    DateTime?
  currentPeriodEnd      DateTime?
  
  // Feature Limits
  generationsPerDay     Int         @default(5)        // 5 for free, unlimited for pro
  maxSavedProjects      Int         @default(3)        // 3 for free, unlimited for pro
  maxTeamMembers        Int         @default(1)        // 1 for free, 10 for pro
  
  // Features Enabled
  pdfExport             Boolean     @default(false)
  architectureGenerator Boolean     @default(false)
  startupMode           Boolean     @default(false)
  teamCollaboration     Boolean     @default(false)
  prioritySupport       Boolean     @default(false)
  
  // Dates
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  canceledAt            DateTime?
  
  // Relations
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  payments              Payment[]
  
  @@index([userId])
  @@index([stripeCustomerId])
  @@index([status])
}

enum SubscriptionStatus {
  ACTIVE
  PAST_DUE
  CANCELED
  PAUSED
}

model Payment {
  id                    String      @id @default(cuid())
  userId                String
  subscriptionId        String
  
  // Stripe Information
  stripePaymentIntentId String?     @unique
  stripeInvoiceId       String?     @unique
  
  // Payment Details
  amount                Float       // in cents
  currency              String      @default("usd")
  status                PaymentStatus @default(PENDING)
  
  // Billing Cycle
  billingCycle          String      // "monthly" | "annual"
  
  // Dates
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  // Relations
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  subscription          Subscription @relation(fields: [subscriptionId], references: [id], onDelete: Cascade)
  
  @@index([userId])
  @@index([subscriptionId])
  @@index([status])
}

enum PaymentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  REFUNDED
}

// ============================================================================
// PROJECT GENERATIONS
// ============================================================================

model ProjectGeneration {
  id                    String      @id @default(cuid())
  userId                String
  
  // Input Parameters
  skills                String[]    // JSON array
  experienceLevel       String      // "beginner" | "intermediate" | "advanced"
  careerGoal            String      // "portfolio" | "job" | "freelance" | "startup" | "learning"
  interests             String
  preferredTechStack    String[]    @default([])  // JSON array
  hoursPerWeek          Int?
  teamSize              String?     // "solo" | "team"
  numberOfIdeas         Int         @default(5)
  
  // Generated Content (JSON)
  generatedIdeas        Json        // Array of project ideas
  
  // Metadata
  modelUsed             String      @default("gpt-4")
  promptVersion         String      @default("v1")
  tokensUsed            Int?
  generationTime        Int?        // milliseconds
  
  // Dates
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  // Relations
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  savedProjects         SavedProject[]
  
  @@index([userId])
  @@index([createdAt])
}

model SavedProject {
  id                    String      @id @default(cuid())
  userId                String
  generationId          String?     // nullable - user can manually create
  
  // Project Data
  title                 String
  elevatorPitch         String      @db.Text
  problem               String      @db.Text
  targetUsers           String      @db.Text
  difficulty            String      // "beginner" | "intermediate" | "advanced"
  portfolioScore        Int         // 1-10
  startupScore          Int         // 1-10
  
  // Full Project Details (JSON for flexibility)
  projectData           Json        // Complete project specification
  
  // Organization
  isFavorited           Boolean     @default(false)
  tags                  String[]    @default([])
  notes                 String?     @db.Text
  
  // Dates
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  // Relations
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  generation            ProjectGeneration? @relation(fields: [generationId], references: [id], onDelete: SetNull)
  
  @@index([userId])
  @@index([isFavorited])
  @@index([difficulty])
}

// ============================================================================
// USAGE & ANALYTICS
// ============================================================================

model ApiUsage {
  id                    String      @id @default(cuid())
  userId                String
  
  // Usage Tracking
  endpoint              String      // API endpoint called
  method                String      // HTTP method
  responseTime          Int         // milliseconds
  statusCode            Int
  tokensUsed            Int?        // for AI endpoints
  
  // Dates
  createdAt             DateTime    @default(now())
  
  // Relations
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([userId])
  @@index([endpoint])
  @@index([createdAt])
}

model DailyUsage {
  id                    String      @id @default(cuid())
  userId                String?
  
  // Daily Aggregates
  date                  DateTime    @db.Date
  totalRequests         Int         @default(0)
  totalTokensUsed       Int         @default(0)
  generationsCount      Int         @default(0)
  activeUserCount       Int         @default(0)
  
  // Metrics
  averageResponseTime   Int         @default(0)
  errorCount            Int         @default(0)
  
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  @@unique([date, userId])
  @@index([date])
}

// ============================================================================
// USER FEEDBACK
// ============================================================================

model Feedback {
  id                    String      @id @default(cuid())
  userId                String
  
  // Feedback Content
  type                  String      // "bug" | "feature" | "general" | "improvement"
  title                 String
  message               String      @db.Text
  rating                Int?        // 1-5 star rating
  
  // Metadata
  url                   String?     // where feedback was submitted
  userAgent             String?
  
  // Status
  status                FeedbackStatus @default(RECEIVED)
  
  // Dates
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  // Relations
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([userId])
  @@index([status])
  @@index([type])
}

enum FeedbackStatus {
  RECEIVED
  ACKNOWLEDGED
  IN_PROGRESS
  COMPLETED
  REJECTED
}

// ============================================================================
// ANALYTICS & EVENTS
// ============================================================================

model Analytics {
  id                    String      @id @default(cuid())
  
  // Daily Metrics
  date                  DateTime    @db.Date @unique
  
  // User Metrics
  newSignups            Int         @default(0)
  activeUsers           Int         @default(0)
  returningUsers        Int         @default(0)
  churnedUsers          Int         @default(0)
  
  // Usage Metrics
  totalGenerations      Int         @default(0)
  totalProjectsSaved    Int         @default(0)
  averageGenerationsPerUser Float   @default(0)
  
  // Conversion Metrics
  freeToProConversions  Int         @default(0)
  
  // Revenue Metrics
  mrr                   Float       @default(0)      // Monthly Recurring Revenue
  arpu                  Float       @default(0)      // Average Revenue Per User
  
  // Feature Usage
  pdfExportsCount       Int         @default(0)
  architectureDiagramsCount Int     @default(0)
  buildPlansGenerated   Int         @default(0)
  
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
}

// ============================================================================
// SESSION & TOKENS
// ============================================================================

model Session {
  id                    String      @id @default(cuid())
  userId                String?
  
  // Session Data
  sessionToken          String      @unique
  refreshToken          String?     @unique
  
  // Expires
  expires               DateTime
  
  // Dates
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  @@index([userId])
  @@index([sessionToken])
}

model VerificationToken {
  identifier            String
  token                 String      @unique
  expires               DateTime
  
  @@unique([identifier, token])
  @@index([identifier])
}

// ============================================================================
// ADMIN & CONFIGURATION
// ============================================================================

model Plan {
  id                    String      @id @default(cuid())
  
  // Plan Details
  name                  String      @unique
  slug                  String      @unique
  description           String?
  
  // Pricing
  monthlyPrice          Float
  annualPrice           Float
  
  // Features
  generationsPerDay     Int
  maxSavedProjects      Int
  maxTeamMembers        Int
  features              Json        // Features as JSON object
  
  // Status
  isActive              Boolean     @default(true)
  
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  
  @@index([slug])
  @@index([isActive])
}

model FeatureFlag {
  id                    String      @id @default(cuid())
  
  // Flag Details
  name                  String      @unique
  description           String?
  
  // Status
  isEnabled             Boolean     @default(false)
  
  // Rollout
  rolloutPercentage     Int         @default(0)      // 0-100
  
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
}

// ============================================================================
// INDEXES & FULL-TEXT SEARCH
// ============================================================================
// Note: Consider adding PostgreSQL full-text search indexes for:
// - SavedProject.title
// - SavedProject.elevatorPitch
// - ProjectGeneration.interests
```

## Schema Overview

### Entity Relationships

```
User (1) ──────────────── (1) Subscription
  │
  ├──────────────── (N) ProjectGeneration
  │                   │
  │                   └──── (N) SavedProject
  │
  ├──────────────── (N) SavedProject
  │
  ├──────────────── (N) ApiUsage
  │
  ├──────────────── (N) Payment
  │                   │
  │                   └──── (1) Subscription
  │
  └──────────────── (N) Feedback
```

### Key Design Decisions

1. **JSON Storage for Flexibility**
   - Project ideas stored as JSON in `generatedIdeas`
   - Allows storing variable project data without schema changes

2. **User Skills & Interests**
   - Stored as arrays/JSON
   - Flexible tagging system for future categorization

3. **Subscription Denormalization**
   - Feature flags cached at subscription level
   - Reduces queries for feature checks

4. **Analytics Aggregation**
   - Daily aggregated metrics for performance
   - Real-time counts in other tables

5. **Audit Trail**
   - All major entities have `createdAt` and `updatedAt`
   - Soft deletes optional (can add `deletedAt` to User)

## Migrations

```bash
# Initialize Prisma
npx prisma init

# Push schema to database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Create migration (after schema changes)
npx prisma migrate dev --name add_feature_name

# Apply migrations in production
npx prisma migrate deploy
```

## Seeding (Development)

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create plans
  await prisma.plan.createMany({
    data: [
      {
        name: 'Free',
        slug: 'free',
        monthlyPrice: 0,
        annualPrice: 0,
        generationsPerDay: 5,
        maxSavedProjects: 3,
        maxTeamMembers: 1,
        features: {
          pdfExport: false,
          architectureGenerator: false,
          startupMode: false
        }
      },
      {
        name: 'Pro',
        slug: 'pro',
        monthlyPrice: 9,
        annualPrice: 80,
        generationsPerDay: -1, // unlimited
        maxSavedProjects: -1,
        maxTeamMembers: 10,
        features: {
          pdfExport: true,
          architectureGenerator: true,
          startupMode: true
        }
      }
    ]
  });
}

main().catch(console.error).finally(() => prisma.$disconnect());
```
