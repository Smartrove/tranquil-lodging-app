import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ddjntqcvggeqbrdnllqn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkam50cWN2Z2dlcWJyZG5sbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNjgyOTQsImV4cCI6MjAwNDg0NDI5NH0.ZdEr8SBjhLjr1XbrPYhfVgiMXWCH18GHIIGrm8o5KNI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
