let count = 0
let counts = []

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let totalEl = document.getElementById('total-el')
let messageEl = document.getElementById('message')

function increment() {
  count += 1
  countEl.textContent = count
  messageEl.textContent = ''
}

function save() {
  if (count === 0) {
    messageEl.textContent = 'No Passangers'
  } else {
    saveEl.textContent += ` ${count} - `
    counts.push(count)
    messageEl.textContent = 'Count saved successfully'
    countEl.textContent = 0
    count = 0
  }
}

function total() {
  let totalCount = 0
  for (let num of counts) {
    totalCount += num
  }
  totalEl.textContent = `Total Passangers: ${totalCount}`

  setTimeout(function () {
    messageEl.textContent = ''
  }, 1500)
}
