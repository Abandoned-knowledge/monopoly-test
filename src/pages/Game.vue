<script setup lang="ts">
import PlayerCards from "@elements/PlayerCards.vue";
import usePlayerStore from "@store/usePlayerStore.ts";
import TransferForm from "@elements/TransferForm/TransferForm.vue";
import TransactionTable from "@elements/TransactionTable/Index.vue";

const playerStore = usePlayerStore();
</script>

<template>
  <section class="mx-auto h-screen flex items-center max-w-11/12">
    <div class="game-container">
      <PlayerCards />
      <div class="max-lg:col-span-2 max-lg:row-start-1 w-full flex flex-col gap-4 items-center justify-center">
        <Button class="font-medium w-full" @click="playerStore.addPlayer()">Добавить игрока</Button>
        <TransferForm class="w-full" />
      </div>
      <TransactionTable />
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.game-container {
  @apply w-full h-[80%] grid grid-cols-[1fr_auto_1fr] gap-20 max-xl:gap-8 max-lg:grid-cols-2;
}
</style>