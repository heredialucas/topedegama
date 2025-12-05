import 'dotenv/config'
import { defineConfig } from "prisma/config";

// Use process.env directly to avoid throwing if DATABASE_URL is not set during
// builds that only need the client generated (e.g., web packages in a monorepo).
const databaseUrl = process.env.DATABASE_URL;

export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
        seed: 'tsx prisma/seed.ts',
    },
    // Only include the datasource when a DATABASE_URL is provided. This prevents
    // prisma/config's env helper from throwing a PrismaConfigEnvError at import
    // time in environments where the database is intentionally unavailable.
    datasource: databaseUrl ? { url: databaseUrl } : undefined,
});