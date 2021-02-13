import React from 'react'
import { View , Text , Image , StyleSheet, Dimensions} from 'react-native'

const {width , height} = Dimensions.get('window')

const NewsCard = ({item}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <View style={styles.cardView}>
            <Image style={styles.image} source = {{uri: item.urlToImage}} />
            <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{

        backgroundColor:'white',
        margin:5,
        borderRadius:25,
        shadowColor:'#000',
        shadowOffset:{width:1,height:2},
        shadowOpacity:0.5,
        shadowRadius:3,

    },
    cardView:{
        flexDirection:'row'
    },
    title:{
        width: 450,
        height: 80,
        margin : 10,
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    },
    image :{
        width:200,
        height:200,
        marginLeft:10,
        marginRight:10,
        marginVertical:1,
    },
    author :{
        marginVertical:1,
        marginHorizontal:15,
        fontSize:15,
        color:'black',
        marginLeft:220
    },
    description :{
        width:260,
        height:250,
        margin:width*0.10,
        color :'black',
        fontSize:18,
        marginVertical:5,
        marginHorizontal:1,
    
    }
})

export default NewsCard;