# BuildNext – API Endpoints Reference

## Base URL
```
Development: http://localhost:3000
Production: https://buildnext.app
```

## Authentication

All protected endpoints require:
```
Authorization: Bearer <jwt_token>
```

Obtained from Clerk or NextAuth after login.

---

## Public Endpoints

### Landing Page & Marketing
```
GET  /                    # Landing page
GET  /pricing             # Pricing page
GET  /about               # About page
GET  /blog                # Blog posts
GET  /docs                # Documentation
```

---

## Authentication Endpoints

### POST `/api/auth/signup`
Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "name": "John Doe"
}
```

**Response:** `201 Created`
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-06-01T10:00:00Z"
}
```

### POST `/api/auth/login`
Authenticate user (if using NextAuth).

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response:** `200 OK`
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_123",
    "email": "user@example.com"
  }
}
```

### POST `/api/auth/logout`
Logout user and invalidate session.

**Response:** `200 OK`
```json
{
  "message": "Successfully logged out"
}
```

### POST `/api/auth/password-reset`
Request password reset email.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:** `200 OK`
```json
{
  "message": "Password reset email sent"
}
```

### POST `/api/auth/password-reset-confirm`
Confirm password reset with token.

**Request Body:**
```json
{
  "token": "reset_token_here",
  "newPassword": "NewPassword123!"
}
```

**Response:** `200 OK`
```json
{
  "message": "Password updated successfully"
}
```

### GET `/api/auth/callback/[provider]`
OAuth callback (Clerk/NextAuth handles this).

---

## User Endpoints (Protected)

### GET `/api/users/profile`
Get current user profile.

**Response:** `200 OK`
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "image": "https://...",
  "skills": ["JavaScript", "React", "Node.js"],
  "experienceLevel": "intermediate",
  "interests": "Web development, AI",
  "preferredTechStack": ["Next.js", "PostgreSQL"],
  "hoursPerWeek": 20,
  "teamSize": "solo",
  "careerGoals": ["portfolio", "job"],
  "createdAt": "2024-06-01T10:00:00Z"
}
```

### PUT `/api/users/profile`
Update user profile.

**Request Body:**
```json
{
  "name": "John Updated",
  "skills": ["JavaScript", "React", "Node.js", "Python"],
  "experienceLevel": "advanced",
  "interests": "Full-stack development",
  "hoursPerWeek": 25
}
```

**Response:** `200 OK`
```json
{
  "id": "user_123",
  "...": "updated fields"
}
```

### GET `/api/users/dashboard`
Get dashboard data for user.

**Response:** `200 OK`
```json
{
  "user": { "..." },
  "subscription": { "..." },
  "stats": {
    "totalGenerations": 12,
    "totalSavedProjects": 8,
    "generationsThisWeek": 3,
    "generationsRemainingToday": 2
  },
  "recentGenerations": [
    { "id": "gen_1", "title": "...", "createdAt": "..." },
    { "id": "gen_2", "title": "...", "createdAt": "..." }
  ],
  "savedProjects": [
    { "id": "proj_1", "title": "...", "difficulty": "intermediate" },
    { "id": "proj_2", "title": "...", "difficulty": "advanced" }
  ]
}
```

### GET `/api/users/usage`
Get API usage statistics for current month.

**Response:** `200 OK`
```json
{
  "generationsUsed": 15,
  "generationsLimit": 150,
  "savedProjectsUsed": 8,
  "savedProjectsLimit": 50,
  "apiCallsThisMonth": 234,
  "tokensUsedThisMonth": 45000
}
```

### DELETE `/api/users/account`
Delete user account and all associated data.

**Query Parameters:**
- `confirm=true` (required for safety)

**Response:** `200 OK`
```json
{
  "message": "Account deleted successfully"
}
```

---

## Project Generation Endpoints (Protected)

### POST `/api/projects/generate`
Generate AI project ideas based on user input.

