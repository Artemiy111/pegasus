<template>
  <section>
    <div class="callback-form-container">
      <h2 style="text-align: center">
        Свяжитесь с нами и мы вас проконсультируем по вопросам оплаты
      </h2>
      <div class="callback-form">
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <input type="mail" placeholder="Почта" />
          <textarea placeholder="Ваш вопрос"></textarea>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.callback-form-container {
  width: 50%;
  margin: 10px auto;
}

.callback-form {
  padding: 10px;
  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.callback-form input,
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
.callback-form textarea {
  resize: none;
  height: 100px;
}
.callback-form button {
  display: flex;
  align-items: center;

  width: 100px;
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
.callback-form button:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.callback-form button:active {
  background-color: #448119;
}
</style>
