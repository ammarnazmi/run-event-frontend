<template>
  <div class="launch-time">
    <div>
      <p id="days">00</p>
      <span>Days</span>
    </div>
    <div>
      <p id="hours">00</p>
      <span>Hours</span>
    </div>
    <div>
      <p id="minutes">00</p>
      <span>Minutes</span>
    </div>
    <div>
      <p id="seconds">00</p>
      <span>Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      const countDowmDate = new Date("Dec 15, 2023 00:00:00").getTime();
      setInterval(function () {
        const now = new Date().getTime();
        const distance = countDowmDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.launch-time {
  display: flex;

  div {
    flex-basis: 100px;
    padding-right: 20px;
  }

  div p {
    font-size: 60px;
    margin: auto;
    @media (max-width: 800px) {
        font-size: 40px;
    }
    
  }
}
</style>
