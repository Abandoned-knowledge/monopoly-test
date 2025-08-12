export type PlayerStatuses = "in game" | "eliminated"

export interface IPlayer {
  id: string;
  image_name: string;
  name: string;
  balance: number;
  status: PlayerStatuses;
}

export function isPlayer(card: IPlayer | any): card is IPlayer {
  return card !== null
    && typeof card === "object"
    && "id" in card
    && "image_name" in card
    && "name" in card
    && "balance" in card
    && "status" in card
    && typeof card.id === "string"
    && typeof card.image_name === "string"
    && typeof card.name === "string"
    && typeof card.balance === "number"
    && typeof card.status === "string";
}