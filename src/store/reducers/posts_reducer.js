import { 
    GET_POSTS,
    GET_POST_BY_ID
} from '../types';


export default function postsReducer(state={},action){
    switch(action.type){
        case GET_POSTS:
            return { ...state, ...action.payload }
        case GET_POST_BY_ID:
            return { ...state, postById: action.payload}
        default:
            return state
    }
}