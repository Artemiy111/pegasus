<template>
  <div class="body-container">
    <section>
      <div class="payments">
        <div class="payments-information">
          <h2>Как оплатить путёвку?</h2>
          <p>
            Вы можете произвести оплату вашего тура разными способами. Мы работаем с большинством
            платежных систем России и СНГ.
          </p>
          <h3>Картой на сайте</h3>
          <p>
            При наличии личного кабинета, у вас есть возможность оплатить картой любого банка
            работающего в России. Также мы принимаем карты UnionPay и стран СНГ.
          </p>
          <h3>В офисе</h3>
          <p>Вы можете заключить договор на тур и оплатить любым удобным способом у нас в офисе.</p>
          <h3>Кредит, рассрочка</h3>
          <p>
            Мы можем выдать вам рассрочку от нашей компании до 2 лет. Для заключения договора
            рассрочки необходимо приехать в наш офис.
          </p>
          <p>
            Возможно одобрение кредита со стороны банка, для этого тоже нужно приехать в офис, где
            мы составим заявку в банк и получим решение.
          </p>
          <h3>Яндекс Сплит</h3>
          <p>Вы можете оплатить путёвку по частям, используя сервис "Яндекс Сплит".</p>
          <p>
            Такой вариант оплаты доступен в
            <a href="/lk" style="color: blue">личном кабинете</a>.
          </p>
        </div>
        <div class="payments-picture">
          <img
            src="https://avatars.mds.yandex.net/i?id=cfc0fa3837d6e0556019fae86bee4bdb_l-5895977-images-thumbs&n=13"
          />
        </div>
      </div>
      <div class="yandex-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=206089821260"
          width="560"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </section>
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
  </div>
</template>

<style scoped>
.payments {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
}
.payments-information {
  width: 50%;
}
.payments-information h1,
h2 {
  text-align: left;
}
.payments-information a {
  font-size: 15px;
  color: black;
  text-decoration: none;
}
.payments-information a:hover {
  text-decoration: underline;
}
.payments-picture img {
  width: 400px;
  height: 250px;
  margin-top: 20px;
}
</style>
