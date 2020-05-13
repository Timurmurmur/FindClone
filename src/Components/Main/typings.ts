import { Cards, Card } from "../../common/types";

export interface GameState {
    items: Cards;
    compare: any;
    complete: number;
}