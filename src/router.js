/* eslint-disable */ /*禁止检查*/
import VueRouter from 'vue-router'
import movie from './component/movie/movie.vue'
import cenima from './component/cenima/cenima.vue'
import mine from './component/mine/mine.vue'
import movieinfo from './component/movie/movie-info.vue'
import city from './component/movie/city.vue'
import movienow from './component/movie/movienow.vue'
import moviesoon from './component/movie/moviesoon.vue'


var router=new VueRouter({
  routes:[
    { path: '/', component: movie },
    { path: '/movie', component: movie,children:[
      { path: '', component: movienow },
      { path: 'city', component: city },
      { path: 'movienow/:id', component: movienow },
      { path: 'moviesoon/:id', component: moviesoon }
    ] },
    { path: '/cenima', component: cenima },
    { path: '/mine', component: mine },
    { path: '/info/:id', component: movieinfo },
    { path: '/city', component: city }
    
  ],
  linkActiveClass:"mui-active"//覆盖默认高亮的类
  
})

export default router
