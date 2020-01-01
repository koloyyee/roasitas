import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { INewsState } from './redux/news/state';
import { INewsAction } from './redux/news/action';
import { newsReducer } from './redux/news/reducers';


declare global{
    /* tslint:disable:interface-name */
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IRootState {
    allNews:INewsState
}

export type IRootAction = INewsAction

const rootReducer = combineReducers<IRootState>({
    allNews : newsReducer
})

export type ThunkResult <R> = ThunkAction<R, IRootState, null, IRootAction>

export default createStore<IRootState, IRootAction,{},{}>(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)