<template>
  <div class="body-container">
    <section>
      <div class="search">
        <form>
          <div class="search-container">
            <div class="search-where-form">
              <div>
                <p>Откуда</p>
                <select class="search-where" id="selectWhere">
                  <option selected>Москва</option>
                  <option>Санкт-Петербург</option>
                  <option>Казань</option>
                  <option>Севастополь</option>
                  <option>Нижний Новгород</option>
                  <option>Калуга</option>
                  <option>Великий Новгород</option>
                  <option>Ярославль</option>
                </select>
              </div>
              <div>
                <p>Куда</p>
                <select class="search-where" id="selectThere">
                  <option selected>Анталия</option>
                  <option>Пхукет</option>
                  <option>Бали</option>
                  <option>Гагры</option>
                  <option>Сочи</option>
                  <option>Анапа</option>
                  <option>Дубай</option>
                </select>
              </div>
            </div>
            <div class="search-date-form">
              <div>
                <p>Дата вылета</p>
                <input class="date-form" type="date" id="FirstDate" />
              </div>
              <div>
                <p>Дата возвращения</p>
                <input class="date-form" type="date" id="SecondDate" />
              </div>
            </div>

            <div class="search-tourist-form">
              <p>Туристы</p>
              <select id="selectPeople">
                <option selected>1 чел.</option>
                <option>2 чел.</option>
                <option>3 чел.</option>
                <option>4 чел.</option>
                <option>5 чел.</option>
                <option>6 чел.</option>
                <option>7 чел.</option>
              </select>
            </div>
            <div class="search-button">
              <button type="submit" id="searchBtn">Найти</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="tour-desc">
      <div class="tour-desc-container">
        <div class="tour-information">
          <h1>Swandor Hotels and Resort Topkapi Palace</h1>
          <img
            src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/f8/8f/60/8bc227e3e887b231a507b1ca110b2162a6196ccadeef225aad050e6829/65cc9ced2fdea.jpg"
          />
          <p>
            Дизайн отеля выдержан в стиле Великой Османской Империи и выполнен по образцу дворца
            Топкапы в Стамбуле. Отель расположен в 17 км от аэропорта, в 20 км от центра Антальи, на
            одном из красивейших пляжей средиземноморья - Кунду.
          </p>
        </div>
        <div class="tour-dates">
          <h3>Туры</h3>
          <div class="flight-object">
            <div class="flight-object-information">
              <p>
                <strong>
                  <svg
                    data-v-fa811888=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.75221 6.49557C3.75221 6.49557 12.5074 2.36183 13.1327 2.05183C14.2792 1.4835 15.7384 1.84518 15.9469 2.4652C16.1553 3.08522 15.7384 3.49863 14.9046 4.01534C14.0708 4.53206 11.7778 5.46214 11.7778 5.46214L9.48475 11.7661L9.17206 12.3861L7.92132 13.0062L7.8171 12.7995L8.33824 7.11563L6.77482 7.83903C6.77482 7.83903 5.94099 8.14909 4.4818 8.45908C3.02261 8.76907 2.57337 8.539 2.50147 8.45908L0 5.87551L0.729596 5.56548L3.75221 6.49557Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.54673 3.49866L6.14949 4.63543L3.64802 3.08529C3.43403 2.94152 3.4517 2.87558 3.64802 2.77526L4.58607 2.25854C4.75677 2.19063 4.86857 2.1864 5.10721 2.25854L8.54673 3.49866Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M1.00001 14.0999C0.50295 14.0999 0.100006 14.5029 0.100006 14.9999C0.100006 15.497 0.50295 15.8999 1.00001 15.8999H15C15.4971 15.8999 15.9 15.497 15.9 14.9999C15.9 14.5029 15.4971 14.0999 15 14.0999H1.00001Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Москва - Стамбул</strong
                >
              </p>
              <p style="font-size: 14px">09.11.2024 - 18.11.2024</p>
            </div>
            <div class="flight-object-price">
              <p>178493 р.</p>
            </div>
          </div>
          <div class="flight-object">
            <div class="flight-object-information">
              <p><strong>Казань - Стамбул</strong></p>
              <p>10.11.2024 - 19.11.2024</p>
            </div>
            <div class="flight-object-price">
              <p>198533 р.</p>
            </div>
          </div>
          <div class="flight-object">
            <div class="flight-object-information">
              <p><strong>Нижний Новгород - Стамбул</strong></p>
              <p>12.11.2024 - 21.11.2024</p>
            </div>
            <div class="flight-object-price">
              <p>208533 р.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tour-desc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tour-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  padding: 25px;

  font-size: 18px;
  /* margin: 25px auto; */
  background-color: azure;
  border: 1px solid gray;
  border-radius: 25px 25px 0px 0px;
}
.tour-information img {
  overflow: hidden;
  border-radius: 15px;
}
.tour-dates {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  padding: 25px;
  /* margin: 25px auto; */
  background-color: azure;
  border: 1px solid gray;
  border-radius: 0px 0px 25px 25px;
}
.flight-object {
  display: flex;
  flex-direction: row;

  width: 100%;
  margin: 15px;
  padding: 15px;

  background-color: rgb(219 219 219);
  border-radius: 15px;
}
.flight-object-information {
  width: 50%;
  text-align: left;
}
.flight-object-price {
  width: 100%;

  font-size: 19px;
  font-weight: bold;
  color: rgb(3 157 3);
  text-align: right;
}
</style>
