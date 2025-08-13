<script setup lang="ts">
import { computed } from "vue";

import usePlayerStore from "@store/usePlayerStore.ts";
import type { IPlayer } from "@/types/player.ts";
import getImagePath from "@utils/getImagePath.ts";

const model = defineModel();
const playerStore = usePlayerStore();

const props = defineProps<{
  playerFrom?: IPlayer,
  disabled?: boolean,
  placeholder: string
}>();

const filteredPlayers = computed(() => {
  let players = playerStore.players.filter(player => player.status === "in game");

  if (props.playerFrom === undefined) {
    return players;
  }

  return players.filter(player => player !== props.playerFrom);
});
</script>

<template>
  <Select
    :disabled="props.disabled"
    v-model="model"
    :options="filteredPlayers"
    :placeholder="placeholder"
    class="h-full items-center"
  >
    <template #value="slotProps" class="flex">
      <template v-if="slotProps.value">
        <span class="flex items-center">
        <img
          class="w-8 aspect-square object-cover mr-2"
          :src="getImagePath(slotProps.value.image_name)"
          :alt="slotProps.value.name"
        >
        {{ slotProps.value.name }}
        </span>
      </template>
    </template>

    <template #option="slotProps">
      <img
        class="w-8 aspect-square object-cover mr-2"
        :src="getImagePath(slotProps.option.image_name)"
        :alt="slotProps.option.name"
      >
      <span>{{ slotProps.option.name }}</span>
    </template>
  </Select>
</template>