**Request Body:**
```json
{
  "skills": ["JavaScript", "React", "Node.js"],
  "experienceLevel": "intermediate",
  "careerGoal": "portfolio",
  "interests": "Web development and cloud computing",
  "preferredTechStack": ["Next.js", "PostgreSQL", "Docker"],
  "hoursPerWeek": 20,
  "teamSize": "solo",
  "numberOfIdeas": 5
}
```

**Response:** `200 OK` (Streaming)
```json
{
  "generationId": "gen_123",
  "ideas": [
    {
      "id": "idea_1",
      "title": "Real-time Collaboration Tool",
      "elevatorPitch": "A Figma-like design tool for developers",
      "difficulty": "advanced",
      "portfolioScore": 9,
      "startupScore": 8,
      "problemSolved": "...",
      "targetUsers": "...",
      "techStack": {
        "frontend": ["Next.js", "React", "WebSocket"],
        "backend": ["Node.js", "Express"],
        "database": "PostgreSQL",
        "deployment": "AWS EC2"
      },
      "coreFeatures": ["...", "..."],
      "advancedFeatures": ["...", "..."],
      "databaseSchema": { "..." },
      "apiEndpoints": ["...", "..."],
      "architecture": "...",
      "folderStructure": "...",
      "roadmap": { "phase1": ["..."], "phase2": ["..."] },
      "skillsLearned": ["...", "..."],
      "estimatedTime": "8 weeks",
      "monetization": "...",
      "resumeBullet": "...",
      "interviewTopics": ["...", "..."]
    },
    { "..." },
    { "..." },
    { "..." },
    { "..." }
  ]
}
```

**Error Responses:**
- `400 Bad Request`: Invalid input
- `402 Payment Required`: Free plan limit exceeded
- `429 Too Many Requests`: Rate limited
- `500 Internal Server Error`: OpenAI API error

### GET `/api/projects/generations`
Get all project generations for current user.

**Query Parameters:**
- `page=1` (default)
- `limit=10` (default, max 50)
- `sort=recent` (recent, oldest, popular)

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "gen_123",
      "skills": ["JavaScript", "React"],
      "experienceLevel": "intermediate",
      "careerGoal": "portfolio",
      "numberOfIdeas": 5,
      "generatedIdeas": [
        { "id": "idea_1", "title": "..." },
        { "id": "idea_2", "title": "..." }
      ],
      "createdAt": "2024-06-01T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45
  }
}
```

### GET `/api/projects/generations/[generationId]`
Get a specific generation with all ideas.

**Response:** `200 OK`
```json
{
  "id": "gen_123",
  "userId": "user_123",
  "skills": ["..."],
  "experienceLevel": "intermediate",
  "careerGoal": "portfolio",
  "interests": "...",
  "numberOfIdeas": 5,
  "generatedIdeas": [
    { "id": "idea_1", "title": "...", "..." },
    { "id": "idea_2", "title": "...", "..." }
  ],
  "createdAt": "2024-06-01T10:00:00Z",
  "updatedAt": "2024-06-01T10:00:00Z"
}
```

### DELETE `/api/projects/generations/[generationId]`
Delete a generation (cascade delete related data).

**Response:** `200 OK`
```json
{
  "message": "Generation deleted successfully"
}
```

---

## Saved Projects Endpoints (Protected)

### POST `/api/projects/save`
Save a generated project idea.

**Request Body:**
```json
{
  "generationId": "gen_123",
  "projectData": {
    "title": "Real-time Collaboration Tool",
    "elevatorPitch": "A Figma-like design tool",
    "difficulty": "advanced",
    "portfolioScore": 9,
    "startupScore": 8,
    "...": "other fields"
  },
  "tags": ["SaaS", "Real-time", "Advanced"],
  "notes": "This looks perfect for my portfolio!"
}
```

**Response:** `201 Created`
```json
{
  "id": "saved_proj_1",
  "userId": "user_123",
  "title": "Real-time Collaboration Tool",
  "isFavorited": false,
  "createdAt": "2024-06-01T10:00:00Z"
}
```

### GET `/api/projects/saved`
Get all saved projects for current user.

**Query Parameters:**
- `page=1`
- `limit=10`
- `sort=recent` (recent, alphabetical, difficulty, score)
- `difficulty=intermediate` (optional filter)
- `portfolioScoreMin=7` (optional filter)
- `search=collaboration` (optional search)

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "saved_proj_1",
      "title": "Real-time Collaboration Tool",
      "difficulty": "advanced",
      "portfolioScore": 9,
      "startupScore": 8,
      "isFavorited": false,
      "tags": ["SaaS", "Real-time"],
      "notes": "...",
      "createdAt": "2024-06-01T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 8
  }
}
```

