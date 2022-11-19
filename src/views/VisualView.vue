<template>
  <div class="p-0">
    <!-- <BarChart></BarChart> -->
    {{ bridges.length }}
    <h4 v-for="(bridge, index) in bridges" :key="index">{{ bridge }}</h4>
    <!-- <v-tabs
      v-model="selectedMainCat"
      align-with-title
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      grow
      v-if="bridges.length != 0"
    >
      <v-tabs-slider color="#FF1100" />
      <v-tab
        v-for="(bridge, index) in bridges"
        :key="index"
        @click="activate(index)"
      >
        Bridge #{{ bridge }}
      </v-tab>
    </v-tabs> -->
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <h1 v-if="bridges.length != 0">
          Current Bridge: {{ bridges[selectedTab].bridgeId }}
        </h1>
      </v-col>
    </v-row>
  </div>
  <p>{{ getWeight }}</p>
</template>

<script>
import { mapState } from "vuex";
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
      selectedTab: 0,
      selectedMainCat: 0, // tabs
    };
  },
  mounted() {
    this.$store.dispatch("retrieveFromFirebase");
  },
  computed: {
    ...mapState({
      bridges: (state) => state.bridges,
    }),
  },
  created() {},
  methods: {
    activate(index) {
      this.selectedTab = index;
      this.Active;
    },

  },
};
</script>
<style scoped>
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
