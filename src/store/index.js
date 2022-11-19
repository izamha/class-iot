import { createStore } from "vuex";
import { getDatabase, ref, onValue } from "firebase/database";

export default createStore({
  state: {
    bridges: [],
  },
  getters: {
    allBridges(state) {
      return state.bridges;
    },
  },
  mutations: {},
  actions: {
    retrieveFromFirebase() {
      const db = getDatabase();
      const dbRef = ref(db, "bridges/");
      const bridgeObjects = [];
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        Object.values(data).forEach((bridgeObject) => {
          bridgeObjects.push(bridgeObject);
        });
      });
      bridgeObjects.forEach((bridgeItem) => {
        // this.state.bridges.push(bridgeItem);
        console.log("b: ", bridgeItem); 
      });
    },
  },
  modules: {},
});
