<template>
  <main class="body-container">
    <section>
      <div class="lk-form-container">
        <div class="lk-form">
          <h2 style="text-align: center">Авторизация</h2>
          <form>
            <input type="mail" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <button>Войти</button>
          </form>
        </div>
        <div class="lk-form">
          <h2 style="text-align: center">Регистрация</h2>
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Номер телефона" />
            <input type="mail" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <input type="password" placeholder="Повторите пароль" />
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
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
</style>
