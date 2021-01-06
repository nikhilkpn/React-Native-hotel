import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from './MealItem';
import {useSelector} from 'react-redux';

const MealList = (props) => {
    const favoriteMeals = useSelector(state=>state.meals.favoriteMeals);
    const renderMealItem = itemData =>{
        const isFav = favoriteMeals.some(meal=> meal.id===itemData.item.id)
        return <View>
            <MealItem  
                title={itemData.item.title}
                onSelectMeal={()=>{
                    props.navigation.navigate('MealDetail',{
                        mealId:itemData.item.id,
                        mealTitle:itemData.item.title,
                        isFav
                    })
                }}
                duration={itemData.item.duration}
                complex={itemData.item.complex}
                affordablity={itemData.item.affordablity}
                image={itemData.item.imageUrl}
            />
        </View>
    }
    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item,index)=> item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15
    }
})
