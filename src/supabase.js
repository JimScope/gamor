import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseUrl = 'https://zwrachaieggvehwzpnpo.supabase.co'
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjY4ODU1MSwiZXhwIjoxOTQ4MjY0NTUxfQ.CZVXMpJg-YTKQnzkhpNVCUGxqWsk8I1FvVcl0InPnTk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)