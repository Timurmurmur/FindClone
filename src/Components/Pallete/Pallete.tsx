import React, { useState, useCallback } from 'react';
import './Pallete.css';
import { Card } from '../../common/types';

interface IPalleteProps {
    card: Card;
    openCard: (id: number) => {};
    addToCompare: (card: Card) => {};
}

export const Pallete: React.FC<IPalleteProps> = ({card, openCard, addToCompare}) => {
    const clickHandler = useCallback(
        (e: any) => {
            openCard(card.index);
            addToCompare(card);
        }, []
    )

    if (card.complete) {
        return(
            <div className={`pallete_wrapper`}>
                <div className="pallete_front" style={{backgroundColor: '#34C678'}}>
                    <span>
                        <svg aria-hidden="true" width={50} height={50} focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                    </span>
                </div>
            </div>
        )
    } else {
        return(
            <div className={`pallete_wrapper ${card.opened ? 'pallete_opened' : ''}`} onClick={clickHandler}>
                <div className="pallete_front">
                </div>
                <div className="pallete_back" style={{background: `url(${card.image})`, backgroundSize: 'cover'}}>
                </div>
            </div>
        )
    }
}
