import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bswmbazkzzilbxoodxmr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzd21iYXprenppbGJ4b29keG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNDQwMjcsImV4cCI6MjA2MTkyMDAyN30.lMyjkrqq5x3Dp3PIohMChddA0pUNZMPBrlI3xDjbP-c";

export const supabase = createClient(supabaseUrl, supabaseKey);