import { createClient } from "@supabase/supabase-js";
import { env } from ".";

if (env.database.KEY === undefined || env.database.URL === undefined) {
  throw new Error("Database initialization error.");
}

export const SUPABASE = createClient(env.database.URL, env.database.KEY);
