import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    targetNumber: Math.floor(Math.random() * 100) + 1, // Загаданное число
    attemptsLeft: 10, // Количество оставшихся попыток
    guessed: false, // Угадано или нет
  }),
  actions: {
    makeGuess(guess: number) {
      if (guess === this.targetNumber) {
        this.guessed = true;
      } else {
        this.attemptsLeft -= 1;
      }
    },
    resetGame() {
      this.targetNumber = Math.floor(Math.random() * 100) + 1;
      this.attemptsLeft = 10;
      this.guessed = false;
    },
  },
});
