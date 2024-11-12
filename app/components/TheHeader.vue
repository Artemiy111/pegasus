<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <img src="/images/logo.png" width="324px" height="70px" />
        </NuxtLink>

        <div class="navbar-wrap">
          <ul class="navbar-menu">
            <li><NuxtLink to="/">Главная</NuxtLink></li>
            <li><NuxtLink to="/tours">Туры</NuxtLink></li>
            <li><NuxtLink to="/payments">Оплата</NuxtLink></li>
            <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
            <li><NuxtLink to="/about">О нас</NuxtLink></li>
          </ul>
          <NuxtLink to="/lk" class="lk">Личный кабинет</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  margin-top: 25px;

  background-color: white;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
}
.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
}
.navbar-menu {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}
.navbar-menu li {
  display: inline-block;
}
.navbar-menu li a {
  display: inline-block;

  padding: 10px;

  font-size: 18px;
  color: #000;
  text-decoration: none;

  opacity: 0.7;

  transition: all 0.3s ease-in-out;
}
.navbar-menu li a:hover {
  color: rgb(0 0 0);
  opacity: 1;
}
.navbar-wrap {
  display: flex;
  flex-flow: row nowrap;
  /* margin-right: 40px; */
}
.navbar-brand {
  width: 50%;
}

.lk {
  display: inline-block;

  margin-right: 45px;
  margin-left: 30px;
  padding: 10px 20px;

  font-size: 20px;
  color: #ffffff;
  text-decoration: none;

  opacity: 0.7;
  background-color: rgb(0 101 195);
  border-radius: 100px;

  transition: all 0.3s ease-in-out;
}
.lk:hover {
  opacity: 1;
}
</style>
