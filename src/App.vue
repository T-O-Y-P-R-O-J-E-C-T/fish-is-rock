<template>
  <HeaderSection></HeaderSection>
  <RouterView></RouterView>
  <FooterSection></FooterSection>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss">
@import './src/assets/scss/reset.scss';
</style>
