<script setup lang="ts">
import PlayerCards from "@elements/PlayerCards.vue";
import Button from "primevue/button";
import usePlayerStore from "@store/usePlayerStore.ts";

const playerStore = usePlayerStore();
</script>

<template>
  <section class="container mx-auto h-screen flex items-center">
    <div class="flex justify-between w-full h-[80%]">
      <PlayerCards />

      <div class="grow">
        <Button @click="playerStore.addPlayer()">Добавить игрока</Button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>