### GET `/api/projects/saved/[projectId]`
Get details of a specific saved project.

**Response:** `200 OK`
```json
{
  "id": "saved_proj_1",
  "title": "Real-time Collaboration Tool",
  "elevatorPitch": "...",
  "problemSolved": "...",
  "targetUsers": "...",
  "difficulty": "advanced",
  "portfolioScore": 9,
  "startupScore": 8,
  "techStack": { "..." },
  "coreFeatures": ["..."],
  "advancedFeatures": ["..."],
  "databaseSchema": { "..." },
  "apiEndpoints": ["..."],
  "architecture": "...",
  "folderStructure": "...",
  "roadmap": { "..." },
  "skillsLearned": ["..."],
  "estimatedTime": "8 weeks",
  "monetization": "...",
  "resumeBullet": "...",
  "interviewTopics": ["..."],
  "isFavorited": false,
  "tags": ["SaaS", "Real-time"],
  "notes": "...",
  "createdAt": "2024-06-01T10:00:00Z"
}
```

### PUT `/api/projects/saved/[projectId]`
Update a saved project (notes, tags, etc).

**Request Body:**
```json
{
  "tags": ["SaaS", "Real-time", "WebSocket"],
  "notes": "Updated notes about this project",
  "isFavorited": true
}
```

**Response:** `200 OK`
```json
{
  "id": "saved_proj_1",
  "...": "updated fields"
}
```

### POST `/api/projects/saved/[projectId]/favorite`
Toggle favorite status of a project.

**Response:** `200 OK`
```json
{
  "id": "saved_proj_1",
  "isFavorited": true
}
```

### DELETE `/api/projects/saved/[projectId]`
Delete a saved project.

**Response:** `200 OK`
```json
{
  "message": "Project deleted successfully"
}
```

### POST `/api/projects/saved/[projectId]/export-pdf`
Export project as PDF.

**Response:** `200 OK` (File download)
- Content-Type: `application/pdf`
- File: `Project-Real-Time-Collaboration-Tool.pdf`

---

## Learning Gap Analyzer Endpoints (Protected)

### POST `/api/learning-gap/analyze`
Analyze skills and generate learning path.

**Request Body:**
```json
{
  "currentSkills": ["HTML", "CSS", "JavaScript"],
  "targetRole": "Full Stack Developer",
  "targetTechStack": ["React", "Node.js", "PostgreSQL"],
  "timelineWeeks": 12
}
```

**Response:** `200 OK`
```json
{
  "id": "gap_analysis_1",
  "currentSkills": ["HTML", "CSS", "JavaScript"],
  "missingSkills": [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "REST APIs",
    "Git"
  ],
  "skillGaps": [
    {
      "skill": "React",
      "importance": "critical",
      "estimatedWeeks": 3,
      "resources": [
        { "title": "React Docs", "url": "...", "type": "official" },
        { "title": "React Course", "url": "...", "type": "course" }
      ]
    }
  ],
  "learningPath": [
    {
      "week": 1,
      "skills": ["API Basics", "REST Concepts"],
      "tasks": ["Learn REST principles", "Build simple API"]
    },
    {
      "week": 2,
      "skills": ["Express.js", "Routing"],
      "tasks": ["Setup Express", "Create routes"]
    }
  ],
  "estimatedCompletionDate": "2024-09-01",
  "recommendedProjects": [
    {
      "title": "Todo API",
      "skills": ["Express", "PostgreSQL"],
      "difficulty": "beginner"
    }
  ]
}
```

