import { z } from 'zod'

const AnswerSchema = z.object({
  answer_a: z.string().nullable(),
  answer_b: z.string().nullable(),
  answer_c: z.string().nullable(),
  answer_d: z.string().nullable(),
  answer_e: z.string().nullable(),
  answer_f: z.string().nullable(),
})
const CorrectAnswersSchema = z.object({
  answer_a_correct: z.string(),
  answer_b_correct: z.string(),
  answer_c_correct: z.string(),
  answer_d_correct: z.string(),
  answer_e_correct: z.string(),
  answer_f_correct: z.string(),
})

const QuestionSchema = z.object({
  id: z.number(),
  question: z.string(),
  answers: AnswerSchema,
  correct_answers: CorrectAnswersSchema,
  category: z.string(),
  difficulty: z.string(),
})

const QuizResponseSchema = z.array(QuestionSchema)

export type Question = z.infer<typeof QuestionSchema>
export type QuizResponse = z.infer<typeof QuizResponseSchema>

const url: string =
  'https://quizapi.io/api/v1/questions?apiKey=M7RT7dicTsTgRWHPM4LqiwuNuiHK9VmtPIuFZOnY&category=code&difficulty=Easy&limit=10&tags=JavaScript'

const getQuiz = async (): Promise<QuizResponse> => {
  const response = await fetch(url)
  const data = await response.json()
  const validatedData = QuizResponseSchema.safeParse(data)
  if (validatedData.success) {
    return validatedData.data
  } else {
    console.error('Validation errors:', validatedData.error.format())
    throw new Error('Invalid data received from the quiz API')
  }
}

export default getQuiz
