<script>
  import Box from '../components/Box.svelte';
  
  // -------------------------------------------------------
  
  import ContactCard from '../components/ContactCard.svelte';

  // -------------------------------------------------------

  import Project from '../components/Project.svelte'
	import Comment from '../components/Comment.svelte'

  // -------------------------------------------------------

  import Hoverable from '../components/Hoverable.svelte';

</script>

<h2>Component Composition</h2>

<Box>
	<h3>Hello!</h3>
	<p>This is a box. It can contain anything.</p>
</Box>

<hr>

<Box></Box>

<hr>

<ContactCard>
	<span slot="name">P. Sherman</span>
  <span slot="address">
    42 Wallaby Way<br>
		Sydney
  </span>
</ContactCard>

<hr>

<h3>Projects</h3>
<ul>
	<li>
		<Project
			title="Add Typescript support"
			tasksCompleted={25}
			totalTasks={57}
		>
			<div slot="comments">
				<Comment name="Ecma Script" postedAt={new Date('2020-08-17T14:12:23')}>
					<p>Those interface tests are now passing.</p>
				</Comment>
			</div>
		</Project>
	</li>
	<li>
		<Project
			title="Update documentation"
			tasksCompleted={18}
			totalTasks={21}
		/>
	</li>
</ul>

<hr>

<!-- It's possible expose a variable from Hoverable to children -->
<Hoverable let:hovering={active}>
	<div class:active>
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<style>
  hr {
    max-width: 500px;
    margin: 1rem auto;
  }

  ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem;
		display: flex;
	}

	@media (max-width: 600px) {
		ul {
			flex-direction: column;
		}
	}

	li {
		padding: 0.5rem;
		flex: 1 1 50%;
		min-width: 200px;
	}

  div {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>