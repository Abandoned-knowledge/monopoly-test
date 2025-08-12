<script setup lang="ts">
import PlayerCard from "@ui/PlayerCard.vue";
import usePlayerStore from "@store/usePlayerStore.ts";

const playerStore = usePlayerStore();
</script>

<template>
  <PlayerCard
    v-for="player of playerStore.players"
    :id="player.id"
    :image_name="player.image_name"
    :name="player.name"
    :balance="player.balance"
    :status="player.status"
  />
</template>

<style scoped>

</style>