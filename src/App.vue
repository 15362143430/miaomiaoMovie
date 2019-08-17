<template>
  <div class="appBox">
    <div id="main">
      <header id="header">
        <h1>喵喵电影</h1>
      </header>
    </div>
  
      <router-view></router-view>

    <footer id="footer">
      <ul>
        <li>
          <router-link to="/movie">
            <i class="iconfont icon-dianying"></i>
            <p>电影</p>
          </router-link>
        </li>
        <li>
          <router-link to="cenima">
            <i class="iconfont icon-yingyuan"></i>
            <p>影院</p>
          </router-link>
        </li>
        <li>
          <router-link to="mine">
            <i class="iconfont icon-wode"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>

<style scoped>
#main{ height: 100%; display: flex; flex-direction:column;}
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  z-index: 100;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}



#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  list-style: none;
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.active {
  color: #f03d37;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>

