<template>
  <div class="main">
    <div class="form-area">
      <MainHeader />
      <router-view />
      <MainFooter />
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/Header.vue";
import MainFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>
