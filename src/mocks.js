import {
  nanoid,
} from "nanoid";

export const getMockReviews = () => ([
  {
    name: `Борис Иванов`,
    dignity: `мощность, внешний вид`,
    limitations: `Слабые тормозные колодки (пришлось заменить)`,
    rating: `3`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам.
    Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
    id: nanoid(),
    date: new Date(`2021-08-27T09:54`).toISOString(),
  },
  {
    name: `Марсель Исмагилов`,
    dignity: `Cтиль, комфорт, управляемость`,
    limitations: `Дорогой ремонт и обслуживание`,
    rating: `3`,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые.
    Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль.
    Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
    id: nanoid(),
    date: new Date(`2021-06-18T09:54`).toISOString(),
  },
]);

export const getMockSlides = () => ([
  {
    fullSize: `img/slide-1-desktop.jpg`,
    thumbnail: `img/thumbnail-slide-1-desktop.jpg`,
    description: `Описание первого слайда`,
    id: nanoid(),
  },
  {
    fullSize: `img/slide-2-desktop.jpg`,
    thumbnail: `img/thumbnail-slide-2-desktop.jpg`,
    description: `Описание второго слайда`,
    id: nanoid(),
  },
  {
    fullSize: `img/slide-3-desktop.jpg`,
    thumbnail: `img/thumbnail-slide-3-desktop.jpg`,
    description: `Описание третьего слайда`,
    id: nanoid(),
  },
]);
