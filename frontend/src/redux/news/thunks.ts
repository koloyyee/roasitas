import {ThunkResult} from 'src/store'
import { Dispatch } from 'react'
import { INewsAction, newsLoadSuccess, newsActionFailed, singleNewsLoadSuccess } from './action'
import { INews } from './state'


const {REACT_APP_API_SERVER} = process.env

export const loadNews = ():ThunkResult<void> =>{
    return async(dispatch:Dispatch<INewsAction>)=>{
        const res = await fetch(`${REACT_APP_API_SERVER}/api/news`,{
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

export const loadSingleNews= (slug:string):ThunkResult<void>=>{
    return async (dispatch:Dispatch<INewsAction>) =>{
        const res = await fetch(`${REACT_APP_API_SERVER}/api/news/${slug}`,{
            method:"GET"
        })
        const result:INews = await res.json()
        if (res.status === 200 && result){
            dispatch(singleNewsLoadSuccess(result))
        } else {
            dispatch(newsActionFailed('NEWS_LOAD_FAILED', 'failed to load single news'))
        }
    }
}