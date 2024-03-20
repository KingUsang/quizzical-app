import { useState} from "react"
import { decode } from "he"
import Loading from "./components/Loading"
import ErrorModal from "./components/ErrorModal"
import QuizForm from "./components/QuizForm"
import Welcome from "./components/Welcome"

export default function App() {
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchQuestions = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=5")
      let data = await response.json()
      if (data.response_code !== 0) {
        throw new Error()
      }
      setQuestions(data.results.map(({ question, correct_answer, incorrect_answers }) => ({
        question: decode(question),
        correct_answer: decode(correct_answer),
        incorrect_answers: incorrect_answers.map(decode)
      })))
    } catch (error) {
      setErrorMsg('Oops! An error occured while fetching the questions.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-screen min-h-screen grid place-items-center p-4">
      <div className="max-w-xl">
        {errorMsg && (
          <ErrorModal message={errorMsg} onClose={() => setErrorMsg(null)} />
        )}
        {isLoading ? (
          <Loading />
        ) : questions.length ? (
          <QuizForm questions={questions} onRestartQuiz={fetchQuestions} />
        ) : (
          <Welcome onStartQuiz={fetchQuestions} />
        )}
      </div>
    </div>
  )
}