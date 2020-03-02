import { ITask } from './state'

type FAILED = 'CREATE_TASK_FAILED'|
              'UPDATE_TASK_FAILED' |
              'DELETE_TASK_FAILED' |
              'ALL_TASKS_LOAD_FAILED'|
              'SINGLE_TASK_LOAD_FAILED' 

export const allTasksLoadSuccess=( tasks : ITask[]) =>{
    return{
        type: "ALL_TASKS_LOAD_SUCCESS" as "ALL_TASKS_LOAD_SUCCESS",
        tasks
    }
}

export const singleTaskLoadSuccess=( task : ITask) =>{
    return{
        type: "SINGLE_TASKS_LOAD_SUCCESS" as "SINGLE_TASKS_LOAD_SUCCESS",
        task
    }
}

export const createTaskSuccess=( task:ITask) =>{
    return{
        type: "CREATE_TASKS_SUCCESS" as "CREATE_TASKS_SUCCESS",
        task
    }
}

export const updateTaskSuccess=( id:number, task: ITask) =>{
    return{
        type: "UPDATE_TASKS_SUCCESS" as "UPDATE_TASKS_SUCCESS",
        id,
        task,
    }
}

export const deleteTaskSuccess=(id:number) =>{
    return{
        type: "DELETE_TASKS_SUCCESS" as "DELETE_TASKS_SUCCESS",
        id
    }
}




export const mepActionFailed = (type: FAILED, msg: string) =>{
    return {type, msg}
}

type mepActionCreator = typeof allTasksLoadSuccess |
                     typeof singleTaskLoadSuccess |
                     typeof createTaskSuccess |
                     typeof updateTaskSuccess |
                     typeof deleteTaskSuccess|
                     typeof mepActionFailed 

export type IMepAction = ReturnType<mepActionCreator>