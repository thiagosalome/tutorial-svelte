<script>
	import { count } from '../stores/index.js';

	function decrement() {
		count.update(n => n - 1)
	}
</script>

<button on:click={decrement}>
	-
</button>