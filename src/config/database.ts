import { createClient } from "@supabase/supabase-js";
import { databaseUrl, databasePublicKey } from "../helpers/meta";

if (databaseUrl === undefined || databasePublicKey === undefined) {
  throw new Error("Database initialization error.");
}

export const supabase = createClient(databaseUrl, databasePublicKey);
