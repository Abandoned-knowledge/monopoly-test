<script setup lang="ts">
import PlayerCard from "@ui/PlayerCard.vue";
import usePlayerStore from "@store/usePlayerStore.ts";

const playerStore = usePlayerStore();
</script>

<template>
  <ul class="overflow-y-scroll gap-4 flex flex-col">
    <li v-for="player of playerStore.players">
      <PlayerCard
        :id="player.id"
        :image_name="player.image_name"
        :name="player.name"
        :balance="player.balance"
        :status="player.status"
      />
    </li>
  </ul>
</template>

<style scoped>

</style>