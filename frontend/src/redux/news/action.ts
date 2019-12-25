import {INews } from "./state"

type FAILED = "NEWS_LOAD_FAILED"

export const newsLoadSuccess=(news:INews[])=>{
    return{
        type: "NEWS_LOAD_SUCCESS" as "NEWS_LOAD_SUCCESS",
        news
    }
}

export const newsActionFailed = (type:FAILED, msg:string)=>{
    return{ type,msg}
}
type newsActionCreator = typeof newsLoadSuccess |
                         typeof newsActionFailed

export type INewsAction = ReturnType<newsActionCreator>