<template>
  <v-app-bar app color="#4fa5bf" dark flat class="px-12">
    <v-btn>
      RUN
      <v-icon color="yellow" left class="mr-2">
        fa-solid fa-person-running
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('event')" class="">event</v-btn>
    <v-btn text @click="scroll('contact')" class="">contact</v-btn>
    <v-btn variant="tonal" class="text-yellow">register</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-app-bar {
    border-bottom: 1px solid #90CAF9;
}
</style>
