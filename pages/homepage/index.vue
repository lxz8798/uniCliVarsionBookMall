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
	mounted() {
		this.loadExecution();
	},
	methods: {
		loadExecution() {
			/**
			 * 获取本地存储中launchFlag的值
			 * 若存在，说明不是首次启动，直接进入首页；
			 * 若不存在，说明是首次启动，进入引导页；
			 */
			var launchFlag='';
			uni.getStorage({
				key: 'launchFlag',
				success: function (sto) {
					launchFlag=sto.data
				}
			});
			// 判断launchFlag的值是否为true，如果是true进入首页
			if(launchFlag == true){
				uni.switchTab({
					url: '../tabbar/tabbar-1/tabbar-1'
				});
			}else{
				// launchFlag的值不为true，进入引导页
				uni.redirectTo({
					url: '/pages/guide/index'
				});
			}
		}
	},
}
</script>

<style>
</style>
