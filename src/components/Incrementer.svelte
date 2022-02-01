<script>
	import { count } from '../stores/index.js';

	function increment() {
		count.update(n => n + 1)
	}
</script>

<button on:click={increment}>
	+
</button>