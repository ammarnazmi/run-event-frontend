<template>
  <v-app id="home">
    <nav-bar> </nav-bar>
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative; float: right; margin-top: 17vh">
              <h1>Your race, begins here</h1>
              <p style="colour: #f1f1f1">Sign up your races here</p>
              <v-btn tile dark class="text-yellow mt-8" variant="outlined">
                Register
                <v-icon class="ml-2">fa-solid fa-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="1">
            <div
              style="
                position: absolute;
                z-index: 9998;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-icon class="text-white">fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="position: relative" class="mt-16">
              <v-img src="exercise.png" contain max-height="500"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-col cols="12" class="mt-16" id="event" style="text-align: center">
        <v-card class="mx-auto" max-width="800" color="#E0F2F1">
          <h1 class="pr-5 pl-5 pt-5">
            SIME DARBY PROPERTY FAMILY FUN RUN & RIDE 2024 @ PUTRA HEIGHTS
          </h1>
          <div class="count-down pb-5">
            <count-down></count-down>
          </div>
        </v-card>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import CountDown from "@/components/users/CountDown.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    CountDown,
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  h1 {
    font-size: 25px;
    @media (max-width: 800px) {
      font-size: 20px;
      transition: 0.5s ease all;
    }
  }
}

.count-down {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-container {
  padding: 16px 0;
  margin-top: 0;
}
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 500px;
  width: 100%;
  color: white;
  transition: 0.5s ease all;

  @media (max-width: 800px) {
    height: 400px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#4fa5bf, #b4c8bf);
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    transform: scaleX(1.5);
  }
}
</style>
