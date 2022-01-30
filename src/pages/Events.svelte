<script>
  let m = { x: 0, y: 0 }

  function handleMouseMove (event) {
    m.x = event.clientX
    m.y = event.clientY
  }

  // -------------------------------------------------------

  function handleClick() {
		alert('no more alerts')
	}

  // -------------------------------------------------------

  import Inner from '../components/Inner.svelte'

  function handleMessage(event) {
    alert(event.detail.text)
  }

  // -------------------------------------------------------

  import Outer from '../components/Outer.svelte'

  // -------------------------------------------------------

  import CustomButton from '../components/CustomButton.svelte'

  function handleClickCustomButton() {
		alert('CustomButton Clicked');
	}
</script>

<h2>Events</h2>

<div on:mousemove={handleMouseMove}> <!-- or <div on:mousemove={{e => m = { x: e.clientX, y: e.clientY }}}> -->
  The mouse position is {m.x} x {m.y}
</div>

<hr>

<!-- 
  DOM event handlers can have modifiers that alter their behaviour

  preventDefault — calls event.preventDefault() before running the handler. Useful for client-side form handling, for example.
  stopPropagation — calls event.stopPropagation(), preventing the event reaching the next element
  passive — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
  nonpassive — explicitly set passive: false
  capture — fires the handler during the capture phase instead of the bubbling phase (MDN docs)
  once — remove the handler after the first time it runs
  self — only trigger handler if event.target is the element itself
  trusted — only trigger handler if event.isTrusted is true. I.e. if the event is triggered by a user action.

  You can chain modifiers together, e.g. on:click|once|capture={...}.
 -->
<button on:click|once={handleClick}>Click me</button>

<hr>

<Inner on:message={handleMessage} />

<hr>

<Outer on:message={handleMessage} />

<hr>

<!-- Event forwarding works for DOM events too. -->
<CustomButton on:click={handleClickCustomButton} />

<style>
	div { width: 100%; height: 100px; }

  button {
    display: block;
    margin: 1rem auto;
  }

  hr {
    max-width: 500px;
    margin: 1rem auto;
  }
</style>