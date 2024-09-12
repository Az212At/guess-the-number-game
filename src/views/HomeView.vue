<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="home">
    <h1>Добро пожаловать в игру "Угадай число"</h1>
    <p>У вас есть 10 попыток, чтобы угадать число от 1 до 100.</p>
    <RouterLink to="/game">Начать игру</RouterLink>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}
</style>
