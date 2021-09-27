import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zefqqojpouezukgbvrjm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjY5NzMwNiwiZXhwIjoxOTQ4MjczMzA2fQ.PIFOOVkd4ra2A82SZktZiGue9DLy1MO259h8eHSNU1g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)