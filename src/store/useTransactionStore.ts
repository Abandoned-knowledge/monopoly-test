import { ref } from "vue";
import { defineStore } from "pinia";

import useCustomToast from "@composables/useCustomToast.ts";
import { formatBalance } from "@utils/formatBalance.ts";

import type { IPlayer } from "@/types/player.ts";
import type { ITransaction } from "@/types/transaction.ts";

export default defineStore("transaction", () => {
  const { showInfo } = useCustomToast();

  const transactions = ref<ITransaction[]>([]);

  function addTransaction(transaction: ITransaction) {
    transactions.value.push(transaction);
  }

  function transferBalanceBetweenPlayers(player1: IPlayer, player2: IPlayer, value: number) {
    player1.balance -= value;
    player2.balance += value;

    addTransaction({
      from: player1,
      to: player2,
      value
    });
    showInfo(`${player1.name} сделал перевод на сумму ${formatBalance(value)} для ${player2.name}`);
  }

  return { transferBalanceBetweenPlayers, transactions };
}, {
  persist: true
});