### GET `/api/learning-gap/[analysisId]`
Get a specific learning gap analysis.

**Response:** `200 OK` (Same as above)

---

## Build Plan Endpoints (Protected)

### POST `/api/build-plan/generate`
Generate a 30-day build plan for a project.

**Request Body:**
```json
{
  "projectId": "saved_proj_1",
  "estimatedHoursPerDay": 3,
  "difficulty": "advanced",
  "projectTitle": "Real-time Collaboration Tool",
  "projectDescription": "A Figma-like design tool..."
}
```

**Response:** `200 OK`
```json
{
  "id": "build_plan_1",
  "projectTitle": "Real-time Collaboration Tool",
  "startDate": "2024-06-01",
  "endDate": "2024-07-01",
  "totalDays": 30,
  "dailyPlan": [
    {
      "day": 1,
      "date": "2024-06-01",
      "phase": "Setup & Planning",
      "tasks": [
        "Create project repository",
        "Setup Next.js and dependencies",
        "Create database schema"
      ],
      "resources": ["..."],
      "estimatedHours": 3,
      "checkpoint": "Repository created and tested"
    },
    {
      "day": 2,
      "date": "2024-06-02",
      "phase": "Setup & Planning",
      "tasks": [
        "Setup authentication",
        "Create user model",
        "Implement login/signup"
      ],
      "resources": ["..."],
      "estimatedHours": 3,
      "checkpoint": "User authentication working"
    },
    { "..." },
    { "..." }
  ],
  "milestones": [
    {
      "day": 5,
      "title": "Core Backend Complete",
      "description": "API routes and database setup complete"
    },
    {
      "day": 15,
      "title": "Frontend MVP Ready",
      "description": "All core UI components built"
    },
    {
      "day": 25,
      "title": "Feature Complete",
      "description": "All features implemented"
    },
    {
      "day": 30,
      "title": "Ready for Deployment",
      "description": "Testing and optimizations complete"
    }
  ]
}
```

### GET `/api/build-plan/[planId]`
Get a specific build plan.

**Response:** `200 OK` (Same format as above)

---

## Subscription Endpoints (Protected)

### GET `/api/subscriptions/current`
Get current subscription details.

**Response:** `200 OK`
```json
{
  "id": "sub_123",
  "planId": "free",
  "planName": "Free",
  "status": "ACTIVE",
  "generationsPerDay": 5,
  "generationsUsedToday": 2,
  "generationsRemainingToday": 3,
  "maxSavedProjects": 3,
  "savedProjectsUsed": 2,
  "features": {
    "pdfExport": false,
    "architectureGenerator": false,
    "startupMode": false
  },
  "currentPeriodStart": null,
  "currentPeriodEnd": null,
  "stripeCustomerId": null
}
```

### POST `/api/subscriptions/checkout`
Create Stripe checkout session.

**Request Body:**
```json
{
  "planId": "pro",
  "billingCycle": "monthly"
}
```

**Response:** `200 OK`
```json
{
  "sessionId": "cs_test_123",
  "url": "https://checkout.stripe.com/pay/cs_test_123"
}
```

### GET `/api/subscriptions/manage`
Get Stripe customer portal URL.

**Response:** `200 OK`
```json
{
  "url": "https://billing.stripe.com/p/session/..."
}
```

### POST `/api/subscriptions/cancel`
Cancel current subscription.

**Response:** `200 OK`
```json
{
  "message": "Subscription canceled",
  "canceledAt": "2024-06-01T10:00:00Z",
  "refundAmount": 0
}
```

---

## Webhook Endpoints (No Auth Required)

### POST `/api/webhooks/stripe`
Receive Stripe events (payment, subscription updates).

**Headers:**
```
stripe-signature: <signature>
```

**Request Body:**
```json
{
  "id": "evt_123",
  "type": "charge.succeeded",
  "data": {
    "object": {
      "id": "ch_123",
      "amount": 900,
      "currency": "usd"
    }
  }
}
```

