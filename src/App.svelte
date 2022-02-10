<script>
	export let name;

	import Reactivity from "./pages/Reactivity.svelte";

	// -------------------------------------------------------

	import Props from "./pages/Props.svelte"

	// -------------------------------------------------------

	import Logic from "./pages/Logic.svelte"

	// -------------------------------------------------------

	import Events from './pages/Events.svelte'

	// -------------------------------------------------------

	import Bindings from "./pages/Bindings.svelte";

	// -------------------------------------------------------

	import Lifecycle from "./pages/Lifecycle.svelte";

	// -------------------------------------------------------

	import Stores from "./pages/Stores.svelte";

	// -------------------------------------------------------

	import Motion from "./pages/Motion.svelte";

	// -------------------------------------------------------

	import Transitions from "./pages/Transitions.svelte";

	// -------------------------------------------------------

	import Animations from "./pages/Animations.svelte";

	// -------------------------------------------------------

	import Actions from "./pages/Actions.svelte";
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

	<hr>
	
	<Bindings />
	
	<hr>

	<Lifecycle />

	<hr>

	<Stores />

	<hr>

	<Motion />

	<hr>

	<Transitions />

	<hr>

	<Animations />

	<hr>

	<Actions />
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