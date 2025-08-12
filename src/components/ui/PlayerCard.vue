<script setup lang="ts">
import { computed } from "vue";
import type { IPlayer } from "@/types/player.ts";
import { formatBalance } from "@utils/formatBalance.ts";

const props = defineProps<Omit<IPlayer, "id">>();

const PlayerCardClasses = computed(() => [{ "player-card--eliminated": props.status === "eliminated" }]);
const BalanceClasses = computed(() => [props.balance < 0 ? "text-red-500" : "text-green-600"]);
</script>

<template>
  <div class="player-card" :class="PlayerCardClasses">
    <div class="player-card__image-wrapper">
      <img class="player-card__image" :src="props.image_name" alt="avatar">
    </div>
    <div class="flex flex-col py-2">
      <h2 class="text-black uppercase font-medium">{{ props.name }}</h2>
      <span class="text-xl font-bold" :class="BalanceClasses">{{ formatBalance(props.balance) }}</span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.player-card {
  @apply flex h-16 bg-neutral-200 w-fit rounded-lg pr-4 gap-8 justify-between w-full;
}

.player-card__image-wrapper {
  @apply bg-neutral-600 aspect-square rounded-[inherit];
}

.player-card__image {
  @apply w-full h-full object-contain;
}

.player-card--eliminated {
  @apply relative;

  &::before {
    @apply content-['Выбыл'] text-2xl absolute opacity-80 bg-black text-yellow-500 inset-0 flex items-center justify-center;
  }
}
</style>