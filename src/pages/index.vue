<script setup>
import SideMenu from "@/components/sideMenu.vue";
</script>

<template>
  <div class="main">
    <SideMenu/>
    <div class="work-space">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #101010;
  height: 100dvh;
  display: flex;
  overflow: hidden;

  .work-space{
    width: 100%;
    margin: 20px 20px 20px 0;
    padding: 32px;
    border-radius: 40px;
    background-color: #ffffff;
    border: 2px solid #FF8F0F;
    box-shadow: 0 0 20px 0 #FF4900;
  }
}
</style>