import { defineConfig } from "drizzle-kit";
import "./src/drizzle/envConfig";

export default defineConfig({
    schema: "./src/server/db/schemas",
    out: "./src/server/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
  });
