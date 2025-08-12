<script setup lang="ts">
import PlayerCards from "@elements/PlayerCards.vue";
import Button from "primevue/button";
import usePlayerStore from "@store/usePlayerStore.ts";

const playerStore = usePlayerStore();
</script>

<template>
  <section class="container mx-auto">
    <PlayerCards />

    <Button @click="playerStore.addPlayer()">Добавить игрока</Button>
  </section>
</template>

<style scoped>

</style>