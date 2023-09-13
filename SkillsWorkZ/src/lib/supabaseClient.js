import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://pqbwxpevyfbndjzmpqmz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxYnd4cGV2eWZibmRqem1wcW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk3MzU4MDYsImV4cCI6MTk3NTMxMTgwNn0.xbVA6yiYVnjj6cfJw8lv2oR-Nj_He0ygFLl9J-0LumA')