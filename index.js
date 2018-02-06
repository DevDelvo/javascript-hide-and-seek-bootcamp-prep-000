function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  
}

function deepestChild() {
  
}

function increaseRankBy(n) {
  const lis = document.getElementById('ranked-list').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}