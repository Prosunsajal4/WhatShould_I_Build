# BuildNext – AI-Powered Project Idea Generator

[![GitHub](https://img.shields.io/badge/GitHub-blue?logo=github)](https://github.com/buildnext/buildnext)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)

Generate personalized, portfolio-worthy software projects based on your skills, experience level, interests, and career goals.

## 🚀 Features

- **AI-Powered Generation** - Generate unique project ideas using GPT-4
- **Personalized Ideas** - Tailored to your skills, experience, and career goals
- **Complete Specifications** - Tech stacks, features, roadmaps, architecture
- **Learning Path** - AI-generated skill gap analysis and learning recommendations
- **30-Day Build Plans** - Day-by-day development roadmaps
- **Portfolio Scoring** - Understand project impact on your portfolio
- **Startup Potential** - See monetization opportunities
- **Save & Export** - Save projects and export as PDF
- **Premium Features** - Unlimited generations, team collaboration, architecture diagrams

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Zustand** - State management
- **TanStack Query** - Data fetching
- **Framer Motion** - Animations

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma** - ORM
- **PostgreSQL** - Database
- **OpenAI API** - AI generation
- **Stripe** - Payments
- **Clerk** - Authentication

### Deployment
- **Vercel** - Hosting
- **Supabase** - Managed PostgreSQL
- **SendGrid** - Email service

## 📋 Requirements

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## 🚀 Quick Start

1. **Clone Repository**
```bash
git clone https://github.com/buildnext/buildnext.git
cd buildnext
```

2. **Install Dependencies**
```bash
npm install
```

3. **Setup Environment Variables**
```bash
cp .env.example .env.local
```

4. **Setup Database**
```bash
npx prisma db push
npx prisma db seed
```

5. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- [Product Requirements Document](./PRD.md) - Complete product specification
- [Database Schema](./DATABASE_SCHEMA.md) - Prisma schema and relationships
- [System Architecture](./SYSTEM_ARCHITECTURE.md) - Technical architecture
- [API Endpoints](./API_ENDPOINTS.md) - Complete API reference
- [Folder Structure](./FOLDER_STRUCTURE.md) - Project organization
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deployment instructions

## 🔐 Authentication

BuildNext uses Clerk for authentication:

- Email/Password signup and login
- Google OAuth
- GitHub OAuth
- Password reset
- Email verification

## 💳 Billing

Stripe integration for:
- Monthly and annual subscription plans
- Billing portal for customers
- Invoice management
- Subscription management

## 📊 Database

PostgreSQL with Prisma ORM:

**Key Tables:**
- `User` - User accounts
- `Subscription` - Subscription information
- `ProjectGeneration` - Generated project ideas
- `SavedProject` - Saved projects
- `Payment` - Payment records
- `Analytics` - Platform analytics

## 🤖 AI Integration

OpenAI GPT-4 for:
- Project idea generation
- Learning gap analysis
- Build plan creation
- Architecture suggestions

## 📈 Analytics

PostHog integration for:
- User activity tracking
- Feature adoption
- Conversion metrics
- Retention analysis

## 🧪 Testing

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# E2E tests
npm run test:e2e
```

## 🎨 Code Quality

```bash
# Format code
npm run format

# Type check
npm run type-check

# Lint
npm run lint
```

## 📦 Database Commands

```bash
# Push schema to database
npm run db:push

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed

# Open Prisma Studio
npm run db:studio
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository in Vercel
3. Set environment variables
4. Deploy

```bash
vercel
```

### Docker

```bash
docker-compose up -d
npm run build
npm start
```

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

## 📝 License

MIT License - see [LICENSE](./LICENSE) file

## 🙋 Support

- **Issues** - [GitHub Issues](https://github.com/buildnext/buildnext/issues)
- **Email** - support@buildnext.app
- **Twitter** - [@BuildNextApp](https://twitter.com/buildnextapp)

## 👥 Team

Built by the BuildNext team. [Meet the team →](https://buildnext.app/team)

---

**Ready to build your next project?**

[Generate Project Ideas](https://buildnext.app) • [Documentation](./docs) • [Blog](https://buildnext.app/blog)
