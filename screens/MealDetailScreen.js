import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import {  HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import {useSelector, useDispatch} from 'react-redux'
import { toggleFavorite } from '../store/actions/Meals';


const ListItem = props =>{
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}

const MealDetailScreen = ({navigation}) => {

    const mealId = navigation.getParam('mealId')
    const currentMealIsFavorite = useSelector(state=> state.meals.favoriteMeals.some(meal=>meal.id===mealId))

    const availableMeals = useSelector(state=>state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id===mealId)
    const dispatch  = useDispatch();
    const toggleFavoriteHandler = useCallback(()=>{
        dispatch(toggleFavorite(mealId))
    },[dispatch,mealId])

    useEffect(() => {
        navigation.setParams({isFav:currentMealIsFavorite})
    }, [currentMealIsFavorite])

    useEffect(() => {
        // navigation.setParams({mealTitle:selectedMeal.title})
        navigation.setParams({addToFav:toggleFavoriteHandler})
    }, [toggleFavoriteHandler])
    return (
        <ScrollView>
            <Image 
                source={{uri:selectedMeal.imageUrl}}
                style={styles.image}
            />
            <View style={styles.details}>
                    <Text>{selectedMeal.duration}</Text>
                    <Text>{selectedMeal.complex.toUpperCase()}</Text>
                    <Text>{selectedMeal.affordablity.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient=> <ListItem>{ingredient}</ListItem>)}
            <Text style={styles.title}>steps</Text>
            {selectedMeal.steps.map(step=> <ListItem>{step}</ListItem>)}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData =>{
    // const mealId = navigationData.navigation.getParam('mealId')
    const addToFav = navigationData.navigation.getParam('addToFav')
    
    // const selectedMeal = MEALS.find(meal => meal.id===mealId)
    const title = navigationData.navigation.getParam('mealTitle')
    const isFav = navigationData.navigation.getParam('isFav')
    return {
        headerTitle: title,
        headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName={isFav?'ios-star':'ios-star-outline'}
            onPress={addToFav}/>
        </HeaderButtons>
    }
}


export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        height:200,
        width:'100%'
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
        fontSize:22,
        textAlign:'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10 
    }
})
