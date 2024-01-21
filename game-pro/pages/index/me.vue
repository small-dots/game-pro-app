<template>
	<view class="u-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">发送邮件</block>
		</cu-custom>

		<view class="u-demo-block">
			<text class="u-demo-block__title">发送对象</text>
			<view class="u-demo-block__content">
				<u-subsection active-color="#2b57fd" @change="sectionChange" bgColor="#f5f5f6" buttonColor="#fff"
					:list="rlist" :current="0"></u-subsection>
			</view>
			<text v-if="showId" class="u-demo-block__title">玩家ID</text>
			<view v-if="showId" class="u-demo-block__content">
				<u-input placeholder="请输入玩家ID" :border="true" clearable></u-input>
			</view>
			<text class="u-demo-block__title">邮件标题</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入邮件标题" focus :border="true" clearable></u-input>
			</view>

			<view class="u-demo-block__content" style="margin: 10px 0;">
				<span @click="openC">过期日期</span>
				<span style="margin-left: 20px;">{{currentDate}}</span>
			</view>

			<text class="u-demo-block__title">邮件内容</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入邮件内容" height="200" type="textarea" :border="true" clearable></u-input>
			</view>
			<view class="u-demo-block__content" style="margin-top: 20px;">
				<u-button type="primary" @click="publish">发送</u-button>
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
				currentDate: '',
				dx: '',
				rlist: [{
					name: "全服"
				}, {
					name: "指定用户"
				}],
				showId: false
			}
		},
		components: {
			uInput
		},
		watch: {
			current(va) {
				console.log(va)
			}
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
			sectionChange(e) {
				this.showId = e === 1 ? true : false
				// this.dx = e
			},
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
		margin: 10rpx 15rpx;
		border-radius: 10rpx;
		background: #fff;
		box-shadow: #fff 0 0 2px;

		.u-demo-block__title {
			font-size: 14px;
			color: #8f9ca2;
			margin-bottom: 8px;
			display: flex;
			flex-direction: row;
		}

		.u-demo-block__content {
			margin-bottom: 20rpx;
		}
	}
</style>