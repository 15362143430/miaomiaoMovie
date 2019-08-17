/* eslint-disable */ /*禁止检查*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/css/comment.css";
import "./assets/css/icon/iconfont.css";
import './lib/mui/css/mui.min.css' //复制mui到lib(新建)里后再引入，这是mui样式表
import './lib/mui/css/icons-extra.css'//font里需添加依赖文件才行
import Vue from 'vue'
Vue.config.devtools = true//让devtools能实现
import Vuex from 'vuex'//安装后(npm i vuex -S)导入vuex包
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false
import app from './App'
import MintUI from 'mint-ui'//得先下载后再引入
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false
import moment from 'moment'//导入格式化时间的插件
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})



console.log('ok')

/* eslint-disable no-new */
var store=new Vuex.Store({
  state: {
    id:''
  },
  mutations: {
    changeId(state,id){
      state.id=id
    }
  }
})


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store,
  components: {

  },

})

