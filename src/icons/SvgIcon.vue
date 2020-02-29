<template>

  <!-- svg -->
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg> 
</template>

<script>
import { reactive, ref, onMounted } from "@vue/composition-api";
export default {
  name: "svgIcon",
  // 定义从父组件传过来的值
  props: {
    iconClass: {
      type: String, //类型
      default:'', //默认值
      required: true // 是否必填
    },
    className: {
      type: String, //类型
      default:'', //默认值
      required: true // 是否必填
    }
  },
  setup(props){
    console.log(props.iconClass)
    const msg = ref("王超")
    return {
      msg
    }
  }
}
</script>
<style lang="scss" scoped>

</style>