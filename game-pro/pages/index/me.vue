<template>
	<view class="u-wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">发送邮件</block>
		</cu-custom>

		<view class="u-demo-block">
			<text class="u-demo-block__title">发送对象</text>
			<view class="u-demo-block__content">
				<u-subsection active-color="#2b57fd" v-model="tabId" @change="sectionChange" bgColor="#f5f5f6"
					buttonColor="#fff" :list="rlist" :current="0"></u-subsection>
			</view>

			<text class="u-demo-block__title">邮件标题</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入邮件标题" v-model="title" focus :border="true" clearable></u-input>
			</view>
			<text v-if="showId" class="u-demo-block__title">玩家ID</text>
			<view v-if="showId" class="u-demo-block__content">
				<u-input placeholder="请输入玩家ID" v-model="userId" :border="true" clearable></u-input>
			</view>
			<text v-if="showId" class="u-demo-block__title" style="margin-top: 20rpx;">玩家区服</text>
			<view v-if="showId" class="u-demo-block__content flex_row">
				<uni-data-select v-model="server" :localdata="serversList"></uni-data-select>
			</view>
			<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励1</text>
			<view class="u-demo-block__content flex_row">
				<uni-data-select v-model="jl1" :localdata="cdkList"></uni-data-select>
				<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="num.n1"></u-number-box>
			</view>
			<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励2</text>
			<view class="u-demo-block__content flex_row">
				<uni-data-select v-model="jl2" :localdata="cdkList"></uni-data-select>
				<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="num.n2"></u-number-box>
			</view>
			<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励3</text>
			<view class="u-demo-block__content flex_row">
				<uni-data-select v-model="jl3" :localdata="cdkList"></uni-data-select>
				<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="num.n3"></u-number-box>
			</view>
			<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励4</text>
			<view class="u-demo-block__content flex_row">
				<uni-data-select v-model="jl4" :localdata="cdkList"></uni-data-select>
				<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="num.n4"></u-number-box>
			</view>
			<text class="u-demo-block__title" style="margin-top: 20rpx;">奖励5</text>
			<view class="u-demo-block__content flex_row">
				<uni-data-select v-model="jl5" :localdata="cdkList"></uni-data-select>
				<u-number-box :input-height="70" color="#fff" bg-color="#ef6c19" v-model="num.n5"></u-number-box>
			</view>

			<text class="u-demo-block__title" style="margin-top: 20rpx;">过期日期</text>
			<view class="u-demo-block__content">
				<uni-datetime-picker type="date" :clear-icon="false" v-model="gqsj" />
			</view>

			<text class="u-demo-block__title">邮件内容</text>
			<view class="u-demo-block__content">
				<u-input placeholder="请输入邮件内容" v-model="content" height="200" type="textarea" :border="true"
					clearable></u-input>
			</view>
			<view class="u-demo-block__content" style="margin-top: 20px;margin-bottom:60px;">
				<u-button type="primary" @click="publish">发送</u-button>
			</view>
			<u-toast ref="uToast" position="top" />
		</view>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	import uInput from "@/uview-ui/components/u-input/u-input.vue"
	import request from '@/common/request.js';
	import "@/common/stomp.js"
	import * as SK from "@/common/sockjs.min.js"

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
				userId: "",
				title: "",
				dx: '',
				rlist: [{
					name: "全服"
				}, {
					name: "指定用户"
				}],
				showId: false,
				gqsj: "",
				cdk: '',
				jl1: '',
				jl2: '',
				jl3: '',
				jl4: '',
				jl5: '',
				content: "",
				num: {
					n1: 1,
					n2: 1,
					n3: 1,
					n4: 1,
					n5: 1
				},
				cdkList: [], // cdk选项数据
				tabId: "全服",
				server: "",
				servers: [],
				serversList: [],
				stompClient: [],
				stopmClientSingle: null,
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
		mounted() {
			this.getCdkList()
			this.getServerList()
		},
		computed: {

		},
		methods: {
			getCdkList() {
				let opts = {
					url: '/xtpz/select?',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts, {
					xtpz: 'djpz'
				}).then(res => {
					uni.hideLoading();
					if (res.statusCode == 200) {
						const {
							pzz
						} = res.data.data || {}
						this.cdkList = JSON.parse(pzz).map(item => ({
							text: item.nameZn,
							value: item.name
						}))
					}
				});
			},
			openC() {
				this.show = true
			},
			dateConfirm(e) {
				this.currentDate = e.result
			},
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
						this.serversList = res.data.data.map(item => ({
							text: item.name,
							value: item.ip
						}))
					}
				});
			},
			publish() {

				console.log(this.gqsj)
				let params = {
					bt: this.title,
					cjsj: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
					gqsj: this.gqsj,
					jl1: this.jl1 ? this.jl1 + '*' + this.num.n1 : '',
					jl2: this.jl2 ? this.jl2 + '*' + this.num.n2 : '',
					jl3: this.jl3 ? this.jl3 + '*' + this.num.n3 : '',
					jl4: this.jl4 ? this.jl4 + '*' + this.num.n4 : '',
					jl5: this.jl5 ? this.jl5 + '*' + this.num.n5 : '',
					xxnr: this.content,
					yd: 0
				}
				console.log(params)
				// 全服
				if (this.tabId == 0) {
					this.servers.map((s, i) => {
						servers.value.map((s, i) => {
							const socket = new SK.default(
								`http://${s.ip}:8099/endpoint-websocket`); //连接上端点(基站)
							const SC = Stomp.over(socket); //用stom进行包装，规范协议
							SC.connect({}, (con) => {
								console.log(con, '连接毁掉');
								if (con.command == 'CONNECTED') {
									console.log('连接成功>..');
									SC.send('/app/messageAll', {}, JSON.stringify(params));
									this.stompClient.value.push(SC);
								}
								SC.subscribe('/topic/game_rank', function(result) {
										console.log('result=' + result);
									}),
									(e) => {
										console.log(e);
									};
							});
						});
					});
				} else {
					console.log(this.server)
					if (this.stopmClientSingle != null) {
						this.stopmClientSingle.disconnect();
					}
					this.stopmClientSingle = null
					params['userId'] = this.userId
					const socket = new SK.default(`http://${this.server}:8099/endpoint-websocket`); //连接上端点(基站)
					this.stopmClientSingle = Stomp.over(socket); //用stom进行包装，规范协议
					this.stopmClientSingle.connect({}, function(frame) {
						if (frame.command == 'CONNECTED') {
							console.log('连接成功>..');
							this.stopmClientSingle.send('/app/message', {}, JSON.stringify(params));
						}
						console.log('Connected: ' + frame);
						this.stopmClientSingle.subscribe('/topic/game_rank', function(result) {
							console.log('result=' + result);
						});
					});
				}

				let opts = {
					url: '/msg/insert',
					method: 'post'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts, params).then(res => {
					uni.hideLoading();
					console.log(res)
					if (res.data.code == 0) {
						this.$refs.uToast.show({
							title: '发布成功',
							type: 'success'
						})
					}else{
						this.$refs.uToast.show({
							title: res.data.message,
							type: 'error'
						})
					}
				});
				// userId:"",
				// title:"",
				// gqsj: "",
				// jl1: '',
				// jl2: '',
				// jl3: '',
				// jl4: '',
				// jl5: '',
				// content:"",
				
			},
			closeCa() {},
			sectionChange(e) {
				console.log('123123', e)
				this.showId = e === 1 ? true : false
				// this.dx = e
				this.tabId = 1
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

		.flex_row {
			display: flex;

			.uni-combox {
				flex: 1;
				margin-right: 5px;
			}

			.uni-stat__select {
				flex: 1;
				margin-right: 5px;
			}

			.u-input:nth-child(2) {
				width: 30rpx;
			}
		}
	}
</style>