import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('Blog').select('name, preview, preview_image');
	return {
		Blog: data ?? []
	};
}
