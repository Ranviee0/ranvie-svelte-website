<script>
	import Navbar from '../../../lib/Navbar.svelte';
	import { page } from '$app/stores';
	const blogName = $page.params.blogName;
	export let data;
	import { marked } from 'marked';
</script>

<Navbar></Navbar>

<div class="blog">
	<div class="blog-content">
		<h1>{blogName}</h1>
		<div class="test">
			{#each data.Blog as blog}
				<div class="blog-html">{@html marked(blog.contents)}</div>
			{/each}
		</div>
	</div>
</div>

<br />
<br />
<br />

<style>
	.blog-html {
		text-align: left;
	}

	.blog {
		/*This part is important for centering*/
		display: grid;
		justify-content: center;
		padding: 20px;
		font-size: 18px;
		font-family: IBM Plex Sans;
		margin-top: 40px;
	}
	.blog-content {
		max-width: 640px;
	}
</style>
