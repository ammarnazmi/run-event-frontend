<template>
  <v-app id="home">
    <nav-bar> </nav-bar>
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative;  float: right; margin-top: 12vh"  >
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
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="position: relative; z-index: 9999" class="mt-16">
              <v-img src="exercise.png" contain max-height="500"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="event">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg"></div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  padding: 16px 0;
  margin-top: 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
  background: #4fa5bf;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: #1565c0;
    transform: skew(0deg, 5deg);
    background-image: url("/public/2789416.svg");
    background-size: cover;
  }

  &:after {
    background-image: url("/public/2789417.svg");
    background-size: cover;
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background-color: #1565c0;
    transform: skew(0deg, -5deg);
  }
}
</style>
