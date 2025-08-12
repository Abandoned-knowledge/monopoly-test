<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import type { IPlayer } from "@/types/player.ts";
import TransferFormSelect from "@elements/TransferForm/TransferFormSelect.vue";
import useTransactionStore from "@store/useTransactionStore.ts";
import { BALANCE_CHANGE_STEP, MINIMUM_NEGATIVE_PLAYER_BALANCE } from "@constants/player.ts";

const playerFrom = ref<IPlayer>();
const playerTo = ref<IPlayer>();

const isSelectPlayerToDisabled = computed(() => playerFrom.value === undefined);
const maxBalance = computed(() => (playerFrom.value ? playerFrom.value.balance : 0) + MINIMUM_NEGATIVE_PLAYER_BALANCE);
const isInputNumberDisabled = computed(() => playerFrom.value === undefined || playerTo.value === undefined);

const inputNumberValue = ref<number>();

watchEffect(() => {
  if (playerFrom.value === playerTo.value && playerFrom.value !== undefined && playerTo.value !== undefined) {
    playerTo.value = undefined;
  }
});

const transactionStore = useTransactionStore();

function onSubmit() {
  if (playerFrom.value && playerTo.value && inputNumberValue.value) {
    transactionStore.transferBalanceBetweenPlayers(playerFrom.value, playerTo.value, inputNumberValue.value);
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4 rounded border border-neutral-600 p-4">
    <h1 class="text-center text-3xl">Обмен между игроками</h1>

    <div class="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
      <TransferFormSelect
        v-model="playerFrom"
        placeholder="От кого"
      />

      -->

      <TransferFormSelect
        :playerFrom="playerFrom"
        :disabled="isSelectPlayerToDisabled"
        v-model="playerTo"
        placeholder="Кому"
      />
    </div>

    <InputNumber
      v-model="inputNumberValue"
      placeholder="Введите сумму"
      :max="maxBalance"
      :disabled="isInputNumberDisabled"
      fluid
      showButtons
      :step="BALANCE_CHANGE_STEP"
      buttonLayout="horizontal"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Button class="font-medium" severity="contrast" type="submit">Перевести</Button>
  </form>
</template>

<style scoped>

</style>