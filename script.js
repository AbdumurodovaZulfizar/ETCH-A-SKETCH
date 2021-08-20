const container = document.getElementById('container');

i=0;
while (i < 256) {
  const miniDiv = document.createElement('div');
  miniDiv.classList.add("mini-div");
  miniDiv.classList.add(`box-num-${i}`);
  miniDiv.classList.add('d-inline');
  container.appendChild(miniDiv);
  i+=1;
}