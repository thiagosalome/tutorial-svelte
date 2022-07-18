<script>
	import Folder from '../components/Folder.svelte';

	let root = [
		{
			name: 'Important work stuff',
			files: [
				{ name: 'quarterly-results.xlsx' }
			]
		},
		{
			name: 'Animal GIFs',
			files: [
				{
					name: 'Dogs',
					files: [
						{ name: 'treadmill.gif' },
						{ name: 'rope-jumping.gif' }
					]
				},
				{
					name: 'Goats',
					files: [
						{ name: 'parkour.gif' },
						{ name: 'rampage.gif' }
					]
				},
				{ name: 'cat-roomba.gif' },
				{ name: 'duck-shuffle.gif' },
				{ name: 'monkey-on-a-pig.gif' }
			]
		},
		{ name: 'TODO.md' }
	];

  // -------------------------------------------------------

  import RedThing from '../components/RedThing.svelte';
	import GreenThing from '../components/GreenThing.svelte';
	import BlueThing from '../components/BlueThing.svelte';

	const optionsComponent = [
		{ color: 'red',   component: RedThing   },
		{ color: 'green', component: GreenThing },
		{ color: 'blue',  component: BlueThing  },
	];

	let selectedComponent = optionsComponent[0];

  // -------------------------------------------------------
  
  const optionsElement = ['h1', 'h3', 'p'];
	let selectedElement = optionsElement[0];

  // -------------------------------------------------------
  
  let key;
	let keyCode;
  
	function handleKeydown(event) {
    key = event.key;
		keyCode = event.keyCode;
	}

  // -------------------------------------------------------

	let hereKitty = false;

	const handleMouseenter = () => hereKitty = true;
	const handleMouseleave = () => hereKitty = false;
</script>

<h2>Special Elements</h2>

<Folder name="Home" files={root} expanded/>

<hr />

<select bind:value={selectedComponent}>
	{#each optionsComponent as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<!-- {#if selectedComponent.color === 'red'}
	<RedThing/>
{:else if selectedComponent.color === 'green'}
	<GreenThing/>
{:else if selectedComponent.color === 'blue'}
	<BlueThing/>
{/if} -->

<!-- You can render a component dynamic -->
<svelte:component this={selectedComponent.component} />

<hr>

<select bind:value={selectedElement}>
	{#each optionsElement as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<!-- {#if selectedElement === 'h1'}
	<h1>I'm a h1 tag</h1>
{:else if selectedElement === 'h3'}
	<h3>I'm a h3 tag</h3>
{:else if selectedElement === 'p'}
	<p>I'm a p tag</p>
{/if} -->

<!-- You can render an element dynamic -->
<svelte:element this={selectedElement}>I'm a {selectedElement} tag</svelte:element>

<hr>

<!-- You can use this tag to apply events on window -->
<svelte:window on:keydown={handleKeydown} />

<div style="text-align: center">
	{#if key}
		<kbd>{key === ' ' ? 'Space' : key}</kbd>
		<p>{keyCode}</p>
	{:else}
		<p>Focus this window and press any key</p>
	{/if}
</div>

<hr>

<!-- Similar to svelte.window. It's useful when it's necessary using mouseenter and mouseleaver -->
<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave}/>

<div class="wrapper-cat">
  <img
    class:curious={hereKitty}
    alt="Kitten wants to know what's going on"
    src="https://svelte.dev/tutorial/kitten.png"
  >
</div>

<hr>

<svelte:head>
  <!-- Here you put anything that you would like putting in a html head tag -->
</svelte:head>

<!--
  It's similar to memo on React.

  When you put the line below on top of the component, it's only updated when his prop is changed
-->
<svelte:options immutable={true}/>

<!-- 
  It's similar to Fragment component on React.
  That element allows you place content in a named slot without wrapping it in a container DOM element
	It must be a child of a component
-->
<!-- <svelte:fragment>
	<p>Some content</p>
</svelte:fragment> -->

<style>
  hr {
    max-width: 500px;
    margin: 1rem auto;
  }

  div {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	kbd {
		background-color: #eee;
		border-radius: 4px;
		font-size: 6em;
		padding: 0.2em 0.5em;
		border-top: 5px solid rgba(255, 255, 255, 0.5);
		border-left: 5px solid rgba(255, 255, 255, 0.5);
		border-right: 5px solid rgba(0, 0, 0, 0.2);
		border-bottom: 5px solid rgba(0, 0, 0, 0.2);
		color: #555;
	}

  .wrapper-cat {
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  img {
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

</style>