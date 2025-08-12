<script setup lang="ts">
import { computed } from "vue";
import type { IPlayer } from "@/types/player.ts";
import { formatBalance } from "@utils/formatBalance.ts";

import Card from "primevue/card";

const props = defineProps<Omit<IPlayer, "id">>();

const PlayerCardClasses = computed(() => [{ "player-card--eliminated": props.status === "eliminated" }]);
const BalanceClasses = computed(() => [props.balance < 0 ? "text-red-500" : "text-green-500"]);

</script>

<template>
  <Card class="player-card" :class="PlayerCardClasses" :pt="{
    header: {
      class: 'h-full rounded-[inherit]'
    },
    body: {
      class: '!p-0'
    }
  }">
    <template #header class="h-full">
      <div class="player-card__image-wrapper">
        <img class="player-card__image" :src="props.image_name" alt="avatar">
      </div>
    </template>
    <template #content>
      <div class="flex flex-col py-2">
        <h2 class="uppercase font-medium">{{ props.name }}</h2>
        <span class="text-xl font-bold" :class="BalanceClasses">{{ formatBalance(props.balance) }}</span>
      </div>
    </template>
  </Card>
</template>

<style scoped>
@reference "tailwindcss";

.player-card {
  @apply h-16 !flex-row gap-4;
}

.player-card__image-wrapper {
  @apply bg-gray-100 dark:bg-neutral-800 aspect-square rounded-[inherit] h-full flex items-center justify-center;
}

.player-card__image {
  @apply aspect-square h-[90%] object-contain;
}

.player-card--eliminated {
  @apply relative;

  &::before {
    @apply content-['Выбыл'] text-2xl absolute opacity-80 bg-black text-yellow-500 inset-0 flex items-center justify-center;
  }
}
</style>