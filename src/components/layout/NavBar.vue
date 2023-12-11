<template>
  <v-app-bar color="#4fa5bf" class="px-12" :elevation="0" style="position: fixed;">
    <v-btn>
      RUN
      <v-icon color="yellow" left class="mr-2">
        fa-solid fa-person-running
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div v-show="!mobile">
      <v-btn text @click="scroll('home')">Home</v-btn>
      <v-btn text @click="scroll('event')" class="">event</v-btn>
      <v-btn text @click="scroll('contact')" class="">contact</v-btn>
      <v-btn variant="tonal" class="text-yellow">register</v-btn>
    </div>
    <v-icon
      @click="toggleMobileNav"
      v-show="mobile"
      class="icon"
      :class="{ 'icon-active': mobileNav }"
      >fa-solid fa-bars</v-icon
    >
  </v-app-bar>
  <transition name="mobile-nav">
    <div v-show="mobileNav" class="dropdown-nav">
      <v-navigation-drawer style="background: none" permanent>
        <v-list nav>
          <v-list-item
            prepend-icon="fa-solid fa-house"
            class="text-white"
            title="HOME"
            value="event"
          ></v-list-item>
          <v-list-item
            prepend-icon="fa-solid fa-calendar"
            class="text-white"
            title="EVENT"
            value="event"
          ></v-list-item>
          <v-list-item
            prepend-icon="fa-solid fa-phone"
            class="text-white"
            title="CONTACT"
            value="contact"
          ></v-list-item>
          <v-list-item
            variant="tonal"
            class="text-yellow"
            prepend-icon="fa-solid fa-arrow-right-to-bracket"
            title="REGISTER"
            value="register"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  mounted() {
    this.checkScreen();
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  border-bottom: 1px solid #90caf9;
  z-index: 9999;
}

.dropdown-nav {
  z-index: 9999;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background: linear-gradient(#4fa5bf, #b4c8bf);
  top: 0;
  left: 0;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  transition: 0.5s ease all;
}

.icon-active {
  transform: rotate(90deg);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translate(0);
}
</style>
