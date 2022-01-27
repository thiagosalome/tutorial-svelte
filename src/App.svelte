<script>
	export let name;

	let count = 0
	$: doubled = count * 2 // Reactive values: Some parts of a component's state need to be computed from other parts

	function incrementCount () {
		count += 1
	}

	// We can log the value of count whenever it changes
	$: {
		console.log('the count is', count)
	}

	// You can even put the $: in front of things like if blocks:
	$: if(count >= 10) {
		alert('count is dangerously high!')
		count = 9
	}

	// -------------------------------------------------------

	let numbers = [1, 2, 3, 4]

	function addNumber () {
		// numbers.push(numbers.length + 1) -> don't work because Svelte's reactivity is triggered by assignments

		// works
		numbers = [...numbers, numbers.length + 1]
		// or numbers[numbers.length] = numbers.length + 1
	}

	$: sum = numbers.reduce((t, n) => t + n, 0)

	// -------------------------------------------------------

	import Nested from './components/Nested.svelte'

	// -------------------------------------------------------

	import Info from './components/Info.svelte'

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	}

	// -------------------------------------------------------

	let user = { loggedIn: false }

	function toggle () {
		user.loggedIn = !user.loggedIn 
	}

	// -------------------------------------------------------

	let x = 7

	// -------------------------------------------------------

	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<button on:click={incrementCount}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
	<p>{count} doubled is {doubled}</p>

	<hr>

	<button on:click={addNumber}>Add a number</button>
	<p>{numbers.join(' + ')} = {sum}</p>

	<hr>

	<Nested answer={42} />

	<hr>

	<Info {...pkg} />

	<hr>

	<!--
		A # character always indicates a block opening tag.
		A / character always indicates a block closing tag.
		A : character, as in {:else}, indicates a block continuation tag.
	-->
	{#if user.loggedIn}
		<button on:click={toggle}>Log out</button>
	{:else}
		<button on:click={toggle}>Log in</button>
	{/if}

	<hr>

	{#if x > 10}
		<p>{x} is greater than 1-</p>
		{:else}
			{#if 5 > x}
				<p>{x} is less than 5</p>
			{:else}
				<p>{x} is between 5 and 10</p>
			{/if}
	{/if}

	<hr>

	<ul>
		{#each cats as cat, i} <!-- or {#each cats as { id, name }, i} -->
			<li>
				<a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
					{i + 1}: {cat.name}
				</a>
			</li>
		{/each}
	</ul>
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