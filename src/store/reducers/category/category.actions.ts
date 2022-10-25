import { collection, getDocs } from 'firebase/firestore'
import {Dispatch} from 'redux'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firebase.converter'
import CategoryType from '../../../types/category.types'
import CategoryActionType from './category.actions-types'

export const fetchCategories = () =>{
    return async(dispatch: Dispatch) => {
        dispatch({type:CategoryActionType.FETCH_CATEGORIES_START})
        try{
            const categoriesFromFirestore: CategoryType[] = []
            const querySnapashot = await getDocs(collection(db,'categories').withConverter(categoryConverter) )
            querySnapashot.forEach((doc)=> {
            categoriesFromFirestore.push(doc.data())
        })
        dispatch({type: CategoryActionType.FETCH_CATEGORIES_SUCCESS, payload:categoriesFromFirestore})
        }catch (error) {
            dispatch({type:CategoryActionType.FETCH_CATEGORIES_FAILURE})
        }
    }
}