<template>
  <div class="about">
    <h1>Data Visualization & Analysis</h1>
    <!-- <BarChart></BarChart> -->
    <div>
      <h1 class="title">LineChart</h1>
      <div class="chart-div">
        <LineChart :chartData="chartData"></LineChart>
      </div>
    </div>
  </div>
</template>
<script>
import { getDatabase, ref, onValue } from "firebase/database";
// import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";

export default {
  name: "VisualView",
  components: {
    // BarChart,
    LineChart,
  },
  data() {
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: {
          data: [100, 150, 300, 200],
        },
      },
    };
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
  color: tomato;
}
</style>
