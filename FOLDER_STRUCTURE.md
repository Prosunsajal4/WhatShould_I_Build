# BuildNext – Project Folder Structure

## Complete Project Directory Layout

```
buildnext/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # CI/CD pipeline
│   │   ├── deploy.yml          # Deployment pipeline
│   │   └── test.yml            # Test runner
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
│
├── .vscode/
│   ├── extensions.json         # Recommended extensions
│   ├── settings.json           # VS Code settings
│   └── launch.json             # Debugging configuration
│
├── src/
│   │
│   ├── app/                    # Next.js 15 App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Root/landing page
│   │   ├── globals.css         # Global styles
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   │
│   │   ├── (auth)/             # Auth routes (grouped)
│   │   │   ├── layout.tsx
│   │   │   ├── signup/
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── reset-password/
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   └── callback/
│   │   │       └── [provider]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (dashboard)/        # Dashboard routes (grouped)
│   │   │   ├── layout.tsx      # Dashboard layout
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── Overview.tsx
│   │   │   │       ├── StatCard.tsx
│   │   │   │       └── RecentProjects.tsx
│   │   │   ├── generator/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── GeneratorForm.tsx
│   │   │   │   │   ├── SkillsInput.tsx
│   │   │   │   │   ├── ExperienceSelect.tsx
│   │   │   │   │   ├── CareerGoalSelect.tsx
│   │   │   │   │   ├── PreferencesForm.tsx
│   │   │   │   │   └── GenerateButton.tsx
│   │   │   │   └── hooks/
│   │   │   │       └── useGenerateProject.ts
│   │   │   ├── results/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [generationId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── ProjectIdea.tsx
│   │   │   │       ├── ProjectCard.tsx
│   │   │   │       ├── TechStackDisplay.tsx
│   │   │   │       ├── RoadmapViewer.tsx
│   │   │   │       └── ProjectActions.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [projectId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── ProjectsList.tsx
│   │   │   │       ├── ProjectFilters.tsx
│   │   │   │       ├── ProjectDetails.tsx
│   │   │   │       └── ProjectActions.tsx
│   │   │   ├── learning/
│   │   │   │   ├── page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── GapAnalyzer.tsx
│   │   │   │       ├── LearningPath.tsx
│   │   │   │       └── SkillProgress.tsx
│   │   │   ├── build-plan/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [planId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── BuildPlanViewer.tsx
│   │   │   │       ├── DayCard.tsx
│   │   │   │       ├── MilestoneMarker.tsx
│   │   │   │       └── DailyChecklist.tsx
│   │   │   ├── settings/
│   │   │   │   ├── page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── ProfileSettings.tsx
│   │   │   │       ├── SkillsSettings.tsx
│   │   │   │       ├── PreferencesSettings.tsx
│   │   │   │       └── DangerZone.tsx
│   │   │   └── billing/
│   │   │       ├── page.tsx
│   │   │       ├── upgrade/
│   │   │       │   └── page.tsx
│   │   │       └── components/
│   │   │           ├── PricingTable.tsx
│   │   │           ├── PlanCard.tsx
│   │   │           ├── BillingInfo.tsx
│   │   │           └── InvoiceList.tsx
│   │   │
│   │   ├── (admin)/            # Admin routes (grouped)
│   │   │   ├── layout.tsx
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── users/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [userId]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── analytics/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── subscriptions/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── plans/
│   │   │   │       └── page.tsx
│   │   │   └── components/
│   │   │       ├── AdminNav.tsx
│   │   │       ├── UserManagement.tsx
│   │   │       ├── AnalyticsDashboard.tsx
│   │   │       └── SubscriptionManager.tsx
│   │   │
│   │   ├── api/                # API Routes
│   │   │   ├── auth/
│   │   │   │   ├── register/route.ts
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── logout/route.ts
│   │   │   │   ├── reset-password/route.ts
│   │   │   │   ├── reset-password-confirm/route.ts
│   │   │   │   └── callback/
│   │   │   │       └── [provider]/route.ts
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── profile/route.ts
│   │   │   │   ├── dashboard/route.ts
│   │   │   │   ├── usage/route.ts
│   │   │   │   └── account/route.ts
│   │   │   │
│   │   │   ├── projects/
│   │   │   │   ├── generate/route.ts
│   │   │   │   ├── generations/
│   │   │   │   │   ├── route.ts
│   │   │   │   │   └── [generationId]/
│   │   │   │   │       └── route.ts
│   │   │   │   ├── save/route.ts
│   │   │   │   ├── saved/
│   │   │   │   │   ├── route.ts
│   │   │   │   │   └── [projectId]/
│   │   │   │   │       ├── route.ts
│   │   │   │   │       ├── favorite/route.ts
│   │   │   │   │       └── export-pdf/route.ts
│   │   │   │
│   │   │   ├── learning-gap/
│   │   │   │   ├── analyze/route.ts
│   │   │   │   └── [analysisId]/route.ts
│   │   │   │
│   │   │   ├── build-plan/
│   │   │   │   ├── generate/route.ts
│   │   │   │   └── [planId]/route.ts
│   │   │   │
│   │   │   ├── subscriptions/
│   │   │   │   ├── current/route.ts
│   │   │   │   ├── checkout/route.ts
│   │   │   │   ├── manage/route.ts
│   │   │   │   └── cancel/route.ts
│   │   │   │
│   │   │   ├── admin/
│   │   │   │   ├── users/
│   │   │   │   │   ├── route.ts
│   │   │   │   │   └── [userId]/
│   │   │   │   │       └── route.ts
│   │   │   │   ├── analytics/route.ts
│   │   │   │   ├── subscriptions/route.ts
│   │   │   │   └── plans/
│   │   │   │       └── [planId]/route.ts
│   │   │   │
│   │   │   └── webhooks/
│   │   │       ├── stripe/route.ts
│   │   │       └── clerk/route.ts
│   │   │
│   │   └── opengraph-image.tsx # OG image generator
│   │
│   ├── components/             # Reusable React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── DashboardLayout.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ProjectGeneratorForm.tsx
│   │   │   ├── SignUpForm.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   ├── PasswordResetForm.tsx
│   │   │   ├── ProfileForm.tsx
│   │   │   ├── SkillsMultiSelect.tsx
│   │   │   ├── PreferencesForm.tsx
│   │   │   └── FeedbackForm.tsx
│   │   │
│   │   ├── cards/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   └── SkillCard.tsx
│   │   │
│   │   ├── tables/
│   │   │   ├── UsersTable.tsx
│   │   │   ├── SubscriptionsTable.tsx
│   │   │   ├── ProjectsTable.tsx
│   │   │   ├── AnalyticsTable.tsx
│   │   │   └── InvoicesTable.tsx
│   │   │
│   │   ├── modals/
│   │   │   ├── SaveProjectModal.tsx
│   │   │   ├── FavoriteModal.tsx
│   │   │   ├── ShareModal.tsx
│   │   │   ├── ConfirmDeleteModal.tsx
│   │   │   ├── UpgradeModal.tsx
│   │   │   └── FeedbackModal.tsx
│   │   │
│   │   ├── loaders/
│   │   │   ├── SkeletonLoader.tsx
│   │   │   ├── SpinnerLoader.tsx
│   │   │   └── ProgressBar.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── TextArea.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Alert.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Dialog.tsx
│   │   │   ├── Sheet.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   └── Pagination.tsx
│   │   │
│   │   └── common/
│   │       ├── Logo.tsx
│   │       ├── AuthGuard.tsx
│   │       ├── AdminGuard.tsx
│   │       ├── NoData.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── SubscriptionGuard.tsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useUser.ts
│   │   ├── useProjects.ts
│   │   ├── useSubscription.ts
│   │   ├── useAnalytics.ts
│   │   ├── useLearningGap.ts
│   │   ├── useBuildPlan.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── usePagination.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useAsync.ts
│   │
│   ├── lib/                    # Utility functions & helpers
│   │   ├── api/
│   │   │   ├── client.ts       # Axios/fetch client setup
│   │   │   ├── handlers.ts     # Error handling
│   │   │   ├── interceptors.ts # Request/response interceptors
│   │   │   └── endpoints.ts    # API endpoint definitions
│   │   │
│   │   ├── auth/
│   │   │   ├── clerk.ts        # Clerk configuration
│   │   │   ├── guards.ts       # Auth middleware
│   │   │   └── permissions.ts  # Permission checks
│   │   │
│   │   ├── ai/
│   │   │   ├── prompts.ts      # AI prompts library
│   │   │   ├── parser.ts       # Response parsing
│   │   │   └── validator.ts    # Response validation
│   │   │
│   │   ├── stripe/
│   │   │   ├── client.ts       # Stripe SDK setup
│   │   │   ├── webhooks.ts     # Webhook handlers
│   │   │   └── utils.ts        # Helper functions
│   │   │
│   │   ├── db/
│   │   │   ├── prisma.ts       # Prisma client singleton
│   │   │   ├── seed.ts         # Database seeding
│   │   │   └── migrations.ts   # Migration helpers
│   │   │
│   │   ├── utils/
│   │   │   ├── formatting.ts   # Text/date formatting
│   │   │   ├── validation.ts   # Input validation
│   │   │   ├── constants.ts    # App constants
│   │   │   ├── helpers.ts      # General helpers
│   │   │   ├── storage.ts      # Local storage helpers
│   │   │   └── analytics.ts    # Analytics tracking
│   │   │
│   │   ├── schemas/
│   │   │   ├── user.ts         # Zod schemas
│   │   │   ├── project.ts
│   │   │   ├── subscription.ts
│   │   │   └── requests.ts
│   │   │
│   │   └── types/
│   │       ├── index.ts
│   │       ├── user.ts
│   │       ├── project.ts
│   │       ├── api.ts
│   │       ├── ai.ts
│   │       └── common.ts
│   │
│   ├── services/               # Business logic layer
│   │   ├── ProjectService.ts
│   │   ├── UserService.ts
│   │   ├── SubscriptionService.ts
│   │   ├── LearningGapService.ts
│   │   ├── BuildPlanService.ts
│   │   ├── AnalyticsService.ts
│   │   ├── PaymentService.ts
│   │   ├── EmailService.ts
│   │   ├── StorageService.ts
│   │   └── AIService.ts
│   │
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── admin.ts
│   │   ├── rateLimit.ts
│   │   ├── errorHandler.ts
│   │   ├── logger.ts
│   │   └── cors.ts
│   │
│   ├── store/                  # Zustand state management
│   │   ├── authStore.ts
│   │   ├── userStore.ts
│   │   ├── projectStore.ts
│   │   ├── subscriptionStore.ts
│   │   ├── uiStore.ts
│   │   └── index.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css       # CSS variables
│   │   ├── animations.css      # Keyframe animations
│   │   ├── tailwind.css        # Tailwind directives
│   │   └── dark-mode.css       # Dark mode styles
│   │
│   ├── config/
│   │   ├── site.ts             # Site configuration
│   │   ├── clerk.ts            # Clerk config
│   │   ├── openai.ts           # OpenAI config
│   │   ├── stripe.ts           # Stripe config
│   │   ├── sendgrid.ts         # SendGrid config
│   │   └── env.ts              # Environment variables
│   │
│   └── emails/                 # Email templates
│       ├── WelcomeEmail.tsx
│       ├── ResetPasswordEmail.tsx
│       ├── SubscriptionConfirmEmail.tsx
│       ├── InvoiceEmail.tsx
│       └── NewProjectEmail.tsx
│
├── public/                     # Static files
│   ├── images/
│   │   ├── hero.png
│   │   ├── features.png
│   │   ├── testimonials/
│   │   └── logos/
│   ├── icons/
│   ├── fonts/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── prisma/
│   ├── schema.prisma           # Database schema
│   ├── seed.ts                 # Seeding script
│   └── migrations/             # Migration files
│       └── migration_name/
│           ├── migration.sql
│           └── migration_lock.toml
│
├── tests/
│   ├── unit/
│   │   ├── services/
│   │   ├── lib/
│   │   └── utils/
│   ├── integration/
│   │   ├── api/
│   │   ├── auth/
│   │   └── projects/
│   ├── e2e/
│   │   ├── landing.spec.ts
│   │   ├── auth.spec.ts
│   │   ├── generator.spec.ts
│   │   └── dashboard.spec.ts
│   └── fixtures/
│       ├── users.json
│       ├── projects.json
│       └── mocks.ts
│
├── scripts/
│   ├── seed-db.ts              # Seed database
│   ├── migrate.ts              # Run migrations
│   ├── export-analytics.ts     # Export analytics data
│   ├── sync-pricing.ts         # Sync pricing plans
│   └── cleanup-old-data.ts     # Cleanup old records
│
├── docs/
│   ├── API.md                  # API documentation
│   ├── ARCHITECTURE.md         # Architecture docs
│   ├── SETUP.md                # Setup guide
│   ├── DEPLOYMENT.md           # Deployment guide
│   ├── DATABASE.md             # Database docs
│   ├── CONTRIBUTING.md         # Contributing guide
│   ├── API_REFERENCE.md        # Detailed API reference
│   ├── postman-collection.json # Postman API collection
│   └── openapi.yaml            # OpenAPI specification
│
├── .env.example                # Environment variables template
├── .env.local                  # Local environment (git ignored)
├── .env.production             # Production environment (git ignored)
├── .gitignore                  # Git ignore rules
├── .eslintrc.json              # ESLint configuration
├── .prettierrc.json            # Prettier configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
├── package-lock.json           # Dependency lock
├── docker-compose.yml          # Docker compose (for local dev)
├── Dockerfile                  # Production Docker image
├── README.md                   # Project README
├── LICENSE                     # License file
└── CHANGELOG.md                # Changelog
```

