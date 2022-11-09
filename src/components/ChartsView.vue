<template>
  <div class="w-1/4">
    {{ ExtractedInterval }}
    <PieChart
      :dataset-labels="ExtractedInterval[1]"
      :dataset-data="[400, 86400]"
    />
  </div>
</template>

<script>
import PieChart from "@/components/LineChart.vue";
export default {
  name: "App",
  components: { PieChart },
  data() {
    return {
      power: [
        {
          1666438064: {
            District: "Nyarugenge",
            Latitude: -1.984088,
            Longitude: 30.047712,
            PowerStatus: false,
            Province: "Kigali",
            Sector: "Nyarugenge",
            Time: 1666438064,
            id_Sensor: "1",
          },
        },
        {
          1666438098: {
            District: "Nyarugenge",
            Latitude: -1.984088,
            Longitude: 30.047712,
            PowerStatus: true,
            Province: "Kigali",
            Sector: "Nyarugenge",
            Time: 1666438098,
            id_Sensor: "1",
          },
        },
        {
          1666438198: {
            District: "Nyarugenge",
            Latitude: -1.984088,
            Longitude: 30.047712,
            PowerStatus: false,
            Province: "Kigali",
            Sector: "Nyarugenge",
            Time: 1666438198,
            id_Sensor: "1",
          },
        },
        {
          1666438209: {
            District: "Nyarugenge",
            Latitude: -1.984088,
            Longitude: 30.047712,
            PowerStatus: true,
            Province: "Kigali",
            Sector: "Nyarugenge",
            Time: 1666438209,
            id_Sensor: "1",
          },
        },
      ],
    };
  },
  computed: {
    ExtractedInterval() {
      var timeStamps = [];
      var timeHours = [];
      var offTime = [];
      var onTime = [];
      var totalOffTime = 0;
      var totalOnTime = 0;

      //Get All the Hours From all the timestamps
      for (let i = 0; i < this.power.length; i++) {
        var obj = this.power[i];
        for (var key in obj) {
          var value = obj[key];
          timeStamps.push(value.Time);
          timeHours.push(this.convertTime(value.Time));
        }
      }
      // Get Off And On Time
      for (let i = 0; i < timeStamps.length; i++) {
        if (i % 2 == 0 && timeStamps[i + 1]) {
          offTime.push(timeStamps[i + 1] - timeStamps[i]);
          totalOffTime += timeStamps[i + 1] - timeStamps[i];
        } else if (i % 2 != 0 && timeStamps[i + 1]) {
          onTime.push(timeStamps[i + 1] - timeStamps[i]);
          totalOnTime += timeStamps[i + 1] - timeStamps[i];
        }
      }
      console.log("Off For " + offTime);
      console.log("On For " + totalOnTime);
      return [timeStamps, timeHours, offTime, totalOffTime];
    },
  },
  methods: {
    convertTime(unix_timestamp) {
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();
      return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    },
  },
};
</script>
