<template>
<div>
	<!-- NavBar-顶部bar -->
	<nav-bar :fixed="false" back left-text="Back" title="书海" iconTwo="search" font-color="#fff" background-color="linear-gradient(to right, rgb(82, 102, 163), rgb(88, 166, 255))"></nav-bar>
	<!-- 轮播 -->
	<banner-swiper></banner-swiper>
	<!-- 列表 -->
	<tab-list></tab-list>
	<!-- loading -->
	<loading></loading>
</div>
</template>

<script>
import bannerSwiper from '../../components/swiper/index.vue';
import tabList from '../list/index.vue';
export default {
	components: {
		bannerSwiper,
		tabList
	},
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		}
	},
}
</script>

<style>
</style>
