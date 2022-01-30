<script>
  let name = 'world'

  // -------------------------------------------------------

  let a = 1
  let b = 1

  // -------------------------------------------------------

  let checked = false

  // -------------------------------------------------------

  let scoops = 1
  let flavours = ['Mint choc chip'];

  let menu = [
    'Cookies and cream',
    'Mint choc chip',
    'Raspberry ripple'
  ];

  function join(flavours) {
    if (flavours.length === 1) return flavours[0]
    return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`
  }

  // -------------------------------------------------------

  let value = 'Some words are <i>italic</i>, some are <b>bold</b>'

  // -------------------------------------------------------
  
  let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];

  let selected

  let answer = ''

  function handleSubmit () {
    alert(`answered question ${selected.id} (${selected.text} with "${answer}")`)
  }

  // -------------------------------------------------------

  let html = '<p>Write some text!</p>';

  // -------------------------------------------------------

  let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;
  $: console.log('todos', todos)

  // -------------------------------------------------------

  // These values are bound to properties of the video
	let time = 0;
	let duration;
	let paused = true;

	let showControls = true;
	let showControlsTimeout;

	// Used to track time of last mouse down event
	let lastMouseDown;

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = duration * (clientX - left) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e) {
		lastMouseDown = new Date();
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

  // -------------------------------------------------------

  let w;
	let h;
	let size = 42;
	let text = 'edit me';
</script>

<h2>Bindings</h2>

<input type="text" bind:value={name}>
<p>Hello {name}!</p>

<hr>

<label>
  <input type="number" bind:value={a} min=0 max=10>
  <input type="range" bind:value={a} min=0 max=10>
</label>

<label>
  <input type="number" bind:value={b} min=0 max=10>
  <input type="range" bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<hr>

<label>
  <input type="checkbox" bind:checked={checked}>
  Yes! Send me regular email spam
</label>

{#if checked}
  <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
  <p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!checked}>Subscribe</button>

<hr>

<h3>Size</h3>

<label>
  <input type="radio" name="scoops" bind:group={scoops} value={1}>
  One scoop
</label>
<label>
  <input type="radio" name="scoops" bind:group={scoops} value={2}>
  Two scoops
</label>
<label>
  <input type="radio" name="scoops" bind:group={scoops} value={3}>
  Three scoops
</label>

<h3>Flavours</h3>

{#each menu as flavour}
  <label>
    <input type="checkbox" bind:group={flavours} name="flavours" value={flavour}>
    {flavour}
  </label>
{/each}

{#if flavours.length === 0}
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
    of {join(flavours)}
  </p>
{/if}

<hr>

<p>{@html value}</p>
<textarea bind:value={value}></textarea>

<hr>

<h3>Insecurity questions</h3>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change={() => answer = ''}>
    {#each questions as question}
      <option value={question}>{question.text}</option>
    {/each}
  </select>

  <input type="text" bind:value={answer}>

  <button disabled={!answer}>Submit</button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>

<hr>

<h3>Flavours Select Multiple</h3>

<!-- Press and hold the control key (or the command key on MacOS) for selecting multiple options. -->
<select multiple bind:value={flavours}>
  {#each menu as flavour}
    <option value={flavour}>{flavour}</option>
  {/each}
</select>

<hr>

<div contenteditable="true" bind:innerHTML={html}></div>

<pre>{html}</pre>

<hr>

<h3>Todos</h3>

{#each todos as todo}
	<div class:done={todo.done}>
		<input
			type=checkbox
			bind:checked={todo.done}
		>

		<input
			placeholder="What needs to be done?"
      disabled={todo.done}
			bind:value={todo.text}
		>
	</div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
	Add new
</button>

<button on:click={clear}>
	Clear completed
</button>

<hr>

<h1>Caminandes: Llamigos</h1>
<p>From <a href="https://studio.blender.org/films">Blender Studio</a>. CC-BY</p>

<div>
	<video
		poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
		src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
    bind:currentTime={time}
    bind:duration 
    bind:paused
  >
		<track kind="captions">
	</video>

	<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
		<progress value="{(time / duration) || 0}"/>

		<div class="info">
			<span class="time">{format(time)}</span>
			<span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
	</div>
</div>

<hr>

<input style="display: block; margin: auto;" type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }

  [contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}

  .done {
		opacity: 0.4;
	}

  hr {
    max-width: 500px;
    margin: 1rem auto;
  }

  div {
		position: relative;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
    max-width: 700px;
		transition: opacity 1s;
    left: 50%;
    transform: translateX(-50%);
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		font-size: 1.4em;
		opacity: 0.7;
	}

	.time {
		width: 3em;
	}

	.time:last-child { text-align: right }

	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0,0,0,0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255,255,255,0.6);
	}

	video {
		width: 100%;
    max-width: 700px;
	}

</style>