import { INewsAction } from "./action"
import { INewsState } from "./state"

const initialState = {
    news:[{
        headline :'',
        news_content:'',
        writer :'',
        image: '',
        pub_date: ''
    }]
}

export const newsReducer = (state:INewsState = initialState, action:INewsAction):INewsState =>{
    switch(action.type){
        case 'NEWS_LOAD_SUCCESS':
            return{
                ...state,
                news:action.news
            }
        case 'NEWS_LOAD_FAILED':
            return{...state}
        default:
            return state;
    }
}