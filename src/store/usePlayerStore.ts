import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 } from "uuid";

import useCustomToast from "@composables/useCustomToast.ts";

import { type IPlayer, isPlayer } from "@/types/player.ts";
import { DEFAULT_PLAYER_BALANCE } from "@constants/player.ts";
import getImagePath from "@utils/getImagePath.ts";

export default defineStore("player", () => {
  const { showError, showSuccess } = useCustomToast();

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
      image_name: getImagePath(playerIndex.value),
      balance: DEFAULT_PLAYER_BALANCE,
      status: "in game"
    };

    if (isPlayer(player)) {
      players.value.push(player);
    }

    playerIndex.value++;

    showSuccess("Новый игрок был добавлен");
  }

  return { players, playerIndex, addPlayer };
}, {
  persist: true
});
