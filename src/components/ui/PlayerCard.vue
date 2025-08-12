<script setup lang="ts">
import { computed, watch } from "vue";
import type { IPlayer } from "@/types/player.ts";
import { formatBalance } from "@utils/formatBalance.ts";

import usePlayerStore from "@store/usePlayerStore.ts";
import Card from "primevue/card";
import { MINIMUM_NEGATIVE_PLAYER_BALANCE } from "@constants/player.ts";

const props = defineProps<IPlayer>();

const { eliminatePlayer } = usePlayerStore();

const PlayerCardClasses = computed(() => [{ "player-card--eliminated": props.status === "eliminated" }]);
const BalanceClasses = computed(() => [props.balance < 0 ? "text-red-500" : "text-green-500"]);

watch(() => props.balance, (newValue, oldValue) => {
  if (oldValue > newValue && newValue <= -MINIMUM_NEGATIVE_PLAYER_BALANCE) {
    eliminatePlayer(props.id);
  }
});
</script>

<template>

  <Card class="player-card" :class="PlayerCardClasses" :pt="{
    header: {
      class: 'h-full rounded-[inherit]'
    },
    body: {
      class: '!p-0 w-full',
    },
    content: {
      class: 'flex h-full'
    }
  }">
    <template #header>
      <div class="player-card__image-wrapper">
        <img class="player-card__image" :src="props.image_name" alt="avatar">
      </div>
    </template>
    <template #content>
      <div class="flex flex-col py-2">
        <h2 class="uppercase font-medium">{{ props.name }}</h2>
        <span class="text-xl font-bold" :class="BalanceClasses">{{ formatBalance(props.balance) }}</span>
      </div>

      <Button
        v-if="props.status !== 'eliminated'"
        @click="eliminatePlayer(props.id)"
        class="player-card__eliminate-button"
        icon="pi pi-times"
        aria-label="Close"
        severity="danger"
      />
    </template>
  </Card>
</template>

<style scoped>
@reference "tailwindcss";

.player-card {
  @apply h-16 !flex-row gap-4 relative;

  &:hover {
    .player-card__eliminate-button {
      @apply opacity-100;
    }
  }
}

.player-card__eliminate-button {
  @apply ml-auto h-full opacity-0 transition w-16;
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
    @apply content-['Выбыл'] text-2xl absolute opacity-80 bg-black text-yellow-500 inset-0 flex items-center justify-center rounded-lg;
  }
}
</style>