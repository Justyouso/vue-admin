<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    > 
      <!-- template 不能被解析出来，所以key不能在template里面 -->
      <template v-for="(item,index) in routers">
        <el-submenu  v-if="!item.hidden" :key="item.id" :index="index">
          <!-- 一级菜单 -->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <!-- 子级菜单 -->
          <el-menu-item v-for="subitem in item.children" :key="subitem.id" :index="subitem.path">{{subitem.meta.name}}</el-menu-item>
        </el-submenu>
       </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    /** 声明变量 */
    const isCollapse = ref(false);
    // 获取路由
    const routers = reactive(root.$router.options.routes);
    console.log(root.$router.options.routes);
    /** 定义方法 */
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    /**
     * 返回
     */
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routers
    };
  }
};
</script>

<style lang="scss">
@import "../../../styles/config.scss";
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background-color: #344a5f;
}
</style>