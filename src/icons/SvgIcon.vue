<template>

  <!-- svg -->
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg> 
</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
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

    // 计算属性
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(() =>{
      if(props.className){
        console.log(`svg-icon ${props.className}`)
        return `svg-icon ${props.className}`
      }else{
        return `svg-icon`
      }
    })
    return {
      msg,
      iconName,
      svgClass
    }
  }
}
</script>
<style lang="scss" scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  // 改颜色
  fill: currentColor;
  color: #fff;
  &.font12{
    font-size: 50px;
  }
}
</style>