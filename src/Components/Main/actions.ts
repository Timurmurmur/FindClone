import { Card } from "../../common/types";

export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export type ADD_TO_COMPARE = typeof ADD_TO_COMPARE;

export interface AddToCompareAction {
    type: ADD_TO_COMPARE;
    card: Card;
}

export const addToCompare = (card: Card): AddToCompareAction => ({
    type: ADD_TO_COMPARE,
    card
})

export const OPEN_CARD = "OPEN_CARD";
export type OPEN_CARD = typeof OPEN_CARD

export interface OpenCardAction {
    type: OPEN_CARD;
    payload: number;
}

export const openCard = (payload: number): OpenCardAction => ({
    type: OPEN_CARD,
    payload
});

export type GameActions = AddToCompareAction | OpenCardAction;