import { createClient } from "@supabase/supabase-js";
import { env } from ".";

if (env.DATABASE.KEY === undefined || env.DATABASE.URL === undefined) {
  throw new Error("Database initialization error.");
}

export const SUPABASE = createClient(env.DATABASE.URL, env.DATABASE.KEY);
