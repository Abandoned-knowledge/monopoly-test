<script setup lang="ts">
import { useRouter } from "vue-router";
import usePlayerStore from "@store/usePlayerStore.ts";
import useTransactionStore from "@store/useTransactionStore.ts";
import { computed } from "vue";

const router = useRouter();

const playerStore = usePlayerStore();
const transactionStore = useTransactionStore();

function startNewGame() {
  transactionStore.clearTransactions();
  playerStore.clearPlayers();
  playerStore.addPlayer();
  router.push("/game");
}

const isGameExists = computed(() => Boolean(localStorage.getItem("player") && localStorage.getItem("transaction")));
const buttonNewGameText = computed(() => isGameExists.value ? "Начать заново" : "Начать игру");
</script>

<template>
  <section class="container mx-auto h-screen flex items-center justify-center gap-4 flex-col">
    <h1 class="text-3xl">У вас уже есть игра, желаете продолжить?</h1>
    <Button v-if="isGameExists" class="font-medium" severity="secondary" asChild v-slot="slotProps">
      <RouterLink to="/game" :class="slotProps.class">Продолжить игру</RouterLink>
    </Button>
    <Button class="font-medium" @click="startNewGame">{{ buttonNewGameText }}</Button>
  </section>
</template>

<style scoped></style>
