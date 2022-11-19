<template>
  <div class="p-0">
    <!-- <BarChart></BarChart> -->
    <v-row>
      <v-tabs
        v-model="selectedMainCat"
        align-with-title
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
        grow
      >
        <v-tabs-slider color="#FFD700" />
        <v-tab
          v-for="(item, index) in Bridges"
          :key="index"
          @click="activate()"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-row>
  </div>
</template>
<script>
import { getDatabase, ref, onValue } from "firebase/database";
// import BarChart from "../components/BarChart.vue";
// import LineChart from "../components/LineChart.vue";
// import PieChart from "../components/PieChart.vue";

export default {
  name: "VisualView",
  components: {
    // BarChart,
    // LineChart,
    // PieChart,
  },
  data() {
    return {
      lat: "",
      lng: "",
      selectedSubCat: 0,
      selectedMainCat: 0, // tabs
      Bridges: [
        {
          id: 1,
          title: "Bridge #1",
        },
        {
          id: 2,
          title: "Bridge #2",
        },
        {
          id: 3,
          title: "Bridge #4",
        },
        {
          id: 4,
          title: "Bridge #5",
        },
        {
          id: 5,
          title: "Bridge #6",
        },
      ],
    };
  },
  mounted() {
    this.retrieveFromFirebase();
  },
  methods: {
    activate() {
      this.Active;
    },
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
