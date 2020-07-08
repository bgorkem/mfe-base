<script>
  import { lib } from "shell";
  import { Provider } from "svelte-redux-connect";
  import Preferences from "./Preferences.js";
  import Profile from "./Profile.svelte";

  const store = lib.state.store;
</script>

<style>
  .container {
    border: solid 1px gray;
    margin: 5px;
    padding: 5px;
  }
</style>

<Provider {store}>
  <div class="container">
    <h3>Svelte App</h3>
    <Preferences />
    <Profile />
  </div>
</Provider>
