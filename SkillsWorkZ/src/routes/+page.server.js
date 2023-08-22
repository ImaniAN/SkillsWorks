  import { supabase } from "$lib/supabaseClient";

  export async function load() {
    const { data } = await supabase.from("skills_levels").select();
    return {
     skills_levels: data ?? [],
    };
  }