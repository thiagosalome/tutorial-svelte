<script>
	export let name;

	import Reactivity from "./pages/Reactivity.svelte";

	// -------------------------------------------------------

	import Props from "./pages/Props.svelte"

	// -------------------------------------------------------

	import Logic from "./pages/Logic.svelte"

	// -------------------------------------------------------
	import Events from './pages/Events.svelte'
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Reactivity />

	<hr>

	<Props />

	<hr>

	<Logic />

	<hr>

	<Events />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>