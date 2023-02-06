const ratingNumbers = document.querySelectorAll('.rating-number')
const submitBtn = document.querySelector('#submit')
const ratingModal = document.querySelector('#rating-section')
const thankingModal = document.querySelector('#thanking-section')
const submittedRating = document.querySelector('#submitted-rating')
let userRating = null

ratingNumbers.forEach((btn) =>
  btn.addEventListener('click', () => {
    userRating = btn.value
  })
)

submitBtn.addEventListener('click', () => {
  if (!userRating) return
  ratingModal.style.display = 'none'
  submittedRating.innerHTML = `You selected ${userRating} out of 5`
  thankingModal.style.display = 'block'
})
