import 'swiper/css'
import 'swiper/css/effect-cards'

import { A11y, EffectCards, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Question from 'types/Question'
import QuestionCard from './QuestionCard'

const questions: Question[] = [
  {
    title: 'Возраст',
    description: 'Сколько вам полных лет?',
    answers: { 0: '21-29 лет', 1: 'До 19 лет', 2: 'Старше 35 лет' },
  },
  {
    title: 'Гемоглобин',
    description: 'Сколько у вас гемоглобина крови?',
    answers: { 0: 'Более 100 г/л', 1: '99,0 – 70,0 г/л', 2: ' Менее 69,0 г/л' },
  },
  {
    title: 'ИМТ',
    description: 'Какой ваш индекс массы тела?',
    answers: {
      0: 'от 18,5 до 25 кг/м²',
      1: 'от 25 до 30 кг/м²',
      2: 'Более 30 кг/м²',
    },
  },
  {
    title: 'Заболевания печени',
    description: 'Какие заболевания у вас есть?',
    answers: {
      0: 'Нет',
      1: 'Заболевание без нарушения функции',
      2: 'Заболевания с нарушением функции',
    },
  },
  {
    title: 'Многоплодие',
    description: 'Многоплодие с массой плодов в сумме',
    answers: {
      0: 'Менее 4500 грамм',
      1: 'От 4500 до 5000 грамм',
      2: 'Более 5000 грамм',
    },
  },
  {
    title: 'Вес плода',
    description: 'Вес плода',
    answers: {
      0: 'До 4000 грамм',
      1: 'От 4000 до 4500 грамм',
      2: 'Более 4500 грамм',
    },
  },
  {
    title: 'Многоводие',
    description: 'Объем жидкости',
    answers: {
      0: 'До 1500 мл',
      1: 'От 1500 до 2000 мл',
      2: 'Более 2000 мл',
    },
  },
  {
    title: 'Многорожавшие',
    description: 'Количество родов',
    answers: { 0: 'До 3 родов', 1: 'От 3 до 4 родов', 2: 'Более 4 родов' },
  },
  {
    title: 'Кровотечения в родах',
    description: 'Любого характера',
    answers: {
      0: 'Нет',
      1: 'При предыдущих беременностях',
      2: 'При последних родах',
    },
  },
  {
    title: 'Миома или рубец на матке',
    description: 'В анамнезе',
    answers: {
      0: 'Нет',
      1: 'Единичный узел до 5 см',
      2: 'Множественные узлы более 5см или после кесарева сечения',
    },
  },
  {
    title: 'Аборты или преждевременные роды в анамнезе',
    description: '',
    answers: { 0: 'Нет', 1: '2-3', 2: '3 и более' },
  },
  {
    title: 'Гипертензивный синдром, преэклампсия',
    description: '',
    answers: {
      0: 'Отсутствуют',
      1: 'Легкой степени',
      2: 'Средней или тяжелой степени',
    },
  },
  {
    title: 'ПОНРП',
    description: 'Преждевременная отслойка нормально расположенной плаценты',
    answers: {
      0: 'Отсутствует',
      1: 'Не прогрессирующая',
      2: 'Прогрессирующая',
    },
  },
  {
    title: 'Заболевания сердечно-сосудистой системы',
    description: '',
    answers: {
      0: 'Нет',
      1: 'Имеются, но без недостаточности кровообращения',
      2: 'С нарушением функции',
    },
  },
  {
    title: 'Заболевания почек',
    description: '',
    answers: {
      0: 'Нет, либо бессимптомная бактериурия',
      1: 'Без нарушения функции',
      2: 'С нарушением функции',
    },
  },
  {
    title: 'Воспалительные заболевания  половых органов',
    description: '',
    answers: {
      0: 'Отсутствуют',
      1: 'Хронический эндометрит',
      2: 'Острый эндометрит',
    },
  },
  {
    title: 'Перенесенная вирусная инфекция дыхательных путей',
    description: '',
    answers: {
      0: 'Без эндотелиальной дисфункции',
      1: 'С признаками эндотелиальной дисфункции легкой степени',
      2: 'С признаками  выраженной эндотелиальной дисфункции',
    },
  },
  {
    title: 'Объем тромбоцитов',
    description: 'Клеток на литр крови',
    answers: {
      0: '180–320 × 10⁹',
      1: '180-150 × 10⁹',
      2: 'Менее 150 × 10⁹',
    },
  },
  {
    title: 'АЧТВ',
    description: 'Активированное частичное тромбопластиновое время',
    answers: {
      0: 'Норма',
      1: 'До 33 секунд',
      2: 'Более 33 секунд',
    },
  },
  {
    title: 'Фибриноген',
    description: 'Грамм на литр крови',
    answers: { 0: '400 – 300', 1: '300 - 200', 2: 'Менее 200' },
  },
  {
    title: 'Варикозная болезнь',
    description: '',
    answers: {
      0: 'Нет',
      1: 'Без нарушения кровообращения',
      2: 'С нарушением кровообращения',
    },
  },
]

export default function QuestionSwiper() {
  // TODO: don't allow question skipping
  // TODO: save result in localstorage atom
  // TODO: add result after no questions left

  return (
    <Swiper
      className="h-96 w-96"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Mousewheel, EffectCards, A11y]}
      effect="cards"
      grabCursor={true}
      mousewheel
    >
      {questions.map((question, index) => (
        <SwiperSlide
          key={index}
          className="flex h-64 w-80 flex-col gap-4 rounded-md bg-white p-4 drop-shadow-2xl"
        >
          <QuestionCard question={question} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
