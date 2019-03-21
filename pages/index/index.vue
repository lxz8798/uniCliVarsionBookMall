<template>
	<view class="content">
		<!-- NavBar-顶部bar -->
		<nav-bar :fixed="false" back left-text="Back" title="场景管理" iconTwo="settings" font-color="#fff" background-color="linear-gradient(to right, rgb(82, 102, 163), rgb(88, 166, 255))"></nav-bar>
		<!-- 轮播 -->
		<banner-swiper></banner-swiper>
		<!-- FooterBar-底部bar -->
		<footer-nav></footer-nav>
		<!-- Loading -->
		<fr-loading></fr-loading>
	</view>
</template>

<script>
import bannerSwiper from '../../components/swiper/index.vue';
export default {
	components: {bannerSwiper},
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		}
	},
	onLoad() {
	},
	methods: {
		/**
		 * @Description: loading
		 * @Author: 李啸竹
		*/
		open_loading() {
			this.$loading()
		}
	}
	
}
</script>

<style>
.content {
	text-align: center;
	min-height: 100vh;
}
</style>
