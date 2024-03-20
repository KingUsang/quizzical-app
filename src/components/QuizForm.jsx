import { useState, useEffect, memo } from "react"
import Question from "./Question"
import Button from "./Button"

function QuizForm({ questions, onRestartQuiz }) {      
  const [userAnswers, setUserAnswers] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }
  
  const handleSelectAnswer = (question, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: selectedAnswer,
    }))
  }

  const numOfUnansweredQuestions = 5 - Object.keys(userAnswers).length

  const calculateScore = () => {
    return questions.filter(question => {
      return userAnswers[question.question] === question.correct_answer
    }).length
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="divide-y divide-slate-200">
        {questions.map((questionObj, index) => (
          <Question
            key={index}
            questionObj={questionObj}
            isSubmitted={isSubmitted}
            userAnswer={userAnswers[questionObj.question]}
            onSelectAnswer={handleSelectAnswer}
          />
        ))}
      </div>
      <hr /><hr />
      <div className="py-5 text-center">
        {isSubmitted ? (
          <>
            <p className="pb-2 text-dark-blue font-bold text-xl">You scored {calculateScore()}/5</p>
            <Button onClick={onRestartQuiz}>Restart Quiz</Button>
          </>
        ) : numOfUnansweredQuestions ? (
          <span>You have {numOfUnansweredQuestions} {" "}
            question{numOfUnansweredQuestions > 1 && "s"} unanswered.</span>
        ) : (
          <Button type="submit">Submit Quiz</Button>
        )}
      </div>
    </form>
  )
}

export default QuizForm