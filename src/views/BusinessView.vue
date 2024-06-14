<template>
  <navbar/>

  <h1 id='business'>--Business--</h1>

   <div class='container'>
  <div  v-for='article in articles' :key='article.id' class='news-cont'>
     <a :href='article.url'>
   <img :src="article.urlToImage" id='image'>
    <h1 id='title'>{{article.title}}</h1>
    <p id='desc'>{{article.content}}</p>
    <small>Publish Date: {{article.publishedAt}}</small>
     </a>
  </div>
   </div>
   <hr>
   <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue'

import navbar from '../components/navbar.vue'

import axios from 'axios'

export default {

components:{navbar, Footer},

data() {
    return {
        articles: []
    }
},

 created () {

    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4a2c1c1b37e142d3a599d1b55099584b')
     

    .then( response => {
      this.articles = response.data.articles
      console.log(response.data)
    })
    .catch(error => {
      console.log('error while fetching api', error)
    })
  }
}


</script>

<style>
#business {
margin-top: 30px;
  margin-left: 550px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@media (max-width: 480px) {
  #business {
margin-top: 30px;
  margin-left: 80px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
}




</style>