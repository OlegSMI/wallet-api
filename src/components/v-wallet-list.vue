<template>
  <v-progress-circular
    v-if="!isLoading"
    indeterminate
    color="indigo-darken-2"
    class="mt-10"
  ></v-progress-circular>
  <div v-else class="transactions-list">
    <v-row>
      <v-col cols="12" v-for="(swap, idx) in swaps" :key="swap.id">
        <v-card
          variant="tonal"
          :title="swap.id"
          :subtitle="`Amount: ${numConvert(swap.valueUSD)} USD`"
          class="transaction my-2"
        >
          <v-divider></v-divider>
          <v-card-text>
            <div class="">
              <span>In: </span>
              {{ numConvert(swap.tokenAmountIn) }} {{ swap.tokenInSym }}
            </div>
            <div>
              <span>Out: </span>
              {{ numConvert(swap.tokenAmountOut) }} {{ swap.tokenOutSym }}
            </div>
            <div>
              <span>Sender: </span>
              {{ swap.caller }}
            </div>
            <div>
              <span>Reciever: </span>
              {{ swap.poolId.address }}
            </div>
            <div>
              <span>Date: </span>
              {{ dateConvert(swap.timestamp) }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { gql } from "@apollo/client";
import { client, tokensQuery } from "@/assets/apollo";
import { numConvert, dateConvert } from "@/assets/converter";

const swaps = ref();
const isLoading = ref(false);

async function getSwaps() {
  const { data } = await client.query({
    query: gql(tokensQuery),
  });
  isLoading.value = true;
  swaps.value = data.swaps;
}

getSwaps();
</script>

<style lang="scss" scoped>
span {
  font-weight: bold;
  font-size: 1.5em;
  color: $violet;
}

.transaction {
  width: 80vw;
  margin: 0 auto;
}
</style>
