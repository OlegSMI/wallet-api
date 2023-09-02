<template>
  <div class="d-flex flex-column align-center justify-center">
    <v-metamask-button></v-metamask-button>
    <h1>The Latest transactions:</h1>
    <v-wallet-list></v-wallet-list>
  </div>
</template>

<script setup>
import VWalletList from "./components/v-wallet-list.vue";
import VMetamaskButton from "./components/v-metamask-button.vue";
</script>
