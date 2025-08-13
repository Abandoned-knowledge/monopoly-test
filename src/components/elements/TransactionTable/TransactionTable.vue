<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import type { ITransaction } from "@/types/transaction.ts";
import getImagePath from "@utils/getImagePath.ts";

const props = defineProps<{
  transactions: ITransaction[]
}>();
</script>

<template>
  <DataTable
    class="overflow-y-scroll"
    :value="props.transactions"
    showGridlines
    stripedRows
    size="small"
  >
    <template #header>
      <h1 class="text-3xl font-bold text-center">История переводов</h1>
    </template>
    <Column field="from" header="От кого">
      <template #body="slotProps">
        <span class="flex items-center gap-2">
          <img
            class="aspect-square object-cover h-8"
            :src="getImagePath(slotProps.data.from.image_name)"
            :alt="slotProps.data.from.name"
          >
          {{ slotProps.data.from.name }}
        </span>
      </template>
    </Column>
    <Column field="to" header="Кому">
      <template #body="slotProps">
        <span class="flex items-center gap-2">
          <img
            class="aspect-square object-cover h-8"
            :src="getImagePath(slotProps.data.to.image_name)"
            :alt="slotProps.data.to.name"
          >
          {{ slotProps.data.to.name }}
        </span>
      </template>
    </Column>
    <Column field="value" header="Сумма" />
  </DataTable>
</template>