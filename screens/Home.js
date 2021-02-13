import React, { useState , useEffect} from "react";
import { View, Button, Text, StyleSheet,FlatList } from "react-native";
import NewsCard from '../component/NewsCard'
import NewsApi from '../api/NewsApi'

const Home = ({ navigation }) => {  

  const[news, setNews] = useState([])

  useEffect(() =>{
    getNewsApi()
  },[])
  
  // const newsResponce = async () => {
    // const response = await NewsApi.get('everything?q=bitcoin&from=2021-01-13&sortBy=publishedAt&apiKey=8b65c5a181464b31b41dcfcf8ae14c27')
    // console.log(response.data)
  // }
 
  function getNewsApi(){
    NewsApi.get('everything?q=bitcoin&from=2021-01-13&sortBy=publishedAt&apiKey=8b65c5a181464b31b41dcfcf8ae14c27')
    .then(function(response){
      setNews(response.data)
      console.log(news)
    })
    .catch(function(error){
        console.log(error)
    })
  }

  if(!news){
    return null
  }

  return (
    <View style={styles.center}>  
      <FlatList
        data = {news.articles}
        keyExtractor = {(item , index) => 'key' + index}
        renderItem = {({item}) =>{
          return <NewsCard item={item} /> 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default Home;