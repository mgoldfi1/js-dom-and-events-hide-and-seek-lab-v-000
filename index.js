function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
 for (const x of document.querySelectorAll('.ranked-list li')) {
   x.innerHTML = `${parseInt(x) + n}`
 }
}
