<script>
  let showModal = true;

  import { clickOutside } from '../utils'

  // -------------------------------------------------------

  import { longpress } from '../utils'

  let pressed = false;
  let duration = 2000;
</script>

<h2>Actions</h2>

<div class="relative">
  <button on:click={() => (showModal = true)}>Show Modal</button>
  {#if showModal}
    <div class="box" use:clickOutside on:outclick={() => (showModal = false)}>
      Click outside me!
    </div>
  {/if}
</div>

<hr>

<label>
	<input type=range bind:value={duration} max={2000} step={100}>
	{duration}ms
</label>

<button use:longpress={duration}
	on:longpress="{() => pressed = true}"
	on:mouseenter="{() => pressed = false}"
>press and hold</button>

{#if pressed}
	<p>congratulations, you pressed and held for {duration}ms</p>
{/if}

<style>

	hr {
    max-width: 500px;
    margin: 1rem auto;
  }
	
  .relative {
    height: 300px;
    width: 100%;
    position: relative;
  }

	.box {
		--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 4px;
		background-color: #ff3e00;
		color: #fff;
		text-align: center;
		font-weight: bold;
	}
</style>
