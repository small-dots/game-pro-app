<!-- 首页 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">数据概览</block>
		</cu-custom>

		<!-- <add-tip :tip="tip" :duration="duration" /> -->

		<!-- banner图 -->
		<!-- <view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" circular="true" indicator-dots="true" autoplay="true" interval="3500"
						duration="600">
						<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
							<view class="swiper-item uni-bg-red">
								<image class="swiper-img" :src="item.imageUrl" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view> -->

		<!-- 流量主-腾讯广告 -->

		<!-- 导航栏 -->
		<!-- <view class="cu-list grid solids-bottom col-4 no-border">
			<view class="cu-item" v-for="(item, index) in categories" :key="index"
				:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]" @click="goCategorieslist"
				:data-mid="item.mid">
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.count != 0">
						<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
					</view>
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view> -->

		<view class="padding-cust">
			<!-- 卡片组 -->
			<view class="cards">
				<view class="card-item">
					<view class="icon" style="background: #ff9709;">
						<u-icon name="man-add" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							今日新增用户
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="addUser" :duration="2000"
								:useEasing="false"></u-count-to>
							<span class="color-2 text-sm">人</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="man-add" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
					<view class="icon" style="background: #286aff;">
						<u-icon name="man-add" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							用户数量总计
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="totalUser" :duration="2000"
								:useEasing="false"></u-count-to>
							<span class="color-2 text-sm">人</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="man-add" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
					<view class="icon" style="background: #ff5c5c;">
						<u-icon name="server-fill" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							当前在线用户
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="onlineUser" :duration="2000"
								:useEasing="false"></u-count-to>
							<span class="color-2 text-sm">人</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="server-fill" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
					<view class="icon" style="background: #4ac9af;">
						<u-icon name="rmb" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							今日充值金额
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="addAmount" :duration="2000"
								:useEasing="false"></u-count-to>
							<span class="color-2 text-sm">元</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="rmb" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
					<view class="icon" style="background: #422ec6;">
						<u-icon name="rmb" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							总充值金额
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="totalAmount" :duration="2000"
								:useEasing="false"></u-count-to>
							<span class="color-2 text-sm">元</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="rmb" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<!-- <view class="card-item">
					<view class="icon" style="background: #4ac9af;">
						<u-icon name="search" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							新增用户
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="40" :duration="2000" :useEasing="false"></u-count-to>
							<span class="color-2 text-sm">人</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="rmb" color="#000" :size="100"></u-icon>
					</view>
				</view> -->
			</view>
			<!-- 按钮日期 -->
			<!-- 图表组 -->
			<!-- <view class="btn-group">
				<view class="btn-item" @click="sectionChange(index)" :class="{'btn-active':current==index}"
					v-for="btn,index in 4" :key="index">
					{{list[index]}}
				</view>
			</view> -->

			<view class="box-s">
				<view class="cu-bar bg-white margin-top-xs border-t-cust">
					<view class="action sub-title">
						<text class="text-xl text-bold text-balck text-shadow">历史新增用户</text>
						<text class="text-ABC text-balck">XinZengYongHu</text>
					</view>
				</view>
				<view class="btn-group">
					<view class="btn-item" @click="sectionChange(index,list[index],1)"
						:class="{'btn-active':current==index}" v-for="btn,index in 3" :key="index">
						近{{list[index]}}天
					</view>
					<view class="btn-item" @click="sectionChange(3,null,1)" :class="{'btn-active':current==3}">
						{{currentRange1}}
					</view>
				</view>
				<view class="chartsMain">
					<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
				</view>
			</view>

			<view class="box-s">
				<view class="cu-bar bg-white margin-top-xs border-t-cust">
					<view class="action sub-title">
						<text class="text-xl text-bold text-balck text-shadow">历史充值数据</text>
						<text class="text-ABC text-balck">ChongZhiShuJu</text>
					</view>
				</view>
				<view class="btn-group">
					<view class="btn-item" @click="sectionChange(index,list[index],2)"
						:class="{'btn-active':current1==index}" v-for="btn,index in 3" :key="index">
						近{{list[index]}}天
					</view>
					<view class="btn-item" @click="sectionChange(3,null,2)" :class="{'btn-active':current1==3}">
						{{currentRange2}}
					</view>
				</view>
				<view class="chartsMain">
					<canvas canvas-id="canvasArea1" id="canvasArea1" class="charts" @touchstart="touchArea1"></canvas>
				</view>
			</view>
			<view class="box-s">
				<view class="cu-bar bg-white margin-top-xs border-t-cust">
					<view class="action sub-title">
						<text class="text-xl text-bold text-balck  text-shadow">各平台数据统计</text>
						<text class="text-ABC text-balck">PlatformStatistic</text>
					</view>
				</view>
				<view class="btn-group">
					<view class="btn-item" @click="sectionChange(index,list[index],3)"
						:class="{'btn-active':current2==index}" v-for="btn,index in 3" :key="index">
						近{{list[index]}}天
					</view>
					<view class="btn-item" @click="sectionChange(3,null,3)" :class="{'btn-active':current2==3}">
						{{currentRange3}}
					</view>
				</view>
				<view class="chartsMain">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"
						@touchstart="touchColumn"></canvas>
				</view>
			</view>
		</view>

		<u-calendar mode="range" v-model="showCa" @change="dateConfirm" @close="closeCa"></u-calendar>
		<view style="height: 140rpx;width: 1rpx;"></view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	import uCharts from "@/components/u-charts/u-charts.js";
	var _self;
	var canvaArea = null;
	var canvaArea1 = null;
	var canvaColumn = null;
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},

				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				currentRange1: "更多日期",
				currentRange2: "更多日期",
				currentRange3: "更多日期",
				currnetIndexDate: 0,
				showCa: false,
				list: ['3', '7', '15', '更多日期'],
				// 或者如下，也可以配置keyName参数修改对象键名
				// list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
				current: 1,
				current1: 1,
				current2: 1,
				// 柱状图
				"Column": {
					"categories": [],
					"series": [{
							"name": "微信小程序",
							"data": [],
							"color": "#668bf5"
						}, {
							"name": "TAP",
							"data": [],
							"color": "#f07759"
						},
						{
							"name": "信息流",
							"data": [],
							"color": "#2fc25b"
						}
					]
				},



				// 折线图
				Area: {
					categories: [],
					series: [{
						name: '历史新增用户',
						data: [],
						color: '#f07759'
					}]
				},

				// 折线图
				Area1: {
					categories: [],
					series: [{
						name: '历史充值数据',
						data: [],
						color: '#2fc25b'
					}]
				},
				addUser: 0,
				totalUser: 0,
				onlineUser: 0,
				addAmount: 0,
				totalAmount: 0
			};
		},
		onLoad() {

		},
		mounted() {
			_self = this;
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(420);
			this.getServerData();
			this.getStaticData();
			this.getStaticData1();
			this.getStaticData2();
		},
		methods: {
			getStaticData() {
				let opts = {
					url: 'tj/login/count',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.onlineUser = res.data.data.login;
						this.totalUser = res.data.data.all;
					}
				});
			},
			getStaticData1() {
				let opts = {
					url: 'tj/today/amount',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.addAmount = res.data.data.today;
						this.totalAmount = res.data.data.all;
					}
				});
			},
			getStaticData2() {
				let opts = {
					url: 'tj/today/added',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.addUser = res.data.data;
					}
				});
			},
			getServerData() {
				_self.showArea("canvasArea", this.chartData);
				_self.showArea1("canvasArea1", this.chartData);
				_self.showColumn("canvasColumn", this.Column);
			},


			// 柱状图
			showColumn(canvasId, chartData) {
				let opts = {
					url: 'tj/plat',
					method: 'post',
					data: {}
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts, {
					kssj: this.getDatesWithinSevenDays(7).futureDate,
					jssj: this.getDatesWithinSevenDays(7).currentDate
				}).then(res => {
					console.log('dasdasd', res);
					uni.hideLoading();
					_self.Column.series[0].data = []
					_self.Column.series[1].data = []
					_self.Column.series[2].data = []
					_self.Column.categories = []
					if (res.statusCode == 200) {
						res.data.map(item => {
							// const num = item.tap+item.xxl+item.weixin
							_self.Column.series[0].data.push(item.weixin)
							_self.Column.series[1].data.push(item.tap)
							_self.Column.series[2].data.push(item.xxl)
							_self.Column.categories.push(item.zb)
						});

						canvaColumn = new uCharts({
							$this: _self,
							canvasId: canvasId,
							type: 'column',
							legend: true,
							fontSize: 11,
							color: "#dcdcdc",
							background: '#FFFFFF',
							pixelRatio: _self.pixelRatio,
							animation: true,
							categories: _self.Column.categories,
							series: _self.Column.series,
							enableScroll: true,
							xAxis: {
								disableGrid: true,
								itemCount: 5
							},
							yAxis: {
								type: 'grid',
								gridColor: '#CCCCCC',
								gridType: 'dash',
								dashLength: 8
							},
							dataLabel: true,
							width: _self.cWidth * _self.pixelRatio,
							height: _self.cHeight * _self.pixelRatio,
							extra: {
								column: {
									type: 'group',
									width: _self.cWidth * _self.pixelRatio * 0.45 / _self.Column.categories
										.length
								}
							}
						});
					}
				});


			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},


			// 折线图
			showArea(canvasId, chartData) {
				let opts = {
					url: 'tj/plat',
					method: 'post',
					data: {}
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts, {
					kssj: this.getDatesWithinSevenDays(7).futureDate,
					jssj: this.getDatesWithinSevenDays(7).currentDate
				}).then(res => {
					console.log('dasdasd', res);
					uni.hideLoading();
					_self.Area.series[0].data = []
					_self.Area.categories = []
					if (res.statusCode == 200) {
						res.data.map(item => {
							const num = item.tap + item.xxl + item.weixin
							_self.Area.series[0].data.push(num)
							_self.Area.categories.push(item.zb)
						});
						canvaArea = new uCharts({
							$this: _self,
							canvasId: canvasId,
							type: 'area',
							fontSize: 11,
							legend: true,
							dataLabel: false,
							dataPointShape: true,
							background: '#FFFFFF',
							pixelRatio: _self.pixelRatio,
							categories: _self.Area.categories,
							series: _self.Area.series,
							animation: true,
							xAxis: {
								type: 'grid',
								gridColor: '#CCCCCC',
								gridType: 'dash',
								dashLength: 8,
								itemCount: 5
							},
							enableScroll: true,
							yAxis: {
								gridType: 'dash',
								gridColor: '#CCCCCC',
								dashLength: 8,
								splitNumber: 5,
								min: 10,
								max: 180,
							},
							width: _self.cWidth * _self.pixelRatio,
							height: _self.cHeight * _self.pixelRatio,
							extra: {
								area: {
									type: 'curve',
									opacity: 1,
									addLine: true,
									width: 2,
									gradient: true
								}
							}
						});
					}
				});

			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data + " 人"
					}
				});
			},

			// 折线图
			async showArea1(canvasId, chartData) {
				let opts = {
					url: 'tj/plat',
					method: 'post',
					data: {}
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts, {
						kssj: this.getDatesWithinSevenDays(7).futureDate,
						jssj: this.getDatesWithinSevenDays(7).currentDate
					})

					.then(res => {
						console.log('dasdasd', res);
						uni.hideLoading();
						_self.Area1.categories = []
						_self.Area1.series[0].data = []
						if (res.statusCode == 200) {
							res.data.map(item => {
								_self.Area1.series[0].data.push(item.je)
								_self.Area1.categories.push(item.zb)
							});
							console.log(_self.Area1)

							canvaArea1 = new uCharts({
								$this: _self,
								canvasId: canvasId,
								type: 'area',
								fontSize: 11,
								legend: true,
								dataLabel: false,
								dataPointShape: true,
								background: '#FFFFFF',
								pixelRatio: _self.Area1.pixelRatio,
								categories: _self.Area1.categories,
								series: _self.Area1.series,
								animation: true,
								enableScroll: true,
								xAxis: {
									type: 'grid',
									gridColor: '#CCCCCC',
									gridType: 'dash',
									dashLength: 8,
									itemCount: 5
								},
								yAxis: {
									gridType: 'dash',
									gridColor: '#CCCCCC',
									dashLength: 8,
									splitNumber: 5,
									min: 10,
									max: 180,
								},
								width: _self.cWidth * _self.pixelRatio,
								height: _self.cHeight * _self.pixelRatio,
								extra: {
									area: {
										type: 'curve',
										opacity: 1,
										addLine: true,
										width: 2,
										gradient: true
									}
								}
							});
						}
					});

			},
			touchArea1(e) {
				canvaArea1.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data + " 元"
					}
				});
			},
			sectionChange(index, btn, type) {
				var that = this
				let kssj = ''
				let jssj = ''
				if (type == 1) {
					this.current = index
					if (index == 3) {
						that.showCa = true
						this.currnetIndexDate = 1
					} else {
						this.currentRange1 = "更多日期"
						kssj = that.getDatesWithinSevenDays(btn).futureDate
						jssj = that.getDatesWithinSevenDays(btn).currentDate
					}

					let opts = {
						url: 'tj/plat',
						method: 'post',
						data: {}
					};
					uni.showLoading({
						title: '加载中'
					})
					request.httpRequest(opts, {
						kssj: kssj,
						jssj: jssj
					}).then(res => {
						uni.hideLoading();
						_self.Area.series[0].data = []
						_self.Area.categories = []
						if (res.statusCode == 200) {
							res.data.map(item => {
								const num = item.tap + item.xxl + item.weixin
								_self.Area.series[0].data.push(num)
								_self.Area.categories.push(item.zb)
							});
							canvaArea.updateData({
								categories: _self.Area.categories,
								series: _self.Area.series,
							})
						}
					});


				}
				if (type == 2) {
					this.current1 = index
					if (index == 3) {
						that.showCa = true
						this.currnetIndexDate = 2
					} else {
						this.currentRange3 = "更多日期"
						kssj = that.getDatesWithinSevenDays(btn).futureDate
						jssj = that.getDatesWithinSevenDays(btn).currentDate

						let opts = {
							url: 'tj/plat',
							method: 'post',
							data: {}
						};
						uni.showLoading({
							title: '加载中'
						})
						request.httpRequest(opts, {
							kssj: kssj,
							jssj: jssj
						}).then(res => {
							uni.hideLoading();
							_self.Area1.series[0].data = []
							_self.Area1.categories = []
							if (res.statusCode == 200) {
								res.data.map(item => {
									_self.Area1.series[0].data.push(item.je)
									_self.Area1.categories.push(item.zb)
								});
								canvaArea1.updateData({
									categories: _self.Area1.categories,
									series: _self.Area1.series,
								})
							}
						});
					}

				}
				if (type == 3) {
					this.current2 = index
					if (index == 3) {
						that.showCa = true
						this.currnetIndexDate = 3

					} else {
						this.currentRange3 = "更多日期"
						kssj = that.getDatesWithinSevenDays(btn).futureDate
						jssj = that.getDatesWithinSevenDays(btn).currentDate
					}


					let opts = {
						url: 'tj/plat',
						method: 'post',
						data: {}
					};
					uni.showLoading({
						title: '加载中'
					})
					request.httpRequest(opts, {
						kssj: kssj,
						jssj: jssj
					}).then(res => {
						uni.hideLoading();
						_self.Column.series[0].data = []
						_self.Column.series[1].data = []
						_self.Column.series[2].data = []
						_self.Column.categories = []
						if (res.statusCode == 200) {
							res.data.map(item => {
								_self.Column.series[0].data.push(item.weixin)
								_self.Column.series[1].data.push(item.tap)
								_self.Column.series[2].data.push(item.xxl)
								_self.Column.categories.push(item.zb)
							});

							canvaColumn.updateData({
								series: _self.Column.series,
								categories: _self.Column.categories
							})
						}
					});
				}


			},
			dateConfirm(e) {
				if (this.currnetIndexDate == 1) {
					this.currentRange1 = e.startDate + " ~ " + e.endDate
					 let opts = {
					 	url: 'tj/plat',
					 	method: 'post',
					 	data: {}
					 };
					 uni.showLoading({
					 	title: '加载中'
					 })
					 request.httpRequest(opts, {
					 	kssj: e.startDate,
					 	jssj: e.endDate
					 }).then(res => {
					 	uni.hideLoading();
					 	_self.Area.series[0].data = []
					 	_self.Area.categories = []
					 	if (res.statusCode == 200) {
					 		res.data.map(item => {
					 			_self.Area.series[0].data.push(item.je)
					 			_self.Area.categories.push(item.zb)
					 		});
					 		canvaArea.updateData({
					 			categories: _self.Area.categories,
					 			series: _self.Area.series,
					 		})
					 	}
					 });
				}
				if (this.currnetIndexDate == 2) {
					this.currentRange2 = e.startDate + " ~ " + e.endDate
					let opts = {
						url: 'tj/plat',
						method: 'post',
						data: {}
					};
					uni.showLoading({
						title: '加载中'
					})
					request.httpRequest(opts, {
						kssj: e.startDate,
						jssj: e.endDate
					}).then(res => {
						uni.hideLoading();
						_self.Area1.series[0].data = []
						_self.Area1.categories = []
						if (res.statusCode == 200) {
							res.data.map(item => {
								_self.Area1.series[0].data.push(item.je)
								_self.Area1.categories.push(item.zb)
							});
							canvaArea1.updateData({
								categories: _self.Area1.categories,
								series: _self.Area1.series,
							})
						}
					});
				}
				if (this.currnetIndexDate == 3) {
					this.currentRange3 = e.startDate + " ~ " + e.endDate
					let opts = {
						url: 'tj/plat',
						method: 'post',
						data: {}
					};
					uni.showLoading({
						title: '加载中'
					})
					request.httpRequest(opts, {
						kssj: e.startDate,
						jssj: e.endDate
					}).then(res => {
						uni.hideLoading();
						_self.Column.series[0].data = []
						_self.Column.series[1].data = []
						_self.Column.series[2].data = []
						_self.Column.categories = []
						if (res.statusCode == 200) {
							res.data.map(item => {
								_self.Column.series[0].data.push(item.weixin)
								_self.Column.series[1].data.push(item.tap)
								_self.Column.series[2].data.push(item.xxl)
								_self.Column.categories.push(item.zb)
							});
					
							canvaColumn.updateData({
								series: _self.Column.series,
								categories: _self.Column.categories
							})
						}
					});
				}
				// this.currentRange = e.startMonth+"/"+e.startDay+"~"+e.endMonth+"/"+e.endDay
			},
			closeCa() {},
			getDatesWithinSevenDays(day) {
				// 获取当前日期
				let currentDate = new Date();

				// 获取未来7天的日期
				let futureDate = new Date();
				futureDate.setDate(currentDate.getDate() - day + 1);

				// 格式化日期为 "YYYY-MM-DD"
				function formatDate(date) {
					let year = date.getFullYear();
					let month = String(date.getMonth() + 1).padStart(2, '0');
					let day = String(date.getDate()).padStart(2, '0');
					return `${year}-${month}-${day}`;
				}

				// 返回当前日期和未来7天的日期
				return {
					currentDate: formatDate(currentDate),
					futureDate: formatDate(futureDate)
				};
			}


		}
	};
</script>
<style lang="scss" scoped>
	.swiper-box {
		flex: 1;
	}

	.padding-cust {
		padding: 10rpx 15rpx;
	}

	.swiper-item {
		height: 100%;
	}

	.border-t-cust {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.chartsMain {
		width: 100%;
		height: 450rpx;
		padding-top: 15rpx;
		background: #fff;
		margin-bottom: 24rpx;
		border-top: 2rpx solid #f2f2f2;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;

		.charts {
			width: 100%;
			height: 450rpx;
			box-sizing: border-box;
		}
	}

	.currentRange {
		padding: 20rpx;
	}

	.cards {
		display: flex;
		flex-wrap: wrap;

		.card-item {
			position: relative;
			flex: calc(50% - 20rpx);
			padding: 40rpx 20rpx;
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10rpx;
			background: #fff;
			box-shadow: #fff 0 0 2px;

			&:nth-child(odd) {
				margin-right: 10rpx;
			}

			&:nth-child(even) {
				margin-left: 10rpx;
			}

			.icon {
				margin-right: 20rpx;
				border-radius: 50%;
				padding: 15rpx;
			}

			.icon-bg {
				position: absolute;
				right: 0;
				bottom: 0;
				margin-right: 20rpx;
				padding: 15rpx;
				opacity: 0.04;
			}

			.num-label {
				display: flex;
				flex-direction: column;

				.label {
					margin-bottom: 10rpx;
					color: #606266;
				}

				.num {
					font-weight: 500;
				}

				.color-3 {
					color: #303133;
				}

				.color-2 {
					color: #606266;
					margin-left: 10rpx;
				}
			}
		}
	}

	.btn-group {
		display: flex;
		padding: 10rpx 0;
		background: #fff;

		.btn-item {
			border-radius: 5px;
			line-height: 32px;
			text-align: center;
			font-size: 14px;
			height: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			color: #303133;
			padding: 0 24rpx;
			border-radius: 30rpx;
			transition: all 0.3s;
			margin: 0 10rpx;
			background: #f5f5f6;

			&:hover {
				background: #2b57fd;
				color: #fff;
			}
		}

		.btn-active {
			font-weight: bold;
			background: #2b57fd;
			color: #fff;
		}
	}

	.text-balck {
		color: #000 !important;
	}

	.box-s {
		box-shadow: #ffffff 0px 0px 6px 0px;
	}
</style>