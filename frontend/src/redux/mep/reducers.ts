import { IMepState } from './state'
import { IMepAction } from './actions'

const initialState = {

    mep: [
        {
            id:0,
            team: '',
            task: '',
            status: '',
            created_date: '',
            updated_date: ''
        }
    ]
}

export const mepReducer = (state: IMepState = initialState, action: IMepAction)=>{
    switch(action.type){
        case "CREATE_TASKS_SUCCESS":
            return{
                ...state,
                mep: action.task
            }
        
        case 'ALL_TASKS_LOAD_SUCCESS':
            return {
                ...state,
                mep: action.tasks
            }
        case 'SINGLE_TASKS_LOAD_SUCCESS':
            return {
                ...state,
                mep: action.task
            }
        case 'UPDATE_TASKS_SUCCESS':
            return {
                ...state, 
                mep: action.task
            }
        case "DELETE_TASKS_SUCCESS":
            return{
                ...state,
                mep:action.id
            }
        case 'ALL_TASKS_LOAD_FAILED':
        case 'SINGLE_TASK_LOAD_FAILED':
        case 'CREATE_TASK_FAILED':
        case 'DELETE_TASK_FAILED':
        case 'UPDATE_TASK_FAILED':
        default : 
            return state;
    }
}