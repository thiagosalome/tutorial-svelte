<script>
  import { tweened } from 'svelte/motion'; // import { writable } from 'svelte/store';
  import { cubicOut } from 'svelte/easing'
  
  /*
    delay — milliseconds before the tween starts
    duration — either the duration of the tween in milliseconds, or a (from, to) => milliseconds function allowing you to (e.g.) specify longer tweens for larger changes in value
    easing — a p => t function
    interpolate — a custom (from, to) => t => value function for interpolating between arbitrary values. By default, Svelte will interpolate between numbers, dates, and identically-shaped arrays and objects (as long as they only contain numbers and dates or other valid arrays and objects). If you want to interpolate (for example) colour strings or transformation matrices, supply a custom interpolator
  */
  const progress = tweened(0, { // const progress = writable(0);
    duration: 400,
    easing: cubicOut
  }); 

  // -------------------------------------------------------

  import { spring } from 'svelte/motion';

  let coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.1,
    damping: 0.25
  });
  let size = spring(10);
</script>

<h2>Motion</h2>

<progress value={$progress}></progress>

<button on:click="{() => progress.set(0)}">
	0%
</button>

<button on:click="{() => progress.set(0.25)}">
	25%
</button>

<button on:click="{() => progress.set(0.5)}">
	50%
</button>

<button on:click="{() => progress.set(0.75)}">
	75%
</button>

<button on:click="{() => progress.set(1)}">
	100%
</button>

<hr>

<div class="wrapper">
  <div style="position: absolute; right: 1em;">
    <label>
      <h3>stiffness ({coords.stiffness})</h3>
      <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
    </label>
  
    <label>
      <h3>damping ({coords.damping})</h3>
      <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
    </label>
  </div>
  
  <svg
    on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
    on:mousedown="{() => size.set(30)}"
    on:mouseup="{() => size.set(10)}"
  >
    <circle cx={$coords.x} cy={$coords.y} r={$size}/>
  </svg>
</div>


<style>
	progress {
		display: block;
		width: 100%;
	}

  .wrapper {
    position: relative;
  }

  svg {
		width: 100%;
		height: 100%;
		margin: -8px;
	}
	circle {
		fill: #ff3e00;
	}
</style>