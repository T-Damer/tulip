import 'swiper/css'
import 'swiper/css/effect-cards'

import patientsDataStore from 'atoms/patientsDataStore'
import { useAtom } from 'jotai'
import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router'
import { A11y, Controller, EffectCards } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { questions } from 'types/Question'
import QuestionCard from './QuestionCard'

export default function QuestionSwiper() {
  const navigate = useNavigate()
  const [atom, setAtom] = useAtom(patientsDataStore)
  const swiperRef = useRef<SwiperRef>(null)

  const handleAnswer = useCallback(
    (value: number, questionIndex: number) => {
      setAtom((prev) => {
        const newAnswers = [...prev]
        const existingAnswerIndex = newAnswers.findIndex(
          (a) => a.questionId === questionIndex
        )

        if (existingAnswerIndex >= 0) {
          newAnswers[existingAnswerIndex] = {
            questionId: questionIndex,
            answerId: Number(value),
          }
        } else {
          newAnswers.push({
            questionId: questionIndex,
            answerId: Number(value),
          })
        }
        return newAnswers
      })

      setTimeout(() => {
        if (questionIndex < questions.length - 1) {
          swiperRef.current?.swiper.slideNext()
        }
      }, 100)
    },
    [setAtom]
  )

  return (
    <Swiper
      ref={swiperRef}
      className="h-124 w-88 sm:w-96"
      modules={[EffectCards, A11y, Controller]}
      onReachEnd={() => navigate('/result')}
      effect="cards"
      allowTouchMove={false}
      noSwiping={true}
      simulateTouch={false}
      allowSlidePrev={true}
    >
      {questions.map((question, index) => (
        <SwiperSlide key={index} className="w-full rounded-md bg-white p-8">
          <QuestionCard
            selectedAnswerId={
              atom.find((a) => a.questionId === index)?.answerId
            }
            question={question}
            showBackButton={index > 0}
            onBack={() => swiperRef.current?.swiper.slidePrev()}
            onClick={(value) => handleAnswer(value, index)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
