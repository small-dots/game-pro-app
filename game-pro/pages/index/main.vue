<template>
	<view class="u-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">全服通报</block>
		</cu-custom>

		<view class="u-demo-block">

			<text class="u-demo-block__title" style="margin-top: 20rpx;">通报内容</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入通报内容" v-model="content" height="200" type="textarea" :border="true"
					clearable></u-input>
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
	import "@/common/stomp.js"
	import  * as SK from  "@/common/sockjs.min.js"

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
				],
				stompClient: [],
				stopmClientSingle: null,
				servers: [],
			}
		},
		components: {
			uInput
		},
		computed: {

		},
		mounted() {
			this.getServerList()
		},
		methods: {
			getServerList() {
				let opts = {
					url: 'tj/server/list',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts).then(res => {
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.servers = res.data.data || []
					}
				});
			},

			openC() {
				this.show = true
			},
			dateConfirm(e) {
				this.currentDate = e.result
			},
			publish() {
				if (!this.content) {
					this.$refs.uToast.show({
						title: '请填写全部表单项！',
						type: 'error',
						position: "top"
					})
					return
				}
				const content = `<color=#ffffff>${this.content}</color>`
				if (this.stopmClientSingle !== null) {
					this.stopmClientSingle.disconnect();
				}
				this.stompClient.map((a) => {
					if (a != null) {
						a.disconnect();
					}
				});
				this.stompClient = [];

				this.servers.map((s, i) => {
					console.log('31231',SK,SK.default)
					console.log(';l;', `ws://${s.ip}:8099/endpoint-websocket`);
					// const socketTask = uni.connectSocket({
					// 	url: `ws://${s.ip}:8099/endpoint-websocket`,
					// 	success:(e)=>{
					// 		console.log(e)
					// 		if(e.errMsg =='connectSocket:ok'){
					// 			console.log(1)
					// 		}
					// 	},
					// })
					const socketTask = new SK.default(`http://${s.ip}:8099/endpoint-websocket`); //连接上端点(基站)
					console.log('socketTask',socketTask)
					const SC = Stomp.over(socketTask); //用stom进行包装，规范协议
					SC.connect({}, (con) => {
						console.log(con, '连接毁掉');
						if (con.command == 'CONNECTED') {
							console.log('连接成功>..');
							SC.send('/app/public/game_rank', {}, JSON.stringify({
								content: `<color=#ffffff>${content}</color>`
							}));
							this.stompClient.push(SC);
							this.$refs.uToast.show({
								title: '发送成功！',
								type: 'success',
								position: "top"
							})
							setTimeout(()=>{
								this.content = ''
							},1000)
						}
						SC.subscribe(`http://${s.ip}/topic/game_rank`, function(result) {
								console.log('result=' + result);
							}),
							(e) => {
								console.log('sdasda',e);
							};
					});
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