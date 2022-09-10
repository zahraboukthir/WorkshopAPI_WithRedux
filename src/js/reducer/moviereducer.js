import { GETALLMOVIESFAILED, GETALLMOVIESSUCESS,LOADING } from './../actiontypes/movieactiontypes';
const initialState= {movielist:[], loading:true,error:null

}
export const moviereducer = (state=initialState,{type,payload}) => { 
    switch (type) {
        case GETALLMOVIESSUCESS :
        return  {...state,movielist:payload,loading:false} 
        case GETALLMOVIESFAILED:
            return {...state,error:payload,loading:false}
    case LOADING:
    return {...state,loading:true}
        default:
           return state
    }
 }