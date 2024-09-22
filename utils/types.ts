import { Database } from "./supabase/types";

export type Event = Database["public"]["Tables"]["events"]["Row"]