<script>
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
</script>

<h2>Reactivity</h2>

<button on:click={incrementCount}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
<p>{count} doubled is {doubled}</p>

<button on:click={addNumber}>Add a number</button>
<p>{numbers.join(' + ')} = {sum}</p>