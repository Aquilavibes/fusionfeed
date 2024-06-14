<template>
    <header>
    <h1 id='logo'>{{logo}}</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/entertainment">Entertainment</RouterLink>
        <RouterLink to="/sports">Sports</RouterLink>
        <RouterLink to="/business">Business</RouterLink>
       
        
      </nav>
      
  </header>
  <RouterView />

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
          logo: 'FusionFeed',
          showNav: false
        }
      }
     }

</script>

<style scoped>
    header {
  display: flex;
  background-color: grey;
  width: 1300px;
  background-size: contain;
  
}

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
  margin-left: 150px;
}

#logo {
  margin-left: 200px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
#ham {
  visibility: hidden;
}

@media (max-width: 768px) {
header {
  display: block;
  
}

nav {
  visibility: visible;
  width: 10px;
  height: 10px;
  display: flex;
  margin-left: 30px;
  gap: 20px;
  
}

nav a {
  margin-top: -20px;
  font-size: 18px;
}


#logo {
  font-size: 22px;
  margin-left: 150px;
}



}
@media (max-width: 480px) {
  nav {
    margin-left: 50px;
    gap: 10px;
  }

  nav a {
  margin-top: -20px;
  font-size: 15px;
}

#logo {
  font-size: 22px;
  margin-left: 130px;
}
}





</style>
