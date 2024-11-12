<template>
  <footer>
    <div class="footer">
      <div class="footer-text">
        PEGAS Touristik — ведущий оператор туристических услуг в РФ и СНГ. © 2024
      </div>
      <div class="footer-text">
        Использование текстов, фотографий и иных результатов интеллектуальной деятельности с сайта
        pegast.ru допускается только с письменного разрешения компании PEGAS Touristik.
      </div>
      <div class="footer-label">
        <NuxtLink to="https://srtrf.ru/" external target="_blank">
          <img
            src="https://s01.cdn-pegast.net/get/75/59/1c/ee548320583a88939c056b5d24782fe28b179d3edfb57c92bbeac18ebc/srtsf+1.png"
          />
        </NuxtLink>
        <NuxtLink to="https://ev.tourism.gov.ru/" external target="_blank">
          <img
            src="https://s01.cdn-pegast.net/get/15/5a/aa/581b88b090f0d7063c63aa9c7859f1c4698e2991175e4bb9fbd60e3531/electronic_booking.png"
          />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  height: 90px;
  margin-top: 15px;

  background-color: rgb(71 165 252);
}
.footer-text {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: auto;
  margin: 0 15px 0 15px;

  font-size: 15px;
  color: black;
}
.footer-label {
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: space-between;

  width: auto;
  margin-right: 35px;
}
</style>
