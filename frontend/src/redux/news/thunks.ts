import {ThunkResult} from '../../store'
import { Dispatch } from 'react'
import { INewsAction, newsLoadSuccess, newsActionFailed } from './action'
import { INews } from './state'


const {REACT_APP_API_SERVER} = process.env

export const loadNews = ():ThunkResult<void> =>{
    return async(dispatch:Dispatch<INewsAction>)=>{
        const res = await fetch(`${REACT_APP_API_SERVER}/blog`,{
            method: "GET"
        })
        const result:INews[] = await res.json()
        if (res.status === 200 && result){
            dispatch(newsLoadSuccess(result))
        } else{
            dispatch(newsActionFailed('NEWS_LOAD_FAILED', 'failed to load news'))
        }
    }
}