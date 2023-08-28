// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("skills_levels").select();
  return {
    skills_levels: data ?? [],
  };
}