import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground 
                        source={{uri:props.image}}
                        style={styles.bgImage}
                        >
                        <Text 
                            style={styles.title}
                            numberOfLines={1}
                            >{props.title}</Text>

                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <Text>{props.duration}</Text>
                    <Text>{props.complex.toUpperCase()}</Text>
                    <Text>{props.affordablity.toUpperCase()}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.6)',
        paddingHorizontal:12,
        paddingVertical:5,
        textAlign:'center'
    },
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#ccc',
        borderRadius:10,
        overflow:'hidden'
        
    },
    mealRow:{
        flexDirection:'row'
    },
    bgImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        alignItems:'center',
        paddingHorizontal:10,
        justifyContent:'space-between',
        height:'15%'
    }
})
