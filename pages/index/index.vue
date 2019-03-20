<template>
	<view class="content">
		<fr-loading></fr-loading>
		<footerNav></footerNav>
	</view>
</template>

<script>
	import footerNav from "../../components/footer/footer_nav.vue";
	export default {
		data() {
			return {}
		},
		components: {
			footerNav
		},
		onLoad() {
		},
		methods: {
			open_loading() {
				this.$loading()
			}
		}
		
	}
</script>

<style>
.content {
	text-align: center;
	padding-bottom: 400upx;
}
</style>
