<template>
  <div class="about">
    <h3>Data Visualization & Analysis</h3>
    <!-- <BarChart></BarChart> -->
    <div class="row">
      <div class="line-chart">
        <h2>Chart 1</h2>
        <LineChart></LineChart>

        <ul class="location">
          <li>Latitude: {{ lat }}</li>
          <li>Longitude: {{ lng }}</li>
        </ul>
      </div>
      <!-- <div class="bar-chart">
        <BarChart></BarChart>
      </div> -->
      <div class="pie-chart">
        <PieChart></PieChart>
        <hr class="divider" />
        <div class="desc">
          <p>
            <b>Chart 1</b> Represents the incurred Weight(g) and Humidity(%rh)
            through-out the year,
          </p>
          <ul>
            <li>
              The more weight and harsh climate conditions(Humidity) the more
              damage on bridges.
            </li>
            <li>
              During the busiest months of the year, more damage on bridges
              should be expected.
            </li>
            <li>
             Infrastructure pre-planning should be made based on expected damage.
            </li>
          </ul>
        </div>
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
    return {
      lat: "",
      lng: "",
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
        Object.values(data).forEach((bridgeItem) => {
          this.lat = bridgeItem.Latitude;
          this.lng = bridgeItem.Longitude;
        });
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
