import { createClient } from "@supabase/supabase-js";
import { databaseUrl, databasePublicKey } from "../helpers/process";

if (databaseUrl === undefined || databasePublicKey === undefined) {
  throw new Error("Database initialization error.");
}

export const supabase = createClient(databaseUrl, databasePublicKey);
