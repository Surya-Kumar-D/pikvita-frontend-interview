import { useEffect, useReducer } from 'react'
import getQuiz, { QuizResponse } from '../../api/getQuiz'
import Loader from '../../components/UI/Loader'
import ErrorPage from '../Error/ErrorPage'
import StartScreen from '../../components/UI/StartScreen'
import Question from '../../components/UI/Question'

type InitialState = {
  questions: QuizResponse
  status: 'loading' | 'ready' | 'error' | 'active' | 'finished'
}

const initialState: InitialState = {
  questions: [],
  status: 'loading',
}

export type Action =
  | {
      type: 'dataReceived'
      payload: QuizResponse
    }
  | {
      type: 'dataFailed'
      payload: string | Error
    }
  | {
      type: 'start'
    }

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      }
    case 'start':
      return { ...state, status: 'active' }
    default:
      throw new Error('Action Unknown')
  }
}

const Home = () => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState)
  const numQuestions = questions.length
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuiz()

        dispatch({
          type: 'dataReceived',
          payload: data,
        })
        console.log(data)
      } catch (error) {
        dispatch({
          type: 'dataFailed',
          payload: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }
    fetchData()
  }, [])
  return (
    <main className="w-[55rem]">
      {status === 'loading' && <Loader />}
      {status === 'error' && <ErrorPage />}
      {status === 'ready' && <StartScreen dispatch={dispatch} numQuestions={numQuestions} />}
      {status === 'active' && <Question />}
    </main>
  )
}

export default Home
