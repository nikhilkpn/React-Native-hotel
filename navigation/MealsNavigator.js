import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen'
import {Text} from 'react-native'
import {Platform} from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTitleStyle:{
          color:'wheat'
      },
      headerBackTitleStyle:{
          color:'yellow'
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen'
    }
  }

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  defaultStackNavOptions
);

const FavNavigator =  createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},defaultStackNavOptions)

const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
            //   color={tabInfo.tintColor}
            color='white'
            />
          );
        },
        tabBarColor:'red',
        tabBarLabel:<Text style={{color:'white'}}>Meal</Text>
      }
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarColor:'orange',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color='white' />
          );
        }
      }
    }
  }


const MealsFavTabNavigator = Platform.OS==='android'
        ? createMaterialBottomTabNavigator(tabScreenConfig,{
            activeColor:'white',
            shifting:true
        }) : 
        createBottomTabNavigator(
            tabScreenConfig,
            {   
                labelStyle:{
                    color:'red'
                },
                tabBarOptions: {
                activeTintColor: Colors.accentColor
                }
            }
);
const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
},defaultStackNavOptions)

const MainNavigator = createDrawerNavigator({
    MealsFavs:{ screen:MealsFavTabNavigator,navigationOptions:{
        drawerLabel:'Meals'
    }},
    Filters: FilterNavigator
},{
    contentOptions:{
        activeTintColor:'purple',
        labelStyle:{
            fontSize:22
        }
    }
})
export default createAppContainer(MainNavigator);