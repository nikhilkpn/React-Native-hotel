import React,  {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View,Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/Meals'


const FilterSwitch = props =>{
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                value={props.state}
                trackColor={{true:'orange'}}
                thumbColor='red'
                onValueChange={props.onChange}
                />
        </View>
            
            )
        }
const FilterScreen = props => {
    const {navigation} = props
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVeganFree, setIsVeganFree] = useState(false)
    const [isLactoseFree, setLactoseFree] = useState(false)
    const [isVegetarianFree, setIsVegetarianFree] = useState(false)

    const dispatch = useDispatch();
    const saveFilters = useCallback(()=>{
        const appliedFilter = {
            glutenFree:isGlutenFree,
            veganFree:isVeganFree,
            lactoseFree:isLactoseFree,
            vegetarianFree:isVegetarianFree,
        }
        dispatch(setFilters(appliedFilter));

    },[isGlutenFree,isVeganFree,isLactoseFree,isVegetarianFree, dispatch])
    useEffect(()=>{
        navigation.setParams({save:saveFilters})
    },[saveFilters])
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters</Text>
            <FilterSwitch 
                label='Gluten free'
                state={isGlutenFree}
                onChange={newVal=>setIsGlutenFree(newVal)}
            />
            <FilterSwitch 
                label='Lactose free'
                state={isLactoseFree}
                onChange={newVal=>setLactoseFree(newVal)}
            />
            <FilterSwitch 
                label='Vegan free'
                state={isVeganFree}
                onChange={newVal=>setIsVeganFree(newVal)}
            />
            <FilterSwitch 
                label='Vegetarian free'
                state={isVegetarianFree}
                onChange={newVal=>setIsVegetarianFree(newVal)}
            />
        </View>
    )
}
FilterScreen.navigationOptions = navData => {
    return {
    headerTitle:'Filter Meals',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title='Menu'
            iconName='ios-menu'
            onPress={()=>{
                navData.navigation.toggleDrawer()
            }}

        />
    </HeaderButtons>,
    headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title='Save'
            iconName='ios-save'
            onPress={navData.navigation.getParam('save')}
        />
    </HeaderButtons>
    }
}

export default FilterScreen

const styles = StyleSheet.create({
    filterContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:15
    },
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:23,
        margin:20,
        textAlign:'center'
    }
})
