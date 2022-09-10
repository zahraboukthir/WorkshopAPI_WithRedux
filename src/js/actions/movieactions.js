import axios from 'axios';
import { LOADING ,GETALLMOVIESSUCESS , GETALLMOVIESFAILED} from './../actiontypes/movieactiontypes';

export const getallmovies =()=>async(dispatch)=>{

    
try {
    dispatch({type:LOADING})
    const res= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    dispatch({type: GETALLMOVIESSUCESS
        , payload:res.data.results
    })      
} catch (error) {
    dispatch({type:GETALLMOVIESFAILED ,
    payload:error})
    
}

}