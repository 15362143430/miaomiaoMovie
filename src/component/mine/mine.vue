<template>
  <div class="loginBox">
    <mt-field placeholder="Input username" v-model="username"></mt-field>
    <mt-field placeholder="Input password" type="password" v-modal="password"></mt-field>
    <mt-button type="danger" size="large">登录</mt-button>
    <div class="zhzc">
        <a href="#">立即注册</a>
         <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loginBox{
    margin-top: 50px;
}
.mint-button--large {
    display: block;
    width: 90%;
    margin: 0 auto;
}
.zhzc{
    display: flex;
    justify-content: space-between;
}
a{
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: ;
}
</style>