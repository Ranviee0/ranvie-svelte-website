<script>
	import { onMount } from 'svelte';
	const scrollNavBar = 60;
	let show = false;

	onMount(() => {
		window.onscroll = () => {
			if (window.scrollY > scrollNavBar) {
				show = true;
			} else {
				show = false;
			}
		};
	});
</script>

<div>
	<div class={'navbar'} class:scrolled={show}>
		<a class={'flex-item'} href="/">home</a>
		<a class={'flex-item'} href="/blog">blog</a>
		<a class={'flex-item'} href="/about">about</a>
	</div>
</div>

<style>
	.scrolled {
		transform: translate(0, calc(-100% - 1rem));
	}
	.navbar {
		top: 0;
		width: 100%;
		height: 4rem;
		background-color: rgb(30, 30, 30);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-family: IBM Plex Sans;
		position: fixed;
		transition: 0.3s;
	}
	.flex-item {
		display: block;
		font-size: 1.5em;
		color: white;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		text-decoration: none;
		text-align: center;
		transition: 0.3s;
	}

	.flex-item:hover {
		border-radius: 50%;
		color: purple;
		box-shadow: 0 0px 25px rgba(145, 92, 182, 0.15);
		background-color: rgba(145, 92, 182, 0.07);
	}

	@media only screen and (min-width: 768px) {
		.flex-item {
			margin: 3em;
		}
	}
</style>
