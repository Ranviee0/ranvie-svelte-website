import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data } = await supabase
		.from('Blog')
		.select('name, preview, contents')
		.eq('name', `${params.blogName}`);
	return {
		Blog: data ?? []
	};
}
