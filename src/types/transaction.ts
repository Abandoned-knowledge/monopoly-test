import type { IPlayer } from "@/types/player.ts";

export interface ITransaction {
  from: IPlayer;
  to: IPlayer;
  value: number;
}