## Detailed Folder Descriptions

### `/src/app` - Next.js App Router
The core application structure using Next.js 15's App Router pattern. Organized by feature with route grouping.

### `/src/components` - React Components
Organized by category:
- **layout/** - Page layouts and wrappers
- **forms/** - Form components
- **cards/** - Card-style components
- **tables/** - Data table components
- **modals/** - Modal/dialog components
- **loaders/** - Loading states
- **ui/** - Base UI components (from Shadcn)
- **common/** - Shared utilities

### `/src/hooks` - Custom React Hooks
Reusable hooks for fetching data, managing state, and side effects.

### `/src/lib` - Utilities & Helpers
- **api/** - API client setup and configuration
- **auth/** - Authentication helpers
- **ai/** - AI integration utilities
- **stripe/** - Stripe payment utilities
- **db/** - Database utilities
- **utils/** - General helpers
- **schemas/** - Zod validation schemas
- **types/** - TypeScript type definitions

### `/src/services` - Business Logic
Higher-level services that handle complex business logic and coordinate between multiple layers.

### `/src/middleware` - Request Processing
Middleware for auth checks, rate limiting, error handling, logging, etc.

### `/src/store` - State Management
Zustand stores for global state management:
- Auth state
- User preferences
- Generated projects cache
- Subscription details
- UI state (modals, notifications)

### `/src/styles` - Styling
CSS files including Tailwind directives, CSS variables, animations, and dark mode.

### `/src/config` - Configuration
App configuration files for different services (Clerk, OpenAI, Stripe, etc).

### `/src/emails` - Email Templates
React components for generating HTML emails using libraries like React Email.

### `/public` - Static Assets
Images, icons, fonts, and other static files served by CDN.

### `/prisma` - Database
- `schema.prisma` - Complete database schema
- `seed.ts` - Seed data script
- `migrations/` - Database migration files

### `/tests` - Test Suites
- **unit/** - Unit tests for services, utilities, hooks
- **integration/** - API and integration tests
- **e2e/** - End-to-end tests
- **fixtures/** - Test data and mocks

### `/scripts` - Build & Utility Scripts
Administrative scripts for database seeding, migrations, analytics, cleanup, etc.

### `/docs` - Documentation
Complete project documentation including API docs, architecture, setup guides, and deployment instructions.

## File Naming Conventions

### Pages
```
page.tsx        # Next.js page component
layout.tsx      # Next.js layout component
error.tsx       # Error boundary
loading.tsx     # Loading state
```

### Components
```
ComponentName.tsx              # React component
ComponentName.module.css       # Component styles
ComponentName.test.tsx         # Component tests
ComponentName.stories.tsx      # Storybook stories
```

### Hooks
```
useHookName.ts                 # Custom hook
useHookName.test.ts            # Hook tests
```

### Types
```
types.ts                       # Type definitions
schema.ts                      # Zod schemas
```

### Utilities
```
functionName.ts                # Utility function
functionName.test.ts           # Tests
```

## Build Output

```
buildnext/
├── .next/                     # Next.js build output
├── dist/                      # If using separate build
├── out/                       # Static export (if enabled)
└── coverage/                  # Test coverage reports
```

## Environment Variables Structure

See `.env.example`:
```
# Database
DATABASE_URL=postgresql://...

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# OpenAI
OPENAI_API_KEY=...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...

# Email
SENDGRID_API_KEY=...

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## Installation & Setup

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Setup database
npx prisma db push
npx prisma db seed

# Start development server
npm run dev

# Open http://localhost:3000
```

This structure ensures:
- **Scalability** - Easy to add new features
- **Maintainability** - Clear organization and separation of concerns
- **Testability** - Organized test files next to code
- **Performance** - Optimized bundling and code splitting
- **Developer Experience** - Clear file structure and conventions
