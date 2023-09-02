<template>
  <div v-if="isSupportMetamask" class="wallet-connect">
    <button v-if="!isConnected" class="open-button" @click="connectWallet">
      Connect to Metamask
    </button>
    <div v-else class="adress-area d-flex justify-center align-center">
      <div class="connect"></div>
      <div class="address">
        {{ printAddress }}
      </div>
    </div>
  </div>
  <div v-else>Sorry... You don't have Metamask Wallet</div>
  {{ windowWidth }}
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

const address = ref("");
const isSupportMetamask = ref(false);
const isConnected = ref(false);

onMounted(() => {
  isSupportMetamask.value = typeof window.ethereum !== "undefined";
});

async function connectWallet() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  address.value = accounts[0];
  isConnected.value = true;
}

console.log(window.innerWidth, window.outerWidth);

const printAddress = computed(() =>
  window.innerWidth < 550
    ? address.value.substring(0, 20) + "..."
    : address.value
);
</script>

<style lang="scss" scoped>
.wallet-connect {
  font-size: 1.2rem;
  width: 100%;
  .open-button {
    background-color: $violet;
    color: white;
    text-decoration: none;
    padding: 0.7em;
    text-align: center;
    border-radius: 0.3em;
  }

  .adress-area {
    gap: 10px;
    padding: 0.7em;
    width: 100%;
    overflow: hidden;

    .connect {
      background: green;
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
    }
  }
}
</style>
