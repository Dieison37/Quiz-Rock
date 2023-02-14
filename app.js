const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')
const correctAnswers = ['A', 'B', 'C', 'D', 'A', 'B', 'A', 'D']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value,
    form.inputQuestion7.value,
    form.inputQuestion8.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 12.5
    }
  })

  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  finalResult.classList.remove('d-none')

  let counter = 0

  const isTimer = setInterval(() => {
    if (counter === score) {
      clearInterval(isTimer)
      return
    }
    finalResult.querySelector('span').textContent = `${counter += 12.5}%`
  }, 20)
})
