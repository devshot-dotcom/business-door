import { createClient } from "@supabase/supabase-js";
import { databaseUrl, databasePublicKey } from "../helpers/process";

export const supabase = createClient(databaseUrl, databasePublicKey);
