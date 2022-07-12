<!--汇报关系绘画-->
<template>
  <div class="reporting-relationship-wrap">
    <div class="switch-box">
      <a-select style="width: 200px" v-model="leaderType">
        <a-select-option v-for="r in typeList" :key="r.id" :value="r.code">
          {{ r.name }}
        </a-select-option>
      </a-select>
    </div>
    <div class="centent-box">
      <ul>
        <!--上级数据-->
        <li
          class="leader-data"
          v-if="leaders.leadersList && leaders.leadersList.length > 0"
        >
          <p
            v-for="(r, i) in leaders.leadersList"
            :key="i + 'once'"
            :class="leaders.leadersList.length == '1' ? 'only' : ''"
          >
            <font>{{ i.leaderTypeName }}</font>
            <span>{{ i.leaderName }}</span>
            <em>{{ leaders.orgLayerName }}</em>
            <b></b>
          </p>
        </li>
        <li v-else>
          <p>
            <font>暂无领导</font>
          </p>
        </li>
        <!--个人数据-->
        <li class="personal-data">
          <p>
            <span>{{ leaders.name }}</span>
            <em>{{ leaders.orgLayerName }}</em>
          </p>
        </li>
        <!--下级数据-->
        <li
          class="subordinate-data"
          v-if="leaders.subordinatesList && leaders.subordinatesList.length > 0"
        >
          <p
            v-for="(item, idx) in leaders.subordinatesList"
            :key="idx"
            :class="leaders.subordinatesList.length == '1' ? 'only' : ''"
          >
            <font>{{ item.userTypeName }}</font>
            <span>{{ item.userName }}</span>
            <em>{{ leaders.orgLayerName }}</em>
          </p>
        </li>
        <li v-else>
          <p class="only">
            <font>暂无领导汇报员工</font>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/assets/less/test01.less";
export default {
  name: "testOne",
  components: {},

  data() {
    return {
      typeList: [
        {
          id: 1,
          code: "indirect",
          name: "间接汇报领导",
        },
        {
          id: 2,
          code: "direct",
          name: "直接汇报领导",
        },
        {
          id: 3,
          code: "All",
          name: "全部",
        },
      ], // 汇报类型
      leaderType: "All", // 领导类型
      leaders: {
        name: "1234", // 员工姓名
        orgLayerName: "根节点导入/雅士利", // 所属组织
        orgName: "雅士利",
        leadersList: [], // 领导数据
        subordinatesList: [], // 下级数据
      }, // 领导数据
    };
  },

  created() {},

  mounted() {},

  methods: {
    /**
     * 下拉选择框值改变时触发
     */
    handleSelectChange() {},
  },
};
</script>