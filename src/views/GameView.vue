<script setup lang="ts">
import { ref, computed } from "vue";
import { useGameStore } from "@/stores/game";

const game = useGameStore();
const guess = ref<number | null>(null);
const feedback = ref<string | null>(null);

const handleGuess = () => {
  if (guess.value !== null) {
    game.makeGuess(guess.value);
    feedback.value =
      guess.value > game.targetNumber ? "Слишком много!" : "Слишком мало!";
    guess.value = null;
  }
};

const restartGame = () => {
  feedback.value = null;
  game.resetGame();
};

const isGameActive = computed(() => !game.guessed && game.attemptsLeft > 0);
const hasGuessed = computed(() => game.guessed);
</script>

<template>
  <div class="game">
    <h2>Угадайте число</h2>
    <p>Осталось попыток: {{ game.attemptsLeft }}</p>
    <div v-if="isGameActive">
      <input v-model="guess" type="number" placeholder="Введите число" />
      <button type="button" @click="handleGuess">Угадать</button>
      <p v-if="feedback">{{ feedback }}</p>
    </div>
    <div v-else-if="hasGuessed">
      <h3>Поздравляем! Вы угадали число!</h3>
      <button type="button" @click="restartGame">Играть снова</button>
    </div>
    <div v-else>
      <h3>Увы, вы не угадали. Попробуйте снова!</h3>
      <button type="button" @click="restartGame">Играть снова</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game {
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin: 1rem 0;
    padding: 0.5rem;
    font-size: 1.2rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
}
</style>
