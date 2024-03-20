import Button from './Button'

export default function Welcome({ onStartQuiz }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold text-dark-blue">Quizzical App</h1>
      <p className="py-3">
        Welcome 👋 to Quizzical! Test your knowledge by
        answering these trivial questions.
      </p>
      <div>
        <Button onClick={onStartQuiz}>Start Quiz</Button>
      </div>
    </div>
  )
}