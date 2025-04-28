import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oaryytexeojxfhairltn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hcnl5dGV4ZW9qeGZoYWlybHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2OTkxMjIsImV4cCI6MjA2MTI3NTEyMn0.S4SyRl5Wxs8y-c5IeVlvf7F0ghOFDG94uc0Yz8GNc6w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
