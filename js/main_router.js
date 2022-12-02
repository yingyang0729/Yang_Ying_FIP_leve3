const Home = { template: '<div class="teamText"><h2 class="teamTitle">Autumn Skin Care Products</h2><h3 class="teamTitle">Graphic Markup<h3><p class="teamTitle">This is a series of package for skin care products. It is autumn cosmetics and all designs create a warm feeling to attracts eyesights from consumers. </P><img class="ourTeamM" src="images/cream.jpg"><br><img class="ourTeamM" src="images/eyecream.jpg"><br><img class="ourTeamM" src="images/bodycream.jpg"><br><img class="ourTeamM" src="images/soap.jpg"></div>' }
const marketing = { template: '<div class="teamText"><h2 class="teamTitle">Cosmetics</h2><h3 class="teamTitle">3D Markup<h3><p class="teamTitle">This is a set of cosmetics, using 3D pictures to create a strong sense of reality, can be adapted to a variety of commercial advertising purposes.</P><img class="ourTeamM" src="images/face.jpg"><br><img class="ourTeamM" src="images/lip.jpg"><br><img class="ourTeamM" src="images/nail.jpg"><br><img class="ourTeamM" src="images/lash.jpg"></div>' }
const writing = { template: '<div class="teamText"><h2 class="teamTitle">Beer</h2><h3 class="teamTitle">3D Images<h3><p class="teamTitle">This is a set of beer bottle.  I created the 3D images with C4D.  C4D creates very authentic feeling of products, which is a trend in modern design.</P><img class="ourTeamM" src="images/beer_dark.jpg"><br><img class="ourTeamM" src="images/beer_liter.jpg"><br><img class="ourTeamM" src="images/beer_orange.jpg"><br><img class="ourTeamM" src="images/beer_original.jpg"><br><img class="ourTeamM" src="images/beer_straw.jpg"><br></div>' }


const routes = [
  { path: '/', 
    name: "home", 
    component: Home },

  { path: '/marketing', 
    name: "marketing",
    component: marketing, },

  { path: '/writing', 
    name: "writing",
    component: writing, },

]


const router = VueRouter.createRouter({
  
  history: VueRouter.createWebHashHistory(),
  routes, 
})


const app = Vue.createApp({})

app.use(router)

app.mount('#app')
