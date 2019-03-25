<template>
  <div id="app">
    <Header/>
    <div class="body">
      <Poll :options="options"/>
      <PollsChart :options="options" v-if="voted"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Poll from "./components/Poll";
import PollsChart from "./components/Chart";

export default {
  name: "app",
  components: {
    Header,
    Poll,
    PollsChart
  },
  data() {
    return {
      options: [
        {
          value: 0,
          id: 1,
          category: "Before 9:00pm"
        },
        {
          value: 0,
          id: 2,
          category: "After 9:00pm before 10:00pm"
        },
        {
          value: 0,
          id: 3,
          category: "Before 11:00pm"
        },
        {
          value: 0,
          id: 4,
          category: "Early hours - 12:00am"
        }
      ],
      voted: false
    };
  },
  sockets: {
    connect() {
      console.log("connected");
    },
    voted(data) {
      console.log(this.options);
      this.options = this.options.map(option => {
        if (data.id === option.id) {
          option.value += 1;
          return option;
        }
        return option;
      });
      this.voted = true;
    }
  }
};
</script>

<style>
#app {
  width: 70%;
  margin: auto;
  color: #2c3e50;
  font-family: muli, sans-serif;
  font-weight: 400;
}
.body {
  display: flex;
}
</style>
