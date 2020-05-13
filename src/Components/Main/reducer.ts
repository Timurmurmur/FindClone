import { GameState } from "./typings";
import { Action } from "../App/App";
import { OPEN_CARD, ADD_TO_COMPARE } from "./actions";
import { Card, Cards } from "../../common/types";


const data = [
    {
        image: 'https://www.tapeten.com.ua/assets/product/__thumb_m_9627.jpg',
        complete: false,
        id: 0,
        opened: false
    },
    {
        image: 'https://www.tourismofgoa.org/wp-content/uploads/2019/09/blissfull-img.jpg',
        complete: false,
        id: 1,
        opened: false
    },
    {
        image: 'https://i1.rozetka.ua/goods/14095782/123526021_images_14095782711.jpg',
        complete: false,
        id: 2,
        opened: false
    },
    {
        image: 'https://ae01.alicdn.com/kf/HTB1X991RVXXXXcyaXXXq6xXFXXXy/5D-Diamond-Embroidery-Pictures-DIY-Needlework-diy-Diamond-Painting-Lavender-flowers-with-natural-scenery-Mosaic-crystal.jpg',
        complete: false,
        id: 3,
        opened: false
    },
    {
        image: 'https://www.only-modeli.ru/img/products/22985-10x10ft-selale-vinil-fotograf-arka-plannda-stuedyo-sahne-fotografclk-arka-plan-pbq100.jpg',
        complete: false,
        id: 4,
        opened: false
    },
    {
        image: 'https://www.ednist.info/media/images/63102/big/79c0397b381d9d29806487c81bb4b066.jpg',
        complete: false,
        id: 5,
        opened: false
    },
    {
        image: 'https://www.tapeten.com.ua/assets/product/__thumb_m_0843.jpg',
        complete: false,
        id: 6,
        opened: false
    },
    {
        image: 'http://iranfarsh.net/wp-content/uploads/2018/06/%D8%A8%D8%A7%D8%BA-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-2.jpg',
        complete: false,
        id: 7,
        opened: false
    },
    {
        image: 'https://www.tapeten.com.ua/assets/product/__thumb_m_9627.jpg',
        complete: false,
        id: 0,
        opened: false
    },
    {
        image: 'https://www.tourismofgoa.org/wp-content/uploads/2019/09/blissfull-img.jpg',
        complete: false,
        id: 1,
        opened: false
    },
    {
        image: 'https://i1.rozetka.ua/goods/14095782/123526021_images_14095782711.jpg',
        complete: false,
        id: 2,
        opened: false
    },
    {
        image: 'https://ae01.alicdn.com/kf/HTB1X991RVXXXXcyaXXXq6xXFXXXy/5D-Diamond-Embroidery-Pictures-DIY-Needlework-diy-Diamond-Painting-Lavender-flowers-with-natural-scenery-Mosaic-crystal.jpg',
        complete: false,
        id: 3,
        opened: false
    },
    {
        image: 'https://www.only-modeli.ru/img/products/22985-10x10ft-selale-vinil-fotograf-arka-plannda-stuedyo-sahne-fotografclk-arka-plan-pbq100.jpg',
        complete: false,
        id: 4,
        opened: false
    },
    {
        image: 'https://www.ednist.info/media/images/63102/big/79c0397b381d9d29806487c81bb4b066.jpg',
        complete: false,
        id: 5,
        opened: false
    },
    {
        image: 'https://www.tapeten.com.ua/assets/product/__thumb_m_0843.jpg',
        complete: false,
        id: 6,
        opened: false
    },
    {
        image: 'http://iranfarsh.net/wp-content/uploads/2018/06/%D8%A8%D8%A7%D8%BA-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-2.jpg',
        complete: false,
        id: 7,
        opened: false
    },
]
  
const shuffle = (array: Cards) => {
    array.sort(() => Math.random() - 0.5)
    console.log('asd')
    return array;
}

const initItems = (items: Cards) => {
    let shufledArray = shuffle(items);
    shufledArray.forEach((el, index) => {
        el.index = index;
    })
    return shufledArray;
}


const items =  initItems(data)


const defaultGameState = { items: items, compare: [], complete: 0 }

export const game = (state: GameState = defaultGameState, action: Action) => {
    let newState = state;
    switch(action.type) {
        case OPEN_CARD:
            const index = action.payload;
            const { opened } = state.items[index];
            newState.items[index].opened = !opened;
            return {
                ...newState
            }
        case ADD_TO_COMPARE:
            
            if (action.card.index === newState.compare[0]?.index && newState.compare.length !== 0) {
                newState.compare.map((el: Card) => {
                    newState.items[el.index].opened = false;
                });
                newState.compare = [];
            } else { 
                newState.compare.push(action.card);
            }
            if (newState.compare.length === 2) {
                if (newState.compare[0].id === newState.compare[1].id) {
                    newState.compare.map((el: Card) => {
                        newState.items[el.index].complete = true;
                    });
                    newState.complete += 1;
                }
                setTimeout(() => {
                    newState.compare.map((el: Card) => {
                        newState.items[el.index].opened = false;
                    });
                    newState.compare = [];
                    return {
                        ...newState,
                    }
                }, 100)
            } else {
                return {
                    ...newState
                }
            }
        default:
            return state
    }
}