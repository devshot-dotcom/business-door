import { createClient } from "@supabase/supabase-js";
import { databaseUrl, databasePublicKey } from "../utils";

export const supabase = createClient(databaseUrl, databasePublicKey);
