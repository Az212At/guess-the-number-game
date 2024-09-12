<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav>
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main class="content">
    <RouterView />
  </main>
  <footer class="footer">
    <p>2024 Игра "Угадай число". Все права защищены.</p>
  </footer>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  text-align: center;

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 0 1rem;
    }

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.content {
  flex: 1;
  padding: 2rem;
}

.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
