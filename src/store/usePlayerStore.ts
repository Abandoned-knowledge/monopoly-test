import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 } from "uuid";
import { type IPlayer, isPlayer } from "@/types/player.ts";
import { DEFAULT_PLAYER_BALANCE } from "@constants/player.ts";

export default defineStore("player", () => {
  const playerIndex = ref<number>(1);
  const players = ref<IPlayer[]>([]);

  function addPlayer() {
    if (playerIndex.value >= 16) return;

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
  }

  return { players, playerIndex, addPlayer };
}, {
  persist: true
});
