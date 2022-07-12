<!--图表-->
<template>
  <div class="echar-wrap">
    <div
      class="echar-box"
      id="echar-img"
      style="width: 90%; height: 90vh"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "echar",
  components: {},

  data() {
    return {};
  },

  created() {
    this.$nextTick(() => {
      this.initCharts();
    });
  },

  mounted() {},

  methods: {
    initCharts() {
      const chartDom = document.querySelector("#echar-img");
      const myChart = echarts.init(chartDom);
      let option;
      option = {
        color: [
          "#5470c6",
          "#91cc75",
          "#fac858",
          "#ee6666",
          "#73c0de",
          "#3ba272",
          "#fc8452",
          "#9a60b4",
          "#ea7ccc",
        ],
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          //   x: 0, // 距离左,
          //   y: 0, // 距离上,
          icon: "line",
          itemWidth: 30, // 设置宽度
          itemHeight: 20, // 设置高度
          itemGap: 20, // 设置间距
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true, // 控制折线是否平滑
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                color: "#F4A723",
                lineStyle: {
                  color: "#F4A723",
                },
                // label : {show: true}
              },
            },
            smooth: true, // 控制折线是否平滑
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
            smooth: true, // 控制折线是否平滑
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
            smooth: true, // 控制折线是否平滑
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            smooth: true, // 控制折线是否平滑
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style lang='less' scoped>
.echar-wrap {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>