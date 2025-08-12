<script setup lang="ts">
import PlayerCards from "@elements/PlayerCards.vue";
import usePlayerStore from "@store/usePlayerStore.ts";
import TransferForm from "@elements/TransferForm/TransferForm.vue";
import TransactionTable from "@elements/TransactionTable.vue";

const playerStore = usePlayerStore();
</script>

<template>
  <section class="container mx-auto h-screen flex items-center">
    <div class="w-full h-[80%] grid grid-cols-[25rem_1fr_25rem] gap-20">
      <PlayerCards class="w-60" />
      <div class="w-full flex flex-col gap-4 items-center justify-center">
        <Button class="font-medium w-full" @click="playerStore.addPlayer()">Добавить игрока</Button>
        <TransferForm class="w-full" />
      </div>
      <TransactionTable />
    </div>
  </section>
</template>

<style scoped>

</style>