**Response:** `200 OK`
```json
{
  "received": true
}
```

### POST `/api/webhooks/clerk`
Receive Clerk auth events.

**Response:** `200 OK`
```json
{
  "received": true
}
```

---

## Admin Endpoints (Protected - Admin Only)

### GET `/api/admin/users`
List all users with filtering.

**Query Parameters:**
- `page=1`
- `limit=20`
- `sort=newest`
- `status=ACTIVE` (ACTIVE, INACTIVE, BANNED)
- `search=email@example.com`

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "user_1",
      "email": "user1@example.com",
      "name": "User One",
      "status": "ACTIVE",
      "subscription": {
        "planId": "pro",
        "status": "ACTIVE"
      },
      "generationsCount": 45,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1234
  }
}
```

### GET `/api/admin/users/[userId]`
Get detailed user info.

**Response:** `200 OK`
```json
{
  "id": "user_123",
  "email": "...",
  "name": "...",
  "subscription": { "..." },
  "usage": { "..." },
  "projects": { "..." }
}
```

### PUT `/api/admin/users/[userId]`
Update user (ban, adjust limits, etc).

**Request Body:**
```json
{
  "status": "BANNED",
  "generationsPerDay": 10
}
```

**Response:** `200 OK`

### GET `/api/admin/analytics`
Get platform analytics.

**Query Parameters:**
- `dateFrom=2024-01-01`
- `dateTo=2024-06-01`

**Response:** `200 OK`
```json
{
  "dateRange": {
    "from": "2024-01-01",
    "to": "2024-06-01"
  },
  "users": {
    "totalUsers": 5234,
    "newUsersThisMonth": 523,
    "activeUsersThisMonth": 2341,
    "churnRate": 0.05
  },
  "generations": {
    "totalGenerations": 45234,
    "averagePerUser": 8.6,
    "mostPopularSkills": ["JavaScript", "Python", "React"]
  },
  "subscriptions": {
    "totalActiveSubscriptions": 1203,
    "freeUsers": 4031,
    "proUsers": 1203
  },
  "revenue": {
    "mrr": 10827,
    "totalRevenue": 54000,
    "averageArpu": 9
  }
}
```

### GET `/api/admin/subscriptions`
List all subscriptions.

**Response:** Similar to user listing

### PUT `/api/admin/plans/[planId]`
Update a pricing plan.

**Request Body:**
```json
{
  "monthlyPrice": 9.99,
  "features": {
    "pdfExport": true,
    "architectureGenerator": true
  }
}
```

**Response:** `200 OK`

---

## Error Response Format

All errors follow this format:

```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested resource was not found",
    "statusCode": 404,
    "details": {
      "resourceId": "proj_123",
      "resourceType": "Project"
    }
  }
}
```

### Common Error Codes

| Code | HTTP | Meaning |
|------|------|---------|
| `UNAUTHORIZED` | 401 | Not authenticated |
| `FORBIDDEN` | 403 | Not authorized |
| `RESOURCE_NOT_FOUND` | 404 | Resource doesn't exist |
| `VALIDATION_ERROR` | 400 | Invalid input |
| `QUOTA_EXCEEDED` | 402 | Limit exceeded |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_SERVER_ERROR` | 500 | Server error |

---

## Rate Limiting

- **Free Plan:** 100 requests/min per user
- **Pro Plan:** 1000 requests/min per user
- **AI Generation:** 5 requests/day per user (free), unlimited (pro)

Headers returned with each response:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1622505600
```

---

## Response Pagination

Paginated endpoints return:

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

---

## Timestamps

All timestamps are in ISO 8601 format:
```
2024-06-01T10:30:45Z
```

---

## API Documentation Tools

- **Postman Collection:** Available in `/docs/postman-collection.json`
- **OpenAPI Spec:** Available in `/docs/openapi.yaml`
- **Swagger UI:** Available at `/api/docs`
