import React from 'react';
import { StyleSheet, Text, View , Button, Platform} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy_data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


const CategoriesScreen = ({navigation}) => {

    const renderGridItem = (itemData)=>{
        return <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={()=> navigation.navigate('CategoryMeals',{id:itemData.item.id})}
            />
    }
    

    return (
        <FlatList 
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
    headerTitle:'Meals Categories',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title='Menu'
            iconName='ios-menu'
            onPress={()=>{
                navData.navigation.toggleDrawer()
            }}

        />
    </HeaderButtons>
    }
}
export default CategoriesScreen

const styles = StyleSheet.create({
    
})
