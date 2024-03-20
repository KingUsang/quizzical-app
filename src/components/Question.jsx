export default function Question({ questionObj, isSubmitted, userAnswer, onSelectAnswer }) {
  const { question, incorrect_answers, correct_answer } = questionObj

  const optionStyle = (option) => {
    if (isSubmitted) {
      if (option === correct_answer) {
        return { backgroundColor: "#94d7a2", borderColor: "#94d7a2" }
      } else if (option === userAnswer && option !== correct_answer) {
        return { backgroundColor: "#f9c9c9", borderColor: "#f9c9c9" }
      }
    }
    return {}
  }

  return (
    <fieldset className="py-6 text-dark-blue">
      <legend className="float-left font-semibold text-lg mb-2">
        {question}
      </legend>
      <div className="clear-both flex flex-wrap gap-3">
        {[...incorrect_answers, correct_answer].map((option, index) => (
          <label
            key={index}
            className="px-2 py-0.5 border border-moderate-blue rounded text-sm
            has-[:checked]:bg-light-grayish-blue
            has-[:checked]:border-light-grayish-blue"
            style={optionStyle(option)}>
            <input
              className="appearance-none"
              type="radio"
              name={question}
              value={option}
              onChange={(e) => onSelectAnswer(question, e.target.value)}
              checked={userAnswer === option}
              disabled={isSubmitted}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
