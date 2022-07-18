<script>
	let user = {
		firstname: 'Ada',
		lastname: 'Lovelace'
	};

  // Debugger doesn't work
  // debugger
</script>

<h2>Debug</h2>

<input bind:value={user.firstname}>
<input bind:value={user.lastname}>

<!-- {(console.log(user), '')} -->
<!-- {@debug user} -->

<h1>Hello {user.firstname}!</h1>