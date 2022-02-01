<script>
  import { onMount } from "svelte";


  let photos = [];

  onMount(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    photos = await response.json()
  })

  // -------------------------------------------------------
  
  import Timer from "../components/Timer.svelte"

  let open = false
  let seconds = 0

  const toggle = () => (open = !open)
  const handleTick = () => seconds += 1

  // -------------------------------------------------------
  import { tick } from 'svelte'

  let text = `Select some text and hit the tab key to toggle uppercase`;

  async function handleKeydown(event) {
    if (event.key !== 'Tab') return;

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    text = (
      value.slice(0, selectionStart) +
      replacement +
      value.slice(selectionEnd)
    );

    await tick()

    // this has no effect, because the DOM hasn't updated yet
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<h2>Lifecicle</h2>

<h3>Photo album</h3>

<div class="photos">
	{#each photos as photo}
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title}>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<hr>

<button on:click={toggle}>{open ? 'Close' : 'Open'} Timer</button>
<p>
  The Timer component has been open for
  {seconds} {seconds === 1 ? 'second' : 'seconds'}
</p>
{#if open}
  <Timer callback={handleTick} />
{/if}

<hr>

<textarea value={text} on:keydown={handleKeydown}></textarea>

<style>
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}

  textarea {
		width: 100%;
		height: 200px;
	}
</style>
