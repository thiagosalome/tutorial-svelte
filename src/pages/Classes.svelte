<script>
	let current = 'foo';

  // -------------------------------------------------------

  let big = false;
</script>

<h2>Classes</h2>

<div class="wrapper">
  <button
    class:selected={current === 'foo'} 
    on:click="{() => current = 'foo'}"
  >foo</button>
  
  <button
    class:selected={current === 'bar'}
    on:click="{() => current = 'bar'}"
  >bar</button>
  
  <button
    class:selected={current === 'baz'}
    on:click="{() => current = 'baz'}"
  >baz</button>

  <hr>

  <label>
    <input type=checkbox bind:checked={big}>
    big
  </label>
  
  <!-- <div class:big={big}> -->
  <div class:big>
    some {big ? 'big' : 'small'} text
  </div>
</div>

<style>
  hr {
    max-width: 500px;
    margin: 1rem auto;
  }

  button {
		display: block;
	}

	.selected {
		background-color: #ff3e00;
		color: white;
	}

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .big {
		font-size: 4em;
	}
</style>