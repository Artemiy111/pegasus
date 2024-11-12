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

    <section class="tours-catalogue">
      <h1>Лучшие туры от ПЕГАС</h1>
      <div class="tours-catalogue-container">
        <NuxtLink to="/tour">
          <div class="tour-obj">
            <div class="tour-obj-picture">
              <img
                src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/f8/8f/60/8bc227e3e887b231a507b1ca110b2162a6196ccadeef225aad050e6829/65cc9ced2fdea.jpg"
              />
            </div>
            <div class="tour-obj-body">
              <div class="tour-price-info">
                <p class="tour-price">От 170000р</p>
                <p>Вылет с 09.11</p>
              </div>
              <div class="tour-info">
                <p class="tour-name">Swandor Hotels and Resort Topkapi Palace</p>
                <p class="tour-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Турция, Анталия
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
        <a href="#">
          <div class="tour-obj">
            <div class="tour-obj-picture">
              <img
                src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/71/35/da/302f67d2133a97d5aa82ff4976ae00dc7db7a253b3664a57f822537336/5dd63bd47391d.jpg"
              />
            </div>
            <div class="tour-obj-body">
              <div class="tour-price-info">
                <p class="tour-price">От 294534р</p>
                <p>Вылет с 24.11</p>
              </div>
              <div class="tour-info">
                <p class="tour-name">Patong Bay Hill Resort & SPA</p>
                <p class="tour-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Тайланд, Пхукет
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div class="tour-obj">
            <div class="tour-obj-picture">
              <img
                src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/ef/6e/dc/9c2bcf7b39dbae064b070d877f2d781586a0a1f86011e9e27b0564b93d/6059b26402713.jpg"
              />
            </div>
            <div class="tour-obj-body">
              <div class="tour-price-info">
                <p class="tour-price">От 72000р</p>
                <p>Вылет с 10.11</p>
              </div>
              <div class="tour-info">
                <p class="tour-name">Абаата Гагра отель</p>
                <p class="tour-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Россия, Абхазия
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div class="tour-obj">
            <div class="tour-obj-picture">
              <img
                src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/17/e0/61/44a022346535a018ec0d808f2a2c5c1e75092af96e601c73ef0d3c87c4/651c671564d25.jpg"
              />
            </div>
            <div class="tour-obj-body">
              <div class="tour-price-info">
                <p class="tour-price">От 289000р</p>
                <p>Вылет с 21.04</p>
              </div>
              <div class="tour-info">
                <p class="tour-name">Sunsuri Nai Harn Phuket</p>
                <p class="tour-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Тайланд, Пхукет
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div class="tour-obj">
            <div class="tour-obj-picture">
              <img
                src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/4d/27/97/208ff55c4f18e77daf8c2cbe40f8700db73f12273f3d00e1bc2611b5f3/65cc68c175ccf.jpg"
              />
            </div>
            <div class="tour-obj-body">
              <div class="tour-price-info">
                <p class="tour-price">От 37000р</p>
                <p>Вылет с 21.11</p>
              </div>
              <div class="tour-info">
                <p class="tour-name">Ellion Мечта отель</p>
                <p class="tour-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Россия, Сочи
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div class="tour-obj">
            <div class="tour-obj-picture">
              <img
                src="https://pic-h.cdn-pegast.net/getimage-h/thumbh338/be/54/ec/d1b9293fe538bdbeaaec595206633eb3bfb614ab2fc5caef7bdddd340d/5cae138602b86.jpg"
              />
            </div>
            <div class="tour-obj-body">
              <div class="tour-price-info">
                <p class="tour-price">От 258000р</p>
                <p>Вылет с 01.12</p>
              </div>
              <div class="tour-info">
                <p class="tour-name">Premier Le Reve Hotel & Spa</p>
                <p class="tour-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.9996 6.99997C8.82803 6.99997 9.4996 6.3284 9.4996 5.49997C9.4996 4.67154 8.82803 3.99997 7.9996 3.99997C7.17118 3.99997 6.4996 4.67154 6.4996 5.49997C6.4996 6.3284 7.17118 6.99997 7.9996 6.99997Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99961 0.599976C5.29341 0.599976 3.09961 2.79378 3.09961 5.49998C3.09961 6.78486 3.40319 7.80098 4.07308 9.11273C4.54044 10.0279 5.21294 11.1358 6.11229 12.6174C6.45149 13.1762 6.82296 13.7882 7.22787 14.463L7.99961 15.7493L8.77135 14.463C9.17626 13.7882 9.54773 13.1762 9.88693 12.6174C10.7863 11.1358 11.4588 10.0279 11.9261 9.11273C12.596 7.80098 12.8996 6.78486 12.8996 5.49998C12.8996 2.79378 10.7058 0.599976 7.99961 0.599976ZM4.89961 5.49998C4.89961 3.78789 6.28753 2.39998 7.99961 2.39998C9.71169 2.39998 11.0996 3.78789 11.0996 5.49998C11.0996 6.42423 10.9032 7.15811 10.3231 8.29408C9.88787 9.1463 9.26671 10.1697 8.38815 11.6171C8.26386 11.8219 8.1344 12.0352 7.99961 12.2576C7.86482 12.0352 7.73538 11.8219 7.6111 11.6172C6.73254 10.1697 6.11135 9.1463 5.67614 8.29408C5.09603 7.15811 4.89961 6.42423 4.89961 5.49998Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Египет, Хургада
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tours-catalogue-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* height: 500px; */
  width: inherit;
  padding: 15px;

  background-color: azure;
  border: 1px solid #4b4d4d;
  border-radius: 15px;
}
.tours-catalogue-container a:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.tours-catalogue-container a {
  overflow: hidden;

  width: 300px;
  height: auto;
  margin: 10px 0px;

  color: rgb(0 0 0);
  text-decoration: none;

  border: 1px solid rgb(213 213 213);
  border-radius: 15px;

  transition: all 0.3s ease-in-out;
}
.tour-obj {
  width: 300px;
  height: auto;
  border-radius: 15px;
}
.tour-obj-picture {
  width: 300px;
  height: 150px;
}
.tour-obj-picture img {
  width: 300px;
  height: 150px;
}
.tour-obj-body p {
  margin: 0px;
  padding: 5px;
}
.tour-price-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 15px;
  font-weight: bold;

  background-color: rgb(227 244 248);
}
.tour-price {
  font-size: 19px;
  font-weight: bold;
  color: green;
}
.tour-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.tour-name {
  font-size: 15px;
  font-weight: bold;
}
.tour-location {
  font-size: 13px;
}
.tour-location svg {
  color: blue;
}
</style>
