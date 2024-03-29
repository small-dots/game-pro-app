<template>
	<view class="u-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">发布公告</block>
		</cu-custom>

		<view class="u-demo-block">
			<text class="u-demo-block__title">公告标题</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入公告标题" v-model="title" focus :border="true" clearable></u-input>
			</view>

			<text class="u-demo-block__title">类型</text>
			<view class="u-demo-block__content">
				<uni-data-select v-model="type" :localdata="range" placeholder="" :clear="false"></uni-data-select>
			</view>


			<text class="u-demo-block__title" style="margin-top: 20rpx;">公告内容</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入公告内容" v-model="content" height="200" type="textarea" :border="true"
					clearable></u-input>
			</view>

			<text class="u-demo-block__title" style="margin-top: 20rpx;">过期日期</text>
			<view class="u-demo-block__content">
				<uni-datetime-picker type="date" :clear-icon="false" v-model="currentDate" />
			</view>

			<view class="u-demo-block__content" style="margin-top: 20px;">
				<u-button type="primary" @click="publish">发布</u-button>
			</view>
			<u-toast ref="uToast" position="top" />
			<u-alert-tips :show="showA" type="success" :title="tipTitle" :close-ablb="true" :show-icon="true"
				:description="description"></u-alert-tips>
			<u-top-tips ref="uTips"></u-top-tips>

			<u-calendar v-model="show" @change="dateConfirm" @close="closeCa"></u-calendar>
		</view>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	import uInput from "@/uview-ui/components/u-input/u-input.vue"
	import request from '@/common/request.js';

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
				title: "",
				content: '',
				tipTitle: "发布成功",
				description: '大叔大婶',
				showA: false,
				type: '',
				range: [{
						value: 1,
						text: "邮件"
					},
					{
						value: 2,
						text: "公告"
					},
				]
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
				if (!this.title || !this.content || !this.currentDate) {
					this.$refs.uToast.show({
						title: '请填写全部表单项！',
						type: 'error',
						position: "top"
					})
					return
				}
				let opts = {
					url: 'gg/insert',
					method: 'post'
				};
				const data = {
					gqsj: this.currentDate,
					ggnr: this.content,
					bt: this.title,
					type: this.type
				}
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts, data).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.$refs.uTips.show({
							title: '发布成功',
							type: 'success',
							duration: '10000'
						})
						this.title = ""
						this.content = ""
						this.currentDate = ""
						this.type=""
					}
				});
			},
			closeCa() {},
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
			margin-top: 16px;
			display: flex;
			flex-direction: row;
		}
	}

	.uni-calendar--fixed {
		z-index: 9999
	}
</style>