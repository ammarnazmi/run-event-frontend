<template>
  <v-app id="home">
    <nav-bar> </nav-bar>
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative; float: right; margin-top: 12vh">
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
  height: 500px;
  width: 100%;
  color: white;
  transition: 0.5s ease all;

  @media (max-width: 800px) {
    height: 400px;
  }

  &:before {
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
