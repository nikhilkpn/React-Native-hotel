import React from 'react'
import { StyleSheet, Text, View , Button, Platform} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import MealList from '../components/MealList'
import { CATEGORIES } from '../data/dummy_data'
import Meal from '../models/Meal'
import {useSelector} from 'react-redux';

const CategoryMealScreen = (props) => {
    
    const catId = props.navigation.getParam('id')
    const availableMeals = useSelector(state=>state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >=0
    )
    const selectedCategory = CATEGORIES.find(cat => cat.id===catId)
    return (
        <MealList 
        listData={displayedMeals}
        navigation={props.navigation}
        />
    )
}
CategoryMealScreen.navigationOptions = ({navigation}) => {
    const catId = navigation.getParam('id')
    
    const selectedCategory = CATEGORIES.find(cat => cat.id===catId)
    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealScreen

const styles = StyleSheet.create({})
