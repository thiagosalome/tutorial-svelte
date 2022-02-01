<script>
	import { count } from '../stores/index.js';

	function reset() {
		count.set(0)
	}
</script>

<button on:click={reset}>
	reset
</button>