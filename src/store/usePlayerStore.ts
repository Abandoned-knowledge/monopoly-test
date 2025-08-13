import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 } from "uuid";

import useCustomToast from "@composables/useCustomToast.ts";

import { type IPlayer, isPlayer } from "@/types/player.ts";
import { DEFAULT_PLAYER_BALANCE } from "@constants/player.ts";

export default defineStore("player", () => {
  const { showError, showSuccess, showInfo } = useCustomToast();

  const playerIndex = ref<number>(1);
  const players = ref<IPlayer[]>([]);

  function addPlayer() {
    if (playerIndex.value >= 16) {
      showError("Количество игроков не может быть больше 15");
      return;
    }

    const player: IPlayer = {
      id: v4(),
      name: `Игрок ${playerIndex.value}`,
      image_name: `avatar-${playerIndex.value}`,
      balance: DEFAULT_PLAYER_BALANCE,
      status: "in game"
    };

    if (isPlayer(player)) {
      players.value.push(player);
    }

    playerIndex.value++;

    showSuccess("Новый игрок был добавлен");
  }

  function clearPlayers() {
    players.value = [];
    playerIndex.value = 1;
  }

  function eliminatePlayer(playerId: string) {
    const player = players.value.find(player => player.id === playerId);

    if (player) {
      player.status = "eliminated";
      player.balance = 0;

      showInfo(`${player.name} выбыл`);
    }
  }

  return { players, playerIndex, addPlayer, eliminatePlayer, clearPlayers };
}, {
  persist: true
});
