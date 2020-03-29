<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <p>
      自己的store{{test}}
      <button @click="add()">点击增加</button>
    </p>
    <p @click="add_master()">
      master的store
      {{this.$root.$data.masterStore?this.$root.$data.masterStore.getState().todos.num:''}}
      <!-- <><> -->
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: mapState(["test"]),
  methods: {
    ...mapMutations(["add"]),
    add_master: function() {
      this.$root.$data.masterStore &&
        this.$root.$data.masterStore.dispatch({ type: "ADD_TODO" });
    }
  }
  // computed: {
  //   test() {
  //     return this.$store.state.test;
  //   }
  // }
};
</script>
