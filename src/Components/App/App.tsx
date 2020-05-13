import React from 'react';
import './App.css';

import { Epic, EpicMiddleware, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { GameActions } from '../Main/actions';
import { GameState } from '../Main/typings';
import { game } from '../Main/reducer';
import { MainContainer } from '../Main/MainContainer';

export type Action = GameActions;

export interface EpicDeps {}

export interface State {
  game: GameState;
}

export type FuncEpic = Epic<Action, Action, State, EpicDeps>

const createMiddleware = (
  epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
) => applyMiddleware(epicMiddleware);

const App:React.FC = (props: any) => {
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
    dependencies: {}
  });

  const store = createStore<State, Action, {}, {}>(
    combineReducers({
      game
    }),
    composeEnhancers(createMiddleware(epicMiddleware))
  );




  return(
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
}

export default App;
