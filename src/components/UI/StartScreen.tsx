import { type Action } from '../../pages/Home/Home'

function StartScreen({
  numQuestions,
  dispatch,
}: {
  numQuestions: number
  dispatch: React.Dispatch<Action>
}) {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <h2 className="text-[36px] mb-[20px]">Welcome to the Javascript Quiz!</h2>
      <h3 className="text-[24px] font-[600] mb-[40px]">
        {numQuestions} question to test your javascript knowledge
      </h3>
      <button
        onClick={() => dispatch({ type: 'start' })}
        className="text-[20px] block text-inherit px-[12px] py-[24px] cursor-pointer rounded-[100px] transition-all float-right"
      >
        Let's start
      </button>
    </div>
  )
}

export default StartScreen
