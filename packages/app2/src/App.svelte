<script>
  import { lib } from "shell";

  let username = lib.user.username;
  const onButtonClick = () => {
    console.log("button clicked");
  };
</script>

<style>
  .container {
    border: solid 1px gray;
    margin: 5px;
    padding: 5px;
  }
</style>

<div class="container">
  <h3>Svelte App</h3>
  <p>User information coming from shell</p>
  <p>Username: {username}</p>
  <button on:click={onButtonClick}>Svelte Button</button>
</div>
