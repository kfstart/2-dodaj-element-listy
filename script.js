document.querySelector('button').addEventListener('click', ()=>{
let newLi = document.createElement('li');
let countLi = document.getElementsByClassName('item').length;
newLi.innerText = 'Item ' + (countLi + 1);
newLi.classList.add('item');
document.querySelector('ul').appendChild(newLi);
});