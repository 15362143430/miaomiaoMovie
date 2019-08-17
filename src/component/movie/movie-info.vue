<template>
  <div>
    <div class="infoHeader">
      <img :src="movieInfo.albumImg" alt="显示不了" width="100%" height="200px" />
    </div>
    <div class="infoHeader-h">
      <img :src="movieInfo.albumImg" alt="显示不了" width="108px" height="150px" />
      <div class="infoHeader-biaoti">
        <h1 style="font-size:20px;color:white">{{movieInfo.nm}}</h1>
        <p style="font-size:14px;color:#ccc">{{movieInfo.enm}}</p>
        <p style="font-size:14px;color:#ccc">{{movieInfo.cat}}</p>
        <p style="font-size:14px;color:#ccc">{{movieInfo.src}}</p>
        <p style="font-size:14px;color:#ccc">{{movieInfo.pubDesc}}</p>
      </div>
    </div>
    <p style="margin:15px 10px;color:black">{{movieInfo.dra}}</p>
    <img v-for="(item,index) in movieInfo.photos" :key="index" :src="item[0]" alt="显示不出" width="70px" height="39.5px" style="margin:10px 10px;display:inline-block">
  </div>
</template>

<script>
export default {
  data () {
    return {
      id:this.$route.params.id, // 获取上一个组件通过路由传过来的id
      movieInfo:{}
    }
  },
  mounted() {
    this.axios.get("/detailmovie?movieId="+this.id).then(res => {
       this.movieInfo = res.data.data.detailMovie;
      console.log(res);
      console.log(this.movieInfo);
    });
  },
};
</script>

<style scoped>
.infoHeader {
  width: 100%;
  height: 200px;
}
.infoHeader img{
   filter: blur(15px);
}
.infoHeader-h {
    display: flex;
    position: absolute;
    left: 20px;
    top: 70px;
}
.infoHeader-h .infoHeader-biaoti{
    margin-left: 20px;
}
.infoHeader-h .infoHeader-biaoti p{
    
    font-size: 14px;
    color: #ccc;
}
</style>