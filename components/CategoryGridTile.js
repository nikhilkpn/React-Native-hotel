import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = (props) => {
        let TouchableComp = TouchableOpacity;
        if (Platform.OS==='android' && Platform.Version >=21){
            TouchableComp = TouchableNativeFeedback
        }
        return (
            <View style={styles.gridItem}>
                <TouchableComp 
                    style={{flex:1}}
                    onPress={props.onSelect}>
                    <View style={{...styles.container,...{backgroundColor:props.color}}}>
                        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                    </View>
                </TouchableComp>
        </View>
        )
    
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        overflow:'hidden',
        borderRadius:10

    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        // fontFamily:'OpenSansBold',
        fontSize:22,
        color:'black',
        textAlign:'right'
    }
})
