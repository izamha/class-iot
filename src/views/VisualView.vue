<template>
  <div class="p-0">
    <!-- <BarChart></BarChart> -->

    <!-- <h4 v-for="(bridge, index) in bridges" :key="index">{{ bridge[Object.keys(bridge)[0]] }}</h4> -->
    <v-tabs
      v-model="selectedMainCat"
      align-with-title
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      grow
    >
      <v-tabs-slider color="#FF1100" />
      <v-tab
        v-for="(key, index) in bridgeKeys"
        :key="index"
        @click="activate(index)"
      >
        {{ key }}
      </v-tab>
    </v-tabs>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-tabs
          v-model="selectedMainCat"
          align-with-title
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          grow
        >
          <v-tabs-slider color="#FF1100" />
          <v-tab
            v-for="(vehicles, index) in bridgeData['vehicles']"
            :key="index"
            @click="currentVehicle(vehicles)"
          >
            Vehicle #{{ vehicles["vehicleId"] }}
          </v-tab>
        </v-tabs>
        <div class="data-pres">
          <!-- {{ vehicle }} -->
          <h3>Vehicle Weight(g)</h3>
          <pie-chart
            :chart-data="chartData"
            :width="200"
            :height="200"
          ></pie-chart>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import bridges from "../data/bridges2.json";
import { mapState } from "vuex";
// import BarChart from "../components/BarChart.vue";
// import LineChart from "../components/LineChart.vue";
import PieChart from "../components/PieChart.vue";

export default {
  name: "VisualView",
  components: {
    // BarChart,
    // LineChart,
    PieChart,
  },
  data() {
    return {
      lat: "",
      lng: "",
      selectedTab: 0,
      selectedMainCat: 0, // tabs
      bridges: "",
      bridgeKeys: [],
      bridgeData: "",
      vehicle: "",

      chartData: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            backgroundColor: ["#5A3732", "#32355A", "#8D92CC"],
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  mounted() {
    this.bridges = bridges;
    // this.$store.dispatch("retrieveFromFirebase");
    this.getKeys();
  },
  computed: {
    ...mapState({
      bridges2: (state) => state.bridges,
    }),
  },
  created() {},
  methods: {
    activate(index) {
      this.selectedTab = index;
      this.Active;
      this.bridgeData = this.bridges.bridges[this.bridgeKeys[index]];
    },
    currentVehicle(vehicles) {
      this.vehicle = vehicles;
      return this.vehicle;
    },
    getKeys() {
      let length = Object.keys(this.bridges.bridges).length;
      for (let i = 0; i < length; i++) {
        const key = Object.keys(this.bridges.bridges)[i];
        this.bridgeKeys.push(key);
      }
      // this.bridgeData = this.bridges.bridges[this.bridgeKeys[this.selectedTab]];
    },
  },
};
</script>
<style scoped>
.data-pres {
  margin-top: 20px;
}
.title {
  color: #62d54f;
}
.row {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.location {
  list-style-type: none;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
.divider {
  margin: 20px;
}
.desc ul {
  margin: 10px;
  padding: 10px;
  text-align: left;
}
</style>
