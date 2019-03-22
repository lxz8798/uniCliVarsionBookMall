<template>
<div>
	<!-- NavBar-顶部bar -->
	<nav-bar :fixed="false" back left-text="Back" title="书海" iconTwo="search" font-color="#fff" background-color="linear-gradient(to right, rgb(82, 102, 163), rgb(88, 166, 255))"></nav-bar>
	<!-- 轮播 -->
	<banner-swiper></banner-swiper>
	<!-- 列表 -->
</div>
</template>

<script>
import bannerSwiper from '../../components/swiper/index.vue';
export default {
	components: {
		bannerSwiper
	},
	data() {
		return {}
	},
}
</script>

<style>
</style>
