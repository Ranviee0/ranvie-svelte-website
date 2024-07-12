import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
	'https://hxaoyrpnwfkcqxmazdrt.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4YW95cnBud2ZrY3F4bWF6ZHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNzQ2NDIsImV4cCI6MjAyNjc1MDY0Mn0.YVJDA93HKTQRsMbMtIsk_HJOID8N_F7DHcAQKqYSDo8'
);
