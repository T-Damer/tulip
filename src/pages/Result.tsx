import { useLingui } from '@lingui/react/macro'
import patientsDataStore from 'atoms/patientsDataStore'
import TransitionWrapper from 'components/TransitionWrapper'
import getResult from 'helpers/getResult'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router'

export default function ResultPage() {
  const navigate = useNavigate()
  const [atom, setAtom] = useAtom(patientsDataStore)
  const { t } = useLingui()
  const sum = atom.map((item) => item.answerId).reduce((a, b) => a + b, 0)
  const result = getResult(sum)
  // TODO: add refresh and save/send result button

  return (
    <TransitionWrapper className="z-10 flex items-center justify-center overflow-auto">
      <div className="flex h-5/6 w-88 flex-col gap-y-3 overflow-y-scroll rounded-md bg-white p-8 text-black">
        <h1 className="font-black text-2xl">{t`Результат`}</h1>
        <h2 className="font-bold text-lg">{result.title}</h2>
        <p>{result.description}</p>
        <div className="flex flex-col items-center gap-2">
          <button
            className="btn btn-lg rounded-3xl"
            onClick={() => {
              setAtom([])
              navigate('/')
            }}
          >{t`Пройти заново`}</button>
          <button className="btn btn-primary btn-lg rounded-3xl">{t`Сохранить и отправить`}</button>
          <button className="btn btn-xl btn-accent rounded-3xl py-8 leading-6">{t`Обратиться к специалисту`}</button>
        </div>
      </div>
    </TransitionWrapper>
  )
}
