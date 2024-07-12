<script>
	import Navbar from '../lib/Navbar.svelte';
	import lamp from '../images/lamp.gif';
</script>

<div><Navbar></Navbar></div>

<div class="wrapper">
	<p1>Welcome to my</p1>
	<div class="typing-demo">Personal Site.</div>
</div>

<div class="lamp">
	<img src={lamp} alt="lamp" />
</div>

<style>
	.lamp {
		text-align: center;
		padding: 40px;
	}

	.wrapper {
		/*This part is important for centering*/
		padding-top: 120px;
		display: grid;
		place-items: center;
		font-size: 40px;
		font-family: monospace;
		transition: 0.3s;
	}

	.typing-demo {
		width: 13ch;
		animation:
			typing 2s steps(13),
			blink 0.5s step-end infinite alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;
		font-size: 60px;
		transition: 0.3s;
	}

	@media only screen and (max-width: 768px) {
		.wrapper {
			font-size: 20px;
			padding-top: 100px;
		}
		.typing-demo {
			font-size: 30px;
		}
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>
