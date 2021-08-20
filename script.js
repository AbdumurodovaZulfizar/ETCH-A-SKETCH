const container = document.getElementById('container');
const button = document.getElementById('clear');

let i=0;
while (i < 256) {
  const miniDiv = document.createElement('div');
  miniDiv.classList.add("mini-div");
  // miniDiv.classList.add(`box-num-${i}`);
  miniDiv.classList.add('d-inline');
  container.appendChild(miniDiv);
  i+=1;
}

const setColor = (e) => {
  e.target.classList.add('color');
};

// const clearBox = (e) => {
//   e.target.classList.remove('color');
// }

const reset = () => {
  container.innerHTML = '';
  boxes.forEach(box => box.classList.remove('color'));
  const number = prompt('Enter the size of box?')
  let gridArea = number * number;
  for (let i = 0; i < gridArea; i++ ) {
    let mini_box = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.appendChild(mini_box);
  }

  container.querySelectorAll('div').forEach(box => box.addEventListener('mousemove', setColor));

}

const boxes = Array.from(document.querySelectorAll('.mini-div'));
boxes.forEach(box => box.addEventListener('mousemove', setColor))
button.addEventListener('click', reset);