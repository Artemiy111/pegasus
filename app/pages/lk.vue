<script setup lang="ts">
const loginError = ref<string | null>(null)
const registerError = ref<string | null>(null)

const { user } = useUser()

const login = async (e: Event) => {
  loginError.value = null
  const fd = Object.fromEntries(new FormData(e.target as HTMLFormElement))
  try {
    const res = await $fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(fd),
    })
    user.value = res.user
  } catch (_e) {
    const e = _e as Error
    loginError.value = e.message
  }
}

const register = async (e: Event) => {
  loginError.value = null
  const fd = Object.fromEntries(new FormData(e.target as HTMLFormElement))
  try {
    const res = await $fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(fd),
    })
    user.value = res.user
  } catch (_e) {
    const e = _e as Error
    loginError.value = e.message
  }
}

const logout = async () => {
  await $fetch('/api/logout')
  user.value = null
}
</script>

<template>
  <main class="body-container">
    <section v-if="!user">
      <div class="lk-form-container">
        <div class="lk-form">
          <h2 style="text-align: center">Авторизация</h2>
          <form @submit.prevent="login">
            <input type="mail" name="email" placeholder="Почта" />
            <input type="password" name="password" placeholder="Пароль" />
            {{ loginError }}
            <button>Войти</button>
          </form>
        </div>
        <div class="lk-form">
          <h2 style="text-align: center">Регистрация</h2>
          <form @submit.prevent="register">
            <input type="text" name="name" placeholder="Ваше имя" />
            <input type="text" name="phone" placeholder="Номер телефона" />
            <input type="mail" name="email" placeholder="Почта" />
            <input type="password" name="password" placeholder="Пароль" />
            <input type="password" name="confirmPassword" placeholder="Повторите пароль" />
            {{ registerError }}
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </section>
    <section class="lk-form logged-in" v-else>
      <span>{{ user.name }}</span>
      <span>{{ user.phone }}</span>
      <span>{{ user.email }}</span>

      <button @click="logout">Выйти</button>
    </section>
  </main>
</template>

<style scoped>
.lk-form-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px auto;
}

.lk-form {
  width: 100%;
  margin: 15px;
  padding: 10px;

  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.lk-form input,
textarea {
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 30px;
  margin: 15px auto;

  font-size: 15px;
  color: #000000;
  text-align: center;

  border: 2px solid #a3a4a4;
  border-radius: 5px;

  transition: all 0.3s ease-in-out;
}
.lk-form textarea {
  resize: none;
  height: 100px;
}
.lk-form button {
  display: flex;
  align-items: center;
  /* width: 100px; */
  width: auto;
  height: 40px;
  margin: 0px auto;

  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  background-color: #60b822;
  border: none;
  border-radius: 17px;

  transition: all 0.3s ease-in-out;
}
.lk-form button:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.lk-form button:active {
  background-color: #448119;
}

.lk-error {
  color: red;
}

.logged-in {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 400px;
  margin-inline: auto;
}
</style>
