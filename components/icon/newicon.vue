<template>
  <view :class="prefixClass" :style="{color:color,'font-size':fontSize}" @tap="$_click" v-html="icon"></view>
</template>

<script>
  export default {
    name: 'iconfont',
    props: {
			icon: {
				type: String,
				default: '&#xe605;'
			},
      /**
       * 自定义字体图标库前缀
       */
      prefixClass: {
        type: String,
        default: 'iconfont'
      },
      /**
       * 图标类型
       */
      type: String,
      /**
       * 图标颜色
       */
      color: {
        type: String,
        default: '#fff'
      },
      /**
       * 图标大小
       */
      size: {
        type: [Number, String],
        default: '24'
      }
    },
    computed: {
      fontSize() {
        return `${this.size}px`
      }
    },

    methods: {
      $_click(e) {
        this.$emit('click',e)
      }
    }
  }
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 951049 */
  src: url('https://at.alicdn.com/t/font_951049_owuqxzjjhd.eot');
  src: url('https://at.alicdn.com/t/font_951049_owuqxzjjhd.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_951049_owuqxzjjhd.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_951049_owuqxzjjhd.woff') format('woff'),
  url('https://at.alicdn.com/t/font_951049_owuqxzjjhd.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_951049_owuqxzjjhd.svg#iconfont') format('svg');
}
</style>
