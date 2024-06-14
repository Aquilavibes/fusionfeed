<template>
  <navbar />
  <h1 id='headline'>{{headline}}</h1>
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
  data() {

  return {
headline: '---Headline News---',
articles: [],

}
  },
components: { navbar, Footer },
  created () {

    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4a2c1c1b37e142d3a599d1b55099584b')
     

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

#desc {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 13px;
  color: grey;
 
}

#author {
  font-size: 12px;

}

.container {
  display: grid;
  column-gap: 10px;
  column-count: 3;
  column-rule: 10px solid-transparent;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  margin-left: 45px;
  
  
}

#title {
  font-size: 17px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#image {
  height: 230px;
  width: 300px;

}

.news-cont {
  background-color: white;
  box-shadow: #eee 0px 0px 10px;
  width: 300px;
  margin-left: 50px;

}
#headline {
  margin-top: 30px;
  margin-left: 460px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/*desktop view*/
@media (min-width: 1024px) {

 
}

/* Styles for tablet */
@media (max-width: 768px) {
.container {
 display: grid;
  column-gap: 10px;
  column-count: 3;
  column-rule: 10px solid-transparent;
  grid-template-columns: 1fr;
  grid-row-gap: 50px;
  margin-left: 20px;
}

#headline {
  margin-left: 50px;
}

hr {
  width: 380px;
  margin-left: 20px;
}
body {
  overflow-x: hidden;
}
}



@media (max-width: 480px) {
  .news-cont {
    margin-left: 30px;
  }

  #headline {
    margin-left: 10px;
  }
}

@media (max-width: 360px) {
  .news-cont {
    margin-left: 10px;
  }
}




</style>
