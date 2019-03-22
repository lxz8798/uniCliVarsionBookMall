<template>
	<view class="content">
		<!-- 书架 -->
		<books v-if="page_code=='books'"></books>
		<!-- 书海 -->
		<mall v-if="page_code=='mall'"></mall>
		<!-- 个人中心 -->
		<center v-if="page_code=='center'"></center>
		<!-- FooterBar-底部bar -->
		<footer-nav></footer-nav>
		<!-- Loading -->
		<fr-loading></fr-loading>
	</view>
</template>

<script>
import center from '../personalcenter/index.vue';
import mall from '../homepage/index.vue';
import books from '../books/index.vue';
// import bannerSwiper from '../../components/swiper/index.vue';
export default {
	components: {
		books,
		mall,
		center
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
	onLoad() {
// 		console.log('index onload')
// 		this.$store.dispatch('get_data')
	},
	computed: {
		page_code() {
			return this.$store.state.footer_store.footer_nav[this.$store.state.footer_store.now_page_index].name_code;
		}
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
