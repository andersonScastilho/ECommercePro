import CategoryType from "../../../types/category.types";
import CategoryActionType from "./category.actions-types";

interface InitialState {
    categories: CategoryType[],
    isLoading: boolean
}
const initialState: InitialState = {
    categories: [],
    isLoading: false
}
const categoryReducer = (state = initialState, action: any):InitialState =>{
    switch (action.type){
        case CategoryActionType.FETCH_CATEGORIES_START:
            return {...state, isLoading: true}

        case CategoryActionType.FETCH_CATEGORIES_SUCCESS: 
        return{...state,isLoading:false, categories: action.payload}
        
        case CategoryActionType.FETCH_CATEGORIES_FAILURE:
            return {...state, isLoading: false}

            default: return state
    }
}
export default categoryReducer