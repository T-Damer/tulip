import { useLingui } from '@lingui/react/macro'
import isDocStore from 'atoms/isDocStore'
import patientsDataStore from 'atoms/patientsDataStore'
import TransitionWrapper from 'components/TransitionWrapper'
import useQuestions from 'helpers/hooks/useQuestions'
import useResult from 'helpers/hooks/useResult'
import saveObjectAsXlsx from 'helpers/saveObjectAsXlsx'
import { useAtom, useAtomValue } from 'jotai'
import { useNavigate } from 'react-router'

const doctorLink = 'https://www.gosuslugi.ru/10700/self/specialty'

export default function ResultPage() {
  const navigate = useNavigate()
  const [atom, setAtom] = useAtom(patientsDataStore)
  const isDoc = useAtomValue(isDocStore)
  const { t } = useLingui()
  const sum = atom.map((item) => item.answerId).reduce((a, b) => a + b, 0)
  const questions = useQuestions()
  const result = useResult(sum)

  return (
    <TransitionWrapper className="z-10 flex items-center justify-center overflow-auto">
      <div className="mx-2 flex h-5/6 w-full max-w-prose flex-col gap-y-3 overflow-y-scroll rounded-md bg-white p-8 text-black">
        <h1 className="font-black text-2xl">{t`Результат`}</h1>
        <h2 className="font-bold text-lg">{result.title}</h2>
        <p>{isDoc ? result.docDescription : result.description}</p>

        {isDoc ? (
          <>
            <h2 className="font-bold text-lg">{t`Лечение`}</h2>
            <p>{result.treatment}</p>
          </>
        ) : null}

        <div className="flex flex-col items-center gap-2">
          <button
            className="btn btn-lg rounded-3xl"
            onClick={() => {
              setAtom([])
              navigate('/')
            }}
          >{t`Пройти заново`}</button>

          <button
            className="btn btn-primary btn-lg rounded-3xl"
            onClick={() =>
              saveObjectAsXlsx(t`Результат`, atom, result, questions)
            }
          >{t`Сохранить и отправить`}</button>

          {!isDoc && sum > 10 ? (
            <button
              className="btn btn-xl btn-accent rounded-3xl py-8 leading-6"
              onClick={() => window.open(doctorLink, '_blank')}
            >{t`Обратиться к специалисту`}</button>
          ) : null}
        </div>
      </div>
    </TransitionWrapper>
  )
}
