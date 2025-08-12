<script setup lang="ts">
import usePlayerStore from "@store/usePlayerStore.ts";
import type { IPlayer } from "@/types/player.ts";
import { computed } from "vue";

const model = defineModel();
const playerStore = usePlayerStore();

const props = defineProps<{
  playerFrom?: IPlayer,
  disabled?: boolean,
  placeholder: string
}>();

const filteredPlayers = computed(() => {
  if (props.playerFrom === undefined) {
    return playerStore.players;
  }

  return playerStore.players.filter(player => player !== props.playerFrom);
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
        <img class="w-8 aspect-square object-cover mr-2" :src="slotProps.value.image_name" :alt="slotProps.value.name">
        {{ slotProps.inputNumberValue.name }}
        </span>
      </template>
    </template>

    <template #option="slotProps">
      <img class="w-8 aspect-square object-cover mr-2" :src="slotProps.option.image_name"
           :alt="slotProps.option.name">
      <span>{{ slotProps.option.name }}</span>
    </template>
  </Select>
</template>

<style scoped>

</style>