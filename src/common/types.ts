export interface Card {
    image: string;
    complete: boolean;
    id: number;
    opened: boolean;
    index?: any;
}

export interface Cards extends Array<Card>{};