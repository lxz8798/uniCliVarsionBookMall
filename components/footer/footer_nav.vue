<template>
	<view>
		<view class="footer">
			<view :class="['footer_item ' + (item.size=='big'?'big_item':''), tabIndex == index ? 'tab_select_color' : '']" :style="'width:'+item_width" @click="change_nav(index)" v-for="(item,index) in footer_nav" :key="index">
				<image :src="index==now_index?item.select_icon:item.icon" mode=""></image>
				<view class="tabbar_title">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
			};
		},
		methods:{
			change_nav(index){
				this.tabIndex = index;
				this.$store.commit("change_page",index)
			}
		},
		computed:{
			item_width(){
				let length = this.$store.state.footer_store.footer_nav.length;
				switch (length){
					case 1:
						return '100%'
						break;
					case 2:
						return '50%'
						break;
					case 3:
						return '33.3%'
						break;
					case 4:
						return '25%'
						break;
					case 5:
						return '20%'
						break;
					default:
						break;
				}
			},
			footer_nav(){
				return this.$store.state.footer_store.footer_nav;
			},
			now_index(){
				return this.$store.state.footer_store.now_page_index;
			}
		}
	}
</script>

<style lang="scss">
.footer{
	height: 120upx;
	
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #181E30;
	color: #fff;
	.tab_select_color {
		color: #a1dbff;
	}
	.footer_item {
		float: left;
		width: 33.3%;
		text-align: center;
		font-size: 28upx;
		height: 120upx;
		transition: all 0.5s ease-in-out;
		 image{
			width: 60upx;
			height: 60upx;
			transform: translateY(8upx);
		 }
	}
	.big_item{
		position: relative;
		top: -40upx;
		image{
			width: 100upx;
			height: 100upx;
		}
	}
}
</style>
