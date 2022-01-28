<script>

	import Nested from '../components/Nested.svelte'

  // -------------------------------------------------------

  import Info from '../components/Info.svelte'

  const pkg = {
    name: 'svelte',
    version: 3,
    speed: 'blazing',
    website: 'https://svelte.dev'
  }

</script>

<h2>Props</h2>

<Nested answer={42} />

<Info {...pkg} />