<template>
  <div>
       <div v-if="flag" class="loading"><img src="../../assets/image/timg.gif" width="256px" height="214px" alt=""></div>
    <div class="movie_body">
      <ul>
        <li class="movieList" v-for="item in movieList" :key="item.id">
          <div class="movieBox">
            <img :src="item.img" alt="显示不出" width="64px" height="89.5px" />
            <div class="movieInfo">
              <router-link
                tag="h1"
                :to="'/info/'+item.id"
                style="font-size:17px;line-height:24px;margin-top:0"
              >{{item.nm}}</router-link>
              <p style="line-height:10px;color:#666">
                观众评分
                <span style="font-size:15px;color:#faaf00;font-weight:700">{{item.sc}}</span>
              </p>
              <p style="line-height:14px;color:#666">主演：{{item.star}}</p>
              <p style="line-height:14px;color:#666">{{item.showInfo}}</p>
            </div>
            <div class="movieBuy">
              <p style="color:white;margin-top:3px">购票</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            
           movieList:[] ,
           flag:true
        }
    },
  mounted() {
    this.axios.get("/movieOnInfoList?cityId="+this.$store.state.id).then(res => {
    console.log(res.data.data.movieList)
      this.movieList = res.data.data.movieList;
      this.flag=false;
    });
  },  
}
</script>

<style scoped>
.loading{
  /* position: absolute;
  top: 10%;
  left: 15%;
  z-index: 10000; */
  margin-top: 50%;
  margin-left: 15%;
}
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
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
  margin-top: 50px;
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
a {
  font-size: 15px;
  color: #666;
}
</style>