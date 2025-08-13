<script setup lang="ts">
import TransactionTable from "./TransactionTable.vue";
import TransactionTableEmpty from "./TransactionTableEmpty.vue";

import useTransactionStore from "@store/useTransactionStore.ts";

const transactionStore = useTransactionStore();
</script>

<template>
  <TransactionTable
    v-if="transactionStore.hasTransactions"
    :transactions="transactionStore.transactions"
  />
  <TransactionTableEmpty v-else />
</template>