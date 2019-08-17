<template>
  <div>
    <div id="content">
      <div class="movie_menu">
        <div class="city_name">
          <router-link to="/movie/city" id="city" tag="a" @click.native="Activecity">{{cityLocation.nm}}</router-link>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="hot_swtich">
          <router-link
            id="now"
            class="hot_item active"
            :to="'/movie/movienow/'+cityLocation.id"
            tag="a"
            @click.native="Activenow"
          >正在热映</router-link>
          <router-link id="soon" class="hot_item" :to="'/movie/moviesoon/'+cityLocation.id" tag="a" @click.native="Activesoon">即将上映</router-link>
        </div>
        <div class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
  <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import mui from './../../lib/mui/js/mui2'
export default {
  data() {
    return {
      cityLocation:{nm:'北京',id:1},
    };
  },
  // mounted() {
  //   this.axios.get("/movieOnInfoList?cityId=10").then(res => {
  //     this.movieList = res.data.data.movieList;
  //     console.log(res);
  //     console.log(this.movieList);
  //   });
  // },
  created(){
     this.axios.get("/getLocation").then(res => {
        var btnArray = ['取消', '切换定位'];
				mui.confirm(res.data.data.nm, '定位', btnArray, (e)=> {
					if (e.index == 1) {
             this.cityLocation = res.data.data;
					} 
				})
      });
  },
  methods: {
    Activecity(){
      document.getElementsByClassName("city_name")[0].classList.add("active");
      document.getElementById("now").classList.remove("active");
      document.getElementById("soon").classList.remove("active");
    },
    Activenow() {
      document.getElementById("now").classList.add("active");
      document.getElementById("soon").classList.remove("active");
     document.getElementsByClassName("city_name")[0].classList.remove("active");
      // this.axios.get("/movieOnInfoList?cityId=10").then(res => {
      //   this.movieList = res.data.data.movieList;
      //   console.log(res);
      //   console.log(this.movieList);
      // });
    },
    Activesoon() {
      document.getElementById("now").classList.remove("active");
      document.getElementById("soon").classList.add("active");
      document.getElementsByClassName("city_name")[0].classList.remove("active");
      // this.axios.get("/movieComingList?cityId=10").then(res => {
      //   this.movieList = res.data.data.comingList;
      //   console.log(res);
      //   console.log(this.movieList);
      // });
    },
    // movieNow() {
    //   this.axios.get("/movieOnInfoList?cityId=10").then(res => {
    //     this.movieList = res.data.data.movieList;
    //     console.log(res);
    //     console.log(this.movieList);
    //   });
    // },
    // movieSoon() {
    //   this.axios.get("/movieComingList?cityId=10").then(res => {
    //     this.movieList = res.data.data.movieList;
    //     console.log(res);
    //     console.log(this.movieList);
    //   });
    // }
  }
};
</script>

<style scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
.movie_body {
  flex: 1;
  overflow: auto;
}

.movieList .movieBox {
  border-bottom: 1px solid #e6e6e6;
  margin: 12px 10px;
  display: flex;
  align-items: center; /* 垂直居中 */
  width: 95%;
  height: 101px;
}
.movieList .movieBox .movieInfo {
  margin-left: 10px;
  width: 66%;
}
.movieList .movieBox .movieBuy {
  width: 47px;
  height: 27px;
  background: #ef4238;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
}
a{
  font-size: 15px;
  color: #666;
}
</style>