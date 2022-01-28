<script>
  let user = { loggedIn: false }

  function toggle () {
    user.loggedIn = !user.loggedIn 
  }

  // -------------------------------------------------------

  let x = 7

  // -------------------------------------------------------

  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ];

  // -------------------------------------------------------

  import Thing from '../components/Thing.svelte'

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ];

  function handleClick () {
    things = things.slice(1)
  }

  // -------------------------------------------------------

  async function getImages() {
    const response = await fetch('https://fakerapi.it/api/v1/images?_width=380&_quantity=5')
    const data = await response.json()

    if (response.ok) {
      return data.data
    } else {
      throw new Error(data)
    }
  }

  let promiseImages = getImages()

  function handleClickGenerateImages () {
    promiseImages = getImages()
  }
</script>

<h2>Logic</h2>

<!--
  A # character always indicates a block opening tag.
  A / character always indicates a block closing tag.
  A : character, as in {:else}, indicates a block continuation tag.
-->
{#if user.loggedIn}
  <button on:click={toggle}>Log out</button>
{:else}
  <button on:click={toggle}>Log in</button>
{/if}


{#if x > 10}
  <p>{x} is greater than 1-</p>
  {:else}
    {#if 5 > x}
      <p>{x} is less than 5</p>
    {:else}
      <p>{x} is between 5 and 10</p>
    {/if}
{/if}


<ul>
  {#each cats as cat, i} <!-- or {#each cats as { id, name }, i} -->
    <li>
      <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
        {i + 1}: {cat.name}
      </a>
    </li>
  {/each}
</ul>


<button on:click={handleClick}>
  Remove first thing
</button>

{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}


<button on:click={handleClickGenerateImages}>Generate Images</button>

{#await promiseImages}
  <p>Carregando imagens...</p>
{:then data}
  <div class="articles">
    {#each data as dataItem (dataItem.title)}
      <div>
        <img src={dataItem.url} title={dataItem.title} alt={dataItem.title}>
        <h3>{dataItem.title}</h3>
        <p>{dataItem.description}</p>
      </div>
    {/each}
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .articles {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 1rem;
	}

	.articles img {
		max-width: 100%;
	}
</style>