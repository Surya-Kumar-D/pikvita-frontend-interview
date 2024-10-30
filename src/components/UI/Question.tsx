import { type Question } from '../../api/getQuiz'

type AnswerKeys = keyof Question['answers']

function Question({ question }: { question: Question }) {
  console.log(question)
  return (
    <div>
      <h4 className="text-[22px] font-[600] mb-[24px]">{question.question}</h4>
      <div className="flex flex-col gap-[12px] mb-[32px]">
        {Object.keys(question.answers).map((key) => {
          const answerKey = key as AnswerKeys
          const answer = question.answers[answerKey]
          return (
            answer && (
              <button
                key={answerKey}
                className="w-[100%] text-left text-[20px] block text-inherit px-[12px] py-[24px] cursor-pointer rounded-[100px] transition-all bg-[#495057] border-[#495057]"
              >
                {answer}
              </button>
            )
          )
        })}
      </div>
    </div>
  )
}

export default Question
