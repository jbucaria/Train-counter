let count = 0

let countEl = document.getElementById('count-el')

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  console.log(count)
}

let saveEl = document.getElementById('save-el')

function save() {
  let newCount = count + ' - '
  saveEl.textContent += newCount
  countEl.textContent = 0
}
