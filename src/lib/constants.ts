export const EXPERIENCE_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

export const CAREER_GOALS = [
  'portfolio',
  'job',
  'freelance',
  'startup',
  'learning',
] as const;

export const TEAM_SIZES = ['solo', 'team'] as const;

export const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

export const SKILLS_LIST = [
  // Frontend
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Angular',
  'Next.js',
  'Svelte',
  'Tailwind CSS',
  'Bootstrap',
  'Responsive Design',
  'Web Accessibility',

  // Backend
  'Node.js',
  'Python',
  'Java',
  'C#',
  'PHP',
  'Ruby',
  'Go',
  'Rust',
  'Express.js',
  'Django',
  'FastAPI',
  'Spring Boot',
  'Rails',
  'ASP.NET',

  // Databases
  'SQL',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'Redis',
  'Elasticsearch',
  'DynamoDB',

  // DevOps & Infrastructure
  'Docker',
  'Kubernetes',
  'CI/CD',
  'GitHub Actions',
  'AWS',
  'Google Cloud',
  'Azure',
  'Vercel',
  'Heroku',
  'Linux',
  'nginx',

  // Tools & Practices
  'Git',
  'REST APIs',
  'GraphQL',
  'WebSockets',
  'Authentication',
  'Testing',
  'Performance Optimization',
  'Security',
  'SEO',
  'Analytics',

  // Emerging Tech
  'AI/ML',
  'Machine Learning',
  'TensorFlow',
  'PyTorch',
  'ChatGPT API',
  'Blockchain',
  'Web3',
  'Mobile Development',
  'React Native',
  'Flutter',
];

export const PLANS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    generationsPerDay: 5,
    maxSavedProjects: 3,
    features: {
      pdfExport: false,
      architectureGenerator: false,
      startupMode: false,
      teamCollaboration: false,
      prioritySupport: false,
    },
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    price: 9,
    generationsPerDay: -1, // unlimited
    maxSavedProjects: -1,
    features: {
      pdfExport: true,
      architectureGenerator: true,
      startupMode: true,
      teamCollaboration: false,
      prioritySupport: true,
    },
  },
  ENTERPRISE: {
    id: 'enterprise',
    name: 'Enterprise',
    price: null, // Custom pricing
    generationsPerDay: -1,
    maxSavedProjects: -1,
    features: {
      pdfExport: true,
      architectureGenerator: true,
      startupMode: true,
      teamCollaboration: true,
      prioritySupport: true,
    },
  },
};

export const API_ROUTES = {
  AUTH: {
    SIGNUP: '/api/auth/signup',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    RESET_PASSWORD: '/api/auth/password-reset',
  },
  PROJECTS: {
    GENERATE: '/api/projects/generate',
    GET_GENERATIONS: '/api/projects/generations',
    GET_GENERATION: (id: string) => `/api/projects/generations/${id}`,
    SAVE: '/api/projects/save',
    GET_SAVED: '/api/projects/saved',
    GET_PROJECT: (id: string) => `/api/projects/saved/${id}`,
    FAVORITE: (id: string) => `/api/projects/saved/${id}/favorite`,
    DELETE: (id: string) => `/api/projects/saved/${id}`,
    EXPORT_PDF: (id: string) => `/api/projects/saved/${id}/export-pdf`,
  },
  USERS: {
    PROFILE: '/api/users/profile',
    DASHBOARD: '/api/users/dashboard',
    USAGE: '/api/users/usage',
  },
  SUBSCRIPTIONS: {
    CURRENT: '/api/subscriptions/current',
    CHECKOUT: '/api/subscriptions/checkout',
    MANAGE: '/api/subscriptions/manage',
    CANCEL: '/api/subscriptions/cancel',
  },
  LEARNING_GAP: {
    ANALYZE: '/api/learning-gap/analyze',
    GET: (id: string) => `/api/learning-gap/${id}`,
  },
  BUILD_PLAN: {
    GENERATE: '/api/build-plan/generate',
    GET: (id: string) => `/api/build-plan/${id}`,
  },
};

export const TIMEOUTS = {
  SHORT: 3000,
  MEDIUM: 5000,
  LONG: 10000,
  API_CALL: 30000,
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  QUOTA_EXCEEDED: 402,
  RATE_LIMITED: 429,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};
