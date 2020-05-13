import { connect } from "react-redux";
import { TDispatchProps, TStateProps } from "../../common/typings";
import { Dispatch } from "redux";
import { Action, State } from "../App/App";
import { MainProps, Main } from "./Main";
import { openCard, addToCompare } from "./actions";
import { Card } from "../../common/types";

interface OwnProps {}

type StateProps = TStateProps<MainProps, OwnProps>;
type DispatchProps = TDispatchProps<MainProps, OwnProps>;

const mapStateToProps = (state: State): StateProps => ({
    game: state.game
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return {
        openCard: (id: number) => {
            return dispatch(openCard(id));
        },
        addToCompare: (card: Card) => {
            return dispatch(addToCompare(card));
        }
    }
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
