<script>
	import Inner from './Inner.svelte';

 /*
		Alternative

		import { createEventDispatcher } from 'svelte'
	
		const dispatch = createEventDispatcher()

		function forward(event) {
			dispatch('message', event.detail)
		}
 */

</script>

<!-- <Inner on:message={forward} /> -->
<Inner on:message /> <!-- Call on:message forward indirect -->