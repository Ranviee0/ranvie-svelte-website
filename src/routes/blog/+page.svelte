<script>
	import Navbar from '../../lib/Navbar.svelte';
	export let data;
</script>

<Navbar></Navbar>

<div class="blogpage">
	<h1 class="blogpage-header">Ranviee's Blog</h1>

	<div>
		{#each data.Blog as blog}
			<div class="blog-preview">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class={'image'} src={blog.preview_image} alt="image" width="100" height="100" />
				<div class="blog-preview-text">
					<a class="link-text-header" href={'/blog/' + blog.name}>{blog.name}</a>
					<br />
					<p1 class="blog-preview-desc">{blog.preview}</p1>
				</div>
			</div>
		{/each}
	</div>
</div>

<br />
<br />

<style>
	.image {
		border-radius: 10px;
	}
	.blog-preview-desc {
		font-size: 16px;
	}
	.link-text-header {
		font-weight: bold;
		text-decoration: none;
		color: white;
		transition: 0.2s;
		font-size: 22px;
	}
	.link-text-header:hover {
		color: purple;
		background-color: rgba(145, 92, 182, 0.07);
		box-shadow: 0 0px 25px rgba(145, 92, 182, 0.2);
	}
	.blog-preview {
		background-color: rgb(20, 20, 20);
		padding: 15px;
		margin-bottom: 10px;
		display: flex;
		max-width: 640px;
		border-radius: 20px;
	}
	.blog-preview-text {
		padding-left: 16px;
		padding-right: 8px;
	}
	.blogpage {
		padding-top: 60px;
		font-size: 20px;
		display: grid;
		justify-content: center;
		font-family: IBM Plex Sans;
	}

	.blogpage-header {
		font-family: IBM Plex Sans;
	}

	@media only screen and (max-width: 768px) {
		.blogpage {
			margin-left: 10px;
			margin-right: 10px;
		}
	}
</style>
