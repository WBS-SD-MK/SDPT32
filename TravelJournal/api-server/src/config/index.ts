import { z } from 'zod';

const envSchema = z.object({
  MONGO_URI: z.url({ protocol: /mongodb/ }),
  DB_NAME: z.string().default('travel-journal'),
  PORT: z.int().default(8000),
  AUTH_BASE_URL: z.string().default('http://localhost:3000'),
  CLIENT_BASE_URL: z.string().default('http://localhost:5173'),
  ACCESS_JWT_SECRET: z
    .string({
      error: 'ACCESS_JWT_SECRET is required and must be at least 64 characters long'
    })
    .min(64)
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:\n', z.prettifyError(parsedEnv.error));
  process.exit(1);
}

export const { ACCESS_JWT_SECRET, DB_NAME, MONGO_URI, PORT, CLIENT_BASE_URL, AUTH_BASE_URL } = parsedEnv.data;
