<template>
	<view class="u-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">发布公告</block>
		</cu-custom>

		<view class="u-demo-block">
			<text class="u-demo-block__title">公告标题</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入公告标题" focus :border="true" clearable></u-input>
			</view>

			<view class="u-demo-block__content" style="margin: 10px 0;">
				<span @click="openC">过期日期</span>
				<span style="margin-left: 20px;">{{currentDate}}</span>
			</view>

			<text class="u-demo-block__title">公告内容</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入公告内容" height="200" type="textarea" :border="true" clearable></u-input>
			</view>
			<view class="u-demo-block__content" style="margin-top: 20px;">
				<u-button type="primary" @click="publish">发布</u-button>
			</view>
			<u-toast ref="uToast" position="top" />
			<u-calendar v-model="show" @change="dateConfirm" @close="closeCa"></u-calendar>
		</view>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	import uInput from "@/uview-ui/components/u-input/u-input.vue"
	export default {
		data() {
			return {
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				showSex: false,
				modelNotice: {},
				show: false,
				currentDate: ''
			}
		},
		components: {
			uInput
		},
		computed: {

		},
		methods: {
			openC() {
				this.show = true
			},
			dateConfirm(e) {
				this.currentDate = e.result
			},
			publish() {
				this.$refs.uToast.show({
					title: '发布成功',
					type: 'success'
				})
			},
			closeCa() {},
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if (index == this.current) return;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-demo-block {
		padding: 40rpx;
		margin: 23px 0;

		.u-demo-block__title {
			font-size: 14px;
			color: #8f9ca2;
			margin-bottom: 8px;
			display: flex;
			flex-direction: row;
		}
	}
</style>