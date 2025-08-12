<script setup lang="ts">
import usePlayerStore from "@store/usePlayerStore.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const playerStore = usePlayerStore();

function onClick() {
  playerStore.addPlayer();
  router.push("/game");
}
</script>

<template>
  <section class="container mx-auto h-screen flex items-center justify-center gap-4 flex-col">
    <Button class="font-medium" @click="onClick">Начать игру</Button>
    <Button class="font-medium" severity="secondary">Продолжить игру</Button>
  </section>
</template>

<style scoped></style>
