	/** @type {import('@sveltejs/kit'). Load} */
export async function get(page) {

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const VITE_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

   const url =  `https://api.url.com/page/${page.jobs.id}/complexSearch?apiKey=The actual key`;

   const res = await fetch(url);

   const { data } = await res.json();

   if (res.ok) {
      return {
         body: { jobs : data },
      };
      }
   return {
         status:404,
         body: { errors: "Cannot fetch jobs" },
      }
   };