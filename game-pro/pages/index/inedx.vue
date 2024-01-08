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
							新增用户
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="500" :duration="2000" :useEasing="false"></u-count-to>
							<span class="color-2 text-sm">人</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="man-add" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
					<view class="icon" style="background: #286aff;">
						<u-icon name="rmb" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							充值数据
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="109" :duration="2000" :useEasing="false"></u-count-to>
							<span class="color-2 text-sm">元</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="rmb" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
					<view class="icon" style="background: #ff5c5c;">
						<u-icon name="server-fill" color="#fff" :size="48"></u-icon>
					</view>
					<view class="num-label">
						<view class="label  text-lg">
							在线用户
						</view>
						<view class="num text-xxl">
							<u-count-to :start-val="0" :end-val="52" :duration="2000" :useEasing="false"></u-count-to>
							<span class="color-2 text-sm">人</span>
						</view>
					</view>
					<view class="icon-bg">
						<u-icon name="server-fill" color="#000" :size="100"></u-icon>
					</view>
				</view>
				<view class="card-item">
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
				</view>
				<view class="card-item">
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
				</view>
				<view class="card-item">
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
				</view>
			</view>
			<!-- 按钮日期 -->
			<!-- 图表组 -->
			<!-- <view class="btn-group">
				<view class="btn-item" @click="sectionChange(index)" :class="{'btn-active':current==index}"
					v-for="btn,index in 4" :key="index">
					{{list[index]}}
				</view>
			</view> -->

			<view class="currentRange" v-if="currentRange">
				{{currentRange}}
			</view>
			<view class="box-s">
				<view class="cu-bar bg-white margin-top-xs border-t-cust">
					<view class="action sub-title">
						<text class="text-xl text-bold text-balck text-shadow">历史新增用户</text>
						<text class="text-ABC text-balck">XinZengYongHu</text>
					</view>
				</view>
				<view class="btn-group">
					<view class="btn-item" @click="sectionChange(index)" :class="{'btn-active':current==index}"
						v-for="btn,index in 4" :key="index">
						{{list[index]}}
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
					<view class="btn-item" @click="sectionChange(index)" :class="{'btn-active':current==index}"
						v-for="btn,index in 4" :key="index">
						{{list[index]}}
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
					<view class="btn-item" @click="sectionChange(index)" :class="{'btn-active':current==index}"
						v-for="btn,index in 4" :key="index">
						{{list[index]}}
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
				currentRange: "",
				showCa: false,
				list: ['近一周',  '近半月','近一个月', '更多日期'],
				// 或者如下，也可以配置keyName参数修改对象键名
				// list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
				current: 1,
				// 柱状图
				"Column": {
					"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
					"series": [{
							"name": "微信小程序",
							"data": [15, 20, 145, 37, 4, 34],
							"color":"#668bf5"
						}, {
							"name": "TAP",
							"data": [30, 140, 25, 14, 34, 18],
							"color":"#f07759"
						},
						{
							"name": "信息流",
							"data": [10, 4, 25, 14, 34, 48],
							"color":"#2fc25b"
						}
					]
				},



				// 折线图
				Area: {
					categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '历史新增用户',
						data: [100, 80, 95, 150, 112, 132, 151],
						color: '#f07759'
					}]
				},

				// 折线图
				Area1: {
					categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '历史充值数据',
						data: [70, 40, 65, 100, 44, 68, 78],
						color: '#2fc25b'
					}]
				}

			};
		},
		onLoad() {

		},
		mounted() {
			_self = this;
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(420);
			this.getServerData();
		},
		methods: {
			getServerData() {
				_self.showArea("canvasArea", this.chartData);
				_self.showArea1("canvasArea1", this.chartData);

				_self.showColumn("canvasColumn", this.Column);
			},
			// 柱状图
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					color:"#dcdcdc",
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: _self.Column.categories,
					series: _self.Column.series,
					xAxis: {
						disableGrid: true,
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
							width: _self.cWidth * _self.pixelRatio * 0.45 / _self.Column.categories.length
						}
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
						dashLength: 8
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
							gradient:true
						}
					}
				});
			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data+" 人"
					}
				});
			},

			// 折线图
			showArea1(canvasId, chartData) {
				canvaArea1 = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: _self.Area1.categories,
					series: _self.Area1.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
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
							gradient:true
						}
					}
				});
			},
			touchArea1(e) {
				canvaArea1.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data+" 元"
					}
				});
			},
			sectionChange(index) {
				var that = this
				that.current = index;

				if (index == 3) {
					that.showCa = true
				} else {
					this.currentRange = ""
				}

			},
			dateConfirm(e) {
				this.currentRange = e.startDate + " ~ " + e.endDate
				// this.currentRange = e.startMonth+"/"+e.startDay+"~"+e.endMonth+"/"+e.endDay
			},
			closeCa() {}
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