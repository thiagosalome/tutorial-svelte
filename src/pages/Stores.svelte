<script>
  import { onDestroy } from 'svelte';
  import { count } from '../stores/index.js';
	import Incrementer from '../components/Incrementer.svelte';
	import Decrementer from '../components/Decrementer.svelte';
	import Resetter from '../components/Resetter.svelte';

  // Manual-subscription (necessary destroy)
	let countValue;
	const unbscribe = count.subscribe(value => {
		countValue = value;
	});

  // It's necessary because if the component was instantiated and destroyed many times, this would result in a memory leak
  onDestroy(unbscribe)

  // -------------------------------------------------------

	import { time } from '../stores/index.js';

	const formatter = new Intl.DateTimeFormat('pt-BR', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

  // -------------------------------------------------------

  import { elapsed } from '../stores/index.js';

  // -------------------------------------------------------

  import { customCount } from '../stores/createCount'

  // -------------------------------------------------------

  import { name, greeting } from '../stores/index.js';
</script>

<h2>Stores</h2>

<p>The count is {countValue}</p>

<!--
  Auto-subscription (unecessary destroy)
  Another way we can can reference a store value, without need use subscribe. 
  Only works with store variables that are declared (or imported) at the top-level scope of a component.
-->
<p>The count is {$count}</p>

<Incrementer/>
<Decrementer/>
<Resetter/>

<hr>

<p>The time is {formatter.format($time)}</p>

<hr>

<p>This page has been open for {$elapsed} seconds</p>

<hr>

<h1>The count is {$customCount}</h1>

<button on:click={customCount.increment}>+</button>
<button on:click={customCount.decrement}>-</button>
<button on:click={customCount.reset}>reset</button>

<hr>

<p>{$greeting}</p>
<input bind:value={$name}>
<button on:click="{() => $name += '!'}">
	Add exclamation mark!
</button>