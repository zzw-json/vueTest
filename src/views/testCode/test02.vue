<!--css实现文字循环滚动效果-->
<template>
  <div class="test-wrap">
    <div class="x-box">
      <p class="x-animate">
        {{ text }}
      </p>
    </div>
    <div class="y-box">
      <p class="y-animate">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import "@/assets/less/test02.less";
export default {
  name: "Test",
  components: {},

  data() {
    return {
      text: "文字滚动的内容文字滚动的内容文字滚动的内容文字滚动的内容",
    };
  },

  created() {
    this.initTime();
  },

  mounted() {},

  methods: {
    initTime() {
      const newDate = new Date();
      let year = newDate.getFullYear(); // 年
      let month =
        newDate.getMonth() + 1 >= 10
          ? newDate.getMonth() + 1
          : "0" + (newDate.getMonth() + 1); // 月
      let date =
        newDate.getDate() >= 10 ? newDate.getDate() : "0" + newDate.getDate(); // 日
      let hour =
        newDate.getHours() >= 10
          ? newDate.getHours()
          : "0" + newDate.getHours(); //时
      let min =
        newDate.getMinutes() >= 10
          ? newDate.getMinutes()
          : "0" + newDate.getMinutes(); // 分
      let s =
        newDate.getSeconds() >= 10
          ? newDate.getSeconds()
          : "0" + newDate.getSeconds(); // 秒
      const week = newDate.getDay();
      const weekList = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      this.text =
        "今天是" +
        year +
        "年" +
        month +
        "月" +
        date +
        "日" +
        weekList[week] +
        " , " +
        hour +
        ":" +
        min +
        ":" +
        s;
    },
  },
};
</script>