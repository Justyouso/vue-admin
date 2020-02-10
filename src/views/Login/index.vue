<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      menuTab:[
        {txt: "登陆","current":true},
        {txt: "注册","current":false}
      ]
    }
  },
  created(){},
  mounted(){},
  methods:{
    // 改变高光方法
    toggleMenu(data){
      //初始化menuTab中的所有数据为false，for循环
      this.menuTab.forEach(elem => {
        elem.current=false
      });
      //添加高光
      data.current=true
    }
  },
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap{
  width: 330px;
  margin: auto;
}
.menu-tab{
  text-align: center; //居中
  li {
    display: inline-block; // 线性块展示
    width: 88px;
    line-height: 36px; //每行的高
    font-size: 14px;
    color: #fff;
    border-radius: 2px; //加圆角
    cursor: pointer; //鼠标变手势
  }
  .current {
    background-color: rgba(0,0,0,.1); // 透明度
  }
}
</style>