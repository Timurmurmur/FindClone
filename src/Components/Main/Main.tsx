import React from 'react';
import './Main.css';
import { Pallete } from '../Pallete/Pallete';
import { Card } from '../../common/types';
import { GameState } from './typings';

export interface MainProps{ 
    game: GameState;
    openCard: (id: number) => {};
    addToCompare: (cards: Card) => {};
}

export const Main:React.FC<MainProps> = ({game, openCard, addToCompare}) => {
    if(game.complete === 8){
        return(
            <div className="main_container">
                <div className="win_wrapper">
                    <h1>ВЫ ВЫЙГРАЛИ !!!</h1>
                    <div className="reload_wrapper">
                        <button className="reload_button" onClick={e => window.location.reload()}>Сыграть еще</button>
                    </div>
                </div>
            </div>

        )
    } else {
        return(
            <div className="main_container">
                <div className="main_wrapper">
                    { game.items.map((el, index) => (<Pallete addToCompare={addToCompare} openCard={openCard} card={el} key={index}/>))}
                </div>
            </div>
        )
    }
    
}