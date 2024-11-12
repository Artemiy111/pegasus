import slugify from 'slugify'
import {
  type CityNew,
  type CountryNew,
  type FlightNew,
  type ReviewNew,
  type TourNew,
  type UserNew,
  cities,
  countries,
  flights,
  reviews,
  tours,
  users
} from './schema'
import { db } from '.'

import { hash } from 'argon2'

const countriesData: CountryNew[] = [
  { id: 1, name: 'Россия', },
  { id: 2, name: 'Украина', },
  { id: 3, name: 'Беларусь', },
  { id: 4, name: 'Казахстан', },
  { id: 5, name: 'Грузия', },
  { id: 6, name: 'Австралия', },
  { id: 7, name: 'ОАЭ' },
  { id: 8, name: 'Индия', },
  { id: 9, name: 'США', },
  { id: 10, name: 'Малайзия', },
  { id: 11, name: 'Франция', },
  { id: 12, name: 'Нидерланды', },
  { id: 13, name: 'Польша', },
  { id: 14, name: 'Великобритания', },
  { id: 15, name: 'Испания', },
  { id: 16, name: 'Турция', },
  { id: 17, name: 'Болгария', },
  { id: 18, name: 'Китай', },
  { id: 19, name: 'Румыния', },
  { id: 20, name: 'Германия', },
  { id: 21, name: 'Тайланд', },
  { id: 22, name: 'Индонезия', },
  { id: 23, name: 'Абхазия', },
  { id: 24, name: 'Египет', },
] as const

const citiesData: CityNew[] = [
  { id: 1, name: 'Москва', countryId: 1 },
  { id: 2, name: 'Санкт-Петербург', countryId: 1 },
  { id: 3, name: 'Казань', countryId: 1 },
  { id: 4, name: 'Уфа', countryId: 1 },
  { id: 5, name: 'Нижний Новгород', countryId: 1 },
  { id: 6, name: 'Самара', countryId: 1 },
  { id: 7, name: 'Калининград', countryId: 1 },
  { id: 8, name: 'Калуга', countryId: 1 },
  { id: 10, name: 'Ярославль', countryId: 1 },
  { id: 11, name: 'Великий Новгород', countryId: 1 },

  { id: 12, name: 'Анталия', countryId: 16 },
  { id: 13, name: 'Пхукет', countryId: 21 },
  { id: 14, name: 'Бали', countryId: 22 },
  { id: 15, name: 'Гагры', countryId: 23 },
  { id: 16, name: 'Ханой', countryId: 23 },
  { id: 17, name: 'Сочи', countryId: 23 },
  { id: 18, name: 'Анапа', countryId: 1 },
  { id: 19, name: 'Дубаи', countryId: 1 },
  { id: 20, name: 'Хургада', countryId: 24 },
]

const _toursData: Omit<TourNew, 'slug'>[] = [
  {
    cityId: 12,
    name: 'Swandor Hotels and Resort Topkapi Palace',
    description: 'Дизайн отеля выдержан в стиле Великой Османской Империи и выполнен по образцу дворца Топкапы в Стамбуле. Отель расположен в 17 км от аэропорта, в 20 км от центра Антальи, на одном из красивейших пляжей средиземноморья - Кунду. ',
    imageUrl: 'https://pic-h.cdn-pegast.net/getimage-h/thumbh338/f8/8f/60/8bc227e3e887b231a507b1ca110b2162a6196ccadeef225aad050e6829/65cc9ced2fdea.jpg'
  },
  {
    cityId: 13,
    name: 'Patong Bay Hill Resort & SPA',
    imageUrl: 'https://pic-h.cdn-pegast.net/getimage-h/thumbh338/71/35/da/302f67d2133a97d5aa82ff4976ae00dc7db7a253b3664a57f822537336/5dd63bd47391d.jpg'
  },
  {
    cityId: 15,
    name: 'Абаата Гагра отель',
    imageUrl: 'https://pic-h.cdn-pegast.net/getimage-h/thumbh338/ef/6e/dc/9c2bcf7b39dbae064b070d877f2d781586a0a1f86011e9e27b0564b93d/6059b26402713.jpg'
  },
  {
    cityId: 13,
    name: 'Sunsuri Nai Harn Phuket',
    imageUrl: 'https://pic-h.cdn-pegast.net/getimage-h/thumbh338/17/e0/61/44a022346535a018ec0d808f2a2c5c1e75092af96e601c73ef0d3c87c4/651c671564d25.jpg'
  },
  {
    cityId: 17,
    name: 'Ellion Мечта отель',
    imageUrl: 'https://pic-h.cdn-pegast.net/getimage-h/thumbh338/4d/27/97/208ff55c4f18e77daf8c2cbe40f8700db73f12273f3d00e1bc2611b5f3/65cc68c175ccf.jpg'
  },
  {
    cityId: 20,
    name: 'Premier Le Reve Hotel & Spa',
    imageUrl: 'https://pic-h.cdn-pegast.net/getimage-h/thumbh338/be/54/ec/d1b9293fe538bdbeaaec595206633eb3bfb614ab2fc5caef7bdddd340d/5cae138602b86.jpg'
  }
]

const toursData: TourNew[] = _toursData.map((tour, i) => ({
  ...tour,
  slug: slugify(tour.name),
  id: i + 1,
}))


const flightsData: FlightNew[] = [
  {
    tourId: 1,
    departureCityId: 1,
    departureDate: '2022-01-01',
    arrivalDate: '2022-01-02',
    price: 120000,
  },
  {
    tourId: 1,
    departureCityId: 2,
    departureDate: '2022-01-02',
    arrivalDate: '2022-01-03',
    price: 100000,
  },
  {
    tourId: 1,
    departureCityId: 3,
    departureDate: '2022-01-03',
    arrivalDate: '2022-01-04',
    price: 140000,
  },
]

const usersData: UserNew[] = [
  { id: 1, name: 'Дмитрий', email: 'dim@dim.com', passwordHash: await hash('12345678'), phone: '+78003353535' },
  { id: 2, name: 'Иван', email: 'ivan@ivan.com', passwordHash: await hash('987654321'), phone: '+79503358435' },
  { id: 3, name: 'Артемий', email: 'art@art.com', passwordHash: await hash('00000000'), phone: '+79464358439' },
]

const reviewsData: ReviewNew[] = [
  {
    id: 1,
    userId: 1,
    arrivalCityId: 15,
    originCity: 'Ульяновск',
    text: `
<p>
Недавно вернулись из потрясающей поездки в Гагры, и эмоции до сих пор переполняют! Этот
курорт удивляет своей красотой: величественные горы, лазурное море и зелень тропических
растений создают атмосферу настоящего рая.
</p>
<p>
Особую благодарность хочу выразить нашему туроператору, который организовал нашу поездку
на высшем уровне. Все было продумано до мелочей: комфортный трансфер, уютные гостиницы и
увлекательные экскурсии по самым живописным местам. Гид был настоящим знатоком региона,
который делился интересными историями и местными традициями.
</p>
<p>
Если вы хотите насладиться великолепием природы и гостеприимством, Гагры — идеальный
выбор, а с этим туроператором ваше путешествие станет поистине незабываемым!
</p>
    `,
  },
  {
    id: 2,
    userId: 2,
    arrivalCityId: 14,
    originCity: 'Москва',
    text: `
<p>
Недавно вернулись с незабываемой поездки на Бали, и не могу не поделиться впечатлениями!
Это место просто волшебное: белоснежные пляжи, зеленые рисовые террасы и удивительная
культура.
</p>
<p>
Особую благодарность хочу выразить нашему туроператору, который организовал все на
высшем уровне. Каждая деталь была продумана до мелочей: от комфортного трансфера до
увлекательных экскурсий. Гид был настоящим профессионалом, который делился не только
знаниями, но и своей любовью к этому прекрасному острову.
</p>
<p>
Если вы мечтаете о настоящем рае на земле, обязательно выбирайте Бали и доверяйтесь
этому замечательному туроператору! Вы не пожалеете!
</p>
    `
  },
  {
    id: 3,
    userId: 3,
    arrivalCityId: 12,
    originCity: 'Стерлитамак',
    text: `
<p>
Недавно вернулись из великолепной поездки в Анталию, и впечатления просто потрясающие!
Этот курорт поразил нас своей красотой: чистейшие пляжи, прозрачное море и живописные
горные пейзажи создают атмосферу настоящего отдыха.
</p>
<p>
Особую благодарность хочу выразить нашему туроператору, который организовал все на
высшем уровне. Каждая деталь была учтена: от комфортного трансфера до разнообразных
экскурсий по историческим и культурным достопримечательностям. Гид был настоящим
профессионалом, который делился интересными фактами и местными легендами.
</p>
<p>
Если вы мечтаете о солнечном отдыхе с комфортом и интересными приключениями, Анталия —
идеальный выбор, а с этим туроператором ваше путешествие станет поистине незабываемым!
</p>
    `
  }
]

const seed = async () => {
  console.log('Seeding database...')
  await db.delete(countries)
  await db.delete(cities)
  await db.delete(tours)
  await db.delete(reviews)
  await db.delete(flights)
  await db.delete(users)
  await db.delete(reviews)

  await db.insert(countries).values(countriesData)
  await db.insert(cities).values(citiesData)
  await db.insert(tours).values(toursData)
  await db.insert(flights).values(flightsData)
  await db.insert(users).values(usersData)
  await db.insert(reviews).values(reviewsData)

  console.log('Database seeded!')
}
seed()