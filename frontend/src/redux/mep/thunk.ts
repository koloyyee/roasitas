import { ThunkResult } from 'src/store'
import { Dispatch } from 'react'
import { IMepAction, allTasksLoadSuccess, mepActionFailed, singleTaskLoadSuccess, createTaskSuccess } from './actions'
import { ITask } from './state'

const {REACT_APP_API_SERVER} = process.env


export const createTask = (id: number,team:string, task:string, status:string ):ThunkResult<void> =>{
    const data = {id, team, task, status }
    return async(dispatch:Dispatch<IMepAction>)=>{
        const res = await fetch(`${REACT_APP_API_SERVER}/api/mep/` ,{
                method:"POST",
                headers:{
                    "Content-type" : "application/json",
                },
                body: JSON.stringify(data)
        })
        const result: ITask = await res.json()
        if (res.status === 200){
            dispatch(createTaskSuccess(result))
        } else {
            dispatch(mepActionFailed('CREATE_TASK_FAILED', 'no task created'))
        }
    }
}

export const loadAllTasks = ():ThunkResult<void> =>{
    return async(dispatch:Dispatch<IMepAction>)=>{
        const res = await fetch(`${REACT_APP_API_SERVER}/api/mep/` ,{
                method:"GET"
        })
        const result: ITask[] = await res.json()
        if (res.status === 200){
            dispatch(allTasksLoadSuccess(result))
        } else {
            dispatch(mepActionFailed('ALL_TASKS_LOAD_FAILED', 'no tasks loaded'))
        }
    }
}

export const loadSingleTask = (id:number):ThunkResult<void> =>{
    return async(dispatch:Dispatch<IMepAction>)=>{
        const res = await fetch(`${REACT_APP_API_SERVER}/api/mep/${id}` ,{
                method:"GET"
        })
        const result: ITask = await res.json()
        if (res.status === 200){
            dispatch(singleTaskLoadSuccess(result))
        } else {
            dispatch(mepActionFailed("SINGLE_TASK_LOAD_FAILED", 'no task loaded'))
        }
    }
}