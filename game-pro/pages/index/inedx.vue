<!-- 首页 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
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
			<view class="cu-bar bg-white margin-top-xs border-t-cust">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">历史新增用户</text>
					<text class="text-ABC text-blue">XinZengYongHu</text>
				</view>
			</view>
			<view class="chartsMain">
				<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
			</view>

			<view class="cu-bar bg-white margin-top-xs border-t-cust">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">历史充值数据</text>
					<text class="text-ABC text-blue">ChongZhiShuJu</text>
				</view>
			</view>
			<view class="chartsMain">
				<canvas canvas-id="canvasArea1" id="canvasArea1" class="charts" @touchstart="touchArea1"></canvas>
			</view>



			<view class="cu-bar bg-white margin-top-xs border-t-cust">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">各平台数据统计</text>
					<text class="text-ABC text-blue">PlatformStatistic</text>
				</view>
			</view>
			<view class="chartsMain">
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
			</view>
		</view>




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



				// 柱状图
				"Column": {
					"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
					"series": [{
							"name": "微信小程序",
							"data": [15, 20, 145, 37, 4, 34]
						}, {
							"name": "TAP",
							"data": [30, 140, 25, 14, 34, 18]
						},
						{
							"name": "信息流",
							"data": [10, 4, 25, 14, 34, 48]
						}
					]
				},



				// 折线图
				Area: {
					categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '历史新增用户',
						data: [100, 80, 95, 150, 112, 132, 151],
						color: '#facc14'
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
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: _self.Column.categories,
					series: _self.Column.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
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
							type: 'straight',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});
			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data
					}
				});
			},

			// 折线图
			showArea1(canvasId, chartData) {
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
							type: 'straight',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});
			},
			touchArea(e) {
				canvaArea1.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data
					}
				});
			},

		}
	};
</script>
<style lang="scss" scoped>
	.swiper-box {
		flex: 1;
	}
	.padding-cust{
		padding:10rpx 15rpx;
	}

	.swiper-item {
		height: 100%;
	}

.border-t-cust{
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
</style>