<script>
  export let currency;
  export let changeCurrency;
  export let newCurrency;
</script>

<div>
  <p>Default currency coming from central redux store</p>
  <p>Default Currency: {currency}</p>
  <input type="text" bind:value={newCurrency} />
  <button on:click={()=>changeCurrency(newCurrency)}>Change Currency</button>
</div>
