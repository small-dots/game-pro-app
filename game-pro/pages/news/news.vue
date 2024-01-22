<!-- 新闻 详情 -->
<template>
	<view class="container">

		<!-- 中间文章区域 -->
		<view class="safe-area-inset-bottom">
			<view class="u-demo-block">
				<text class="u-demo-block__title">CDK</text>
				<view class="u-demo-block__content">
					<u-input placeholder="请输入CDK" v-model="title" focus :border="true" clearable></u-input>
				</view>

				<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励1</text>
				<view class="u-demo-block__content flex_row">
					<u-input style="margin-right:10rpx" placeholder="请输入奖励1" v-model="title" focus :border="true"
						clearable></u-input>
					<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="jl1_num"></u-number-box>
				</view>
				<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励1</text>
				<view class="u-demo-block__content flex_row">
					<u-input style="margin-right:10rpx" placeholder="请输入奖励1" v-model="title" focus :border="true"
						clearable></u-input>
					<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="jl1_num"></u-number-box>
				</view>
				<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励1</text>
				<view class="u-demo-block__content flex_row">
					<u-input style="margin-right:10rpx" placeholder="请输入奖励1" v-model="title" focus :border="true"
						clearable></u-input>
					<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="jl1_num"></u-number-box>
				</view>
				<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励1</text>
				<view class="u-demo-block__content flex_row">
					<u-input style="margin-right:10rpx" placeholder="请输入奖励1" v-model="title" focus :border="true"
						clearable></u-input>
					<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="jl1_num"></u-number-box>
				</view>
				<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励1</text>
				<view class="u-demo-block__content flex_row">
					<u-input style="margin-right:10rpx" placeholder="请输入奖励1" v-model="title" focus :border="true"
						clearable></u-input>
					<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="jl1_num"></u-number-box>
				</view>

				<text class="u-demo-block__title" style="margin-top: 20rpx;">过期日期</text>
				<view class="u-demo-block__content">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="currentDate" />
				</view>
				<view class="u-demo-block__content" style="margin-top: 20px;">
					<u-button type="primary" @click="publish">确认添加</u-button>
				</view>
				<u-toast ref="uToast" position="top" />

			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				getData: [],

				newsId: '',
				jl1_num: 0,
				comment_input: '', //评论内容
				praiseType: 0, //1点赞  2取消点赞
			}
		},
		onLoad(option) {
			this.newsId = option.id;
			this.getDataFun();
		},
		methods: {
			onShareAppMessage(res) {
				return {
					title: '轻松一课，来看看吧～',
				}
			},
			getDataFun() {
				let opts = {
					url: 'json/newsList.json',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				});
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.getData = res.data.data[this.newsId];
						console.log(this.getData);
					} else {
						console.log('数据请求错误～');
					}
				});
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			// 评论
			send_btn() {
				// console.log(this.comment_input);
				let optsList = {
					url: 'south/southEasyLessonEvaluate/xcx/evaluate',
					method: 'post'
				};
				let paramsList = {
					articleId: this.detailsId,
					describ: this.comment_input,
				};
				request.httpTokenRequest(optsList, paramsList).then(res => {
					if (res.data.code === 200) {
						console.log(res.data);
						this.comment_input = '';
						this.getDataFun();
					}
				});
			},
			// 点赞
			praiseClick() {
				uni.showToast({
					title: '感谢参与',
					duration: 2000
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	button::after {
		border: none;
		background: transparent;
	}

	uni-button {
		background: transparent;
	}

	.container {
		background-color: #fff;
		width: 750rpx;

	}

	.solid {
		border-radius: 50rpx;
		text-indent: 12rpx;
	}

	image {
		width: 750rpx;
	}

	.bottomBox {
		width: 750rpx;
		position: fixed;
		left: 0;
		bottom: 0rpx;
	}

	.u-demo-block {
		padding: 40rpx;
		margin: 10rpx 15rpx;
		border-radius: 10rpx;
		background: #fff;
		box-shadow: #fff 0 0 2px;

		.flex_row {
			display: flex;

			.u-input:nth-child(2) {
				width: 30rpx;
			}
		}

		.u-demo-block__title {
			font-size: 14px;
			color: #8f9ca2;
			margin-bottom: 8px;
			display: flex;
			flex-direction: row;
		}
	}

	.uni-calendar--fixed {
		z-index: 9999
	}
</style>