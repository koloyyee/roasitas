import { INewsAction } from "./action"
import { INewsState } from "./state"

const initialState = {
    news:[
        {
            slug:"",
            headline :'',
            news_content:'',
            writer :{ name: ''},
            image: '',
            pub_date: ''
        }
    ]
}

export const newsReducer = (state:INewsState = initialState, action:INewsAction) =>{
    switch(action.type){
        case 'NEWS_LOAD_SUCCESS':
            return{
                ...state,
                news:action.news
            }
        case 'SINGLE_NEWS_LOAD_SUCCESS':
            return{
                ...state,
                post: action.story
                
            }
        case 'NEWS_LOAD_FAILED':
            return{...state}
        default:
            return state;
    }
}