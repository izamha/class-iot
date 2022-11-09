<template>
  <div class="about">
    <h3>Data Visualization & Analysis</h3>
    <!-- <BarChart></BarChart> -->
    <div class="row">
      <div class="line-chart">
        <LineChart></LineChart>
      </div>
      <!-- <div class="bar-chart">
        <BarChart></BarChart>
      </div> -->
      <div class="pie-chart">
        <PieChart></PieChart>
      </div>
    </div>
  </div>
</template>
<script>
import { getDatabase, ref, onValue } from "firebase/database";
// import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import PieChart from "../components/PieChart.vue";

export default {
  name: "VisualView",
  components: {
    // BarChart,
    LineChart,
    PieChart,
  },
  data() {
    return {};
  },
  mounted() {
    this.retrieveFromFirebase();
  },
  methods: {
    retrieveFromFirebase() {
      const db = getDatabase();
      const dbRef = ref(db, "Bridges/");
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data: ", data);
      });
    },
  },
};
</script>
<style>
.title {
  color: #62d54f;
}
.row {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
</style>
