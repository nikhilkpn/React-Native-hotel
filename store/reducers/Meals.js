import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { MEALS } from "../../data/dummy_data"
import {TOGGLE_FAVORITE,SET_FILTERS} from '../actions/Meals'

const initialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
}

const mealsReducers = (state=initialState,action) =>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingMeals = state.favoriteMeals.findIndex(meal=>meal.id===action.payload);
            if (existingMeals>=0){
                let updateFavMeals = [...state.favoriteMeals]
                updateFavMeals.splice(existingMeals,1)
                return {...state, favoriteMeals:updateFavMeals}
            }else{
                const meal = state.meals.find(meal=> meal.id===action.payload)
                return {...state,favoriteMeals:state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.payload;
            const filteredMeals = state.meals.filter(meal=>{
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false
                }
                return true;
            })
            return {...state, filteredMeals}
        default:
            return state
    }
}

export default mealsReducers;