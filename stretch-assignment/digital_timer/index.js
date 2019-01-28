let time = null;

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return (n.length >= width ? n : new Array(width - n.length + 1).join(z) + n);
}

let counter = null;

function start(){
  time = 0;
  document.getElementById('button').disabled = true;
  counter = setInterval(countup, 10);
}

const countup = () => {
  time = time + 10;
  printTime = pad(time, 5);
  document.getElementById('secondTens').textContent = printTime[0];
  document.getElementById('secondOnes').textContent = printTime[1];
  document.getElementById('msHundreds').textContent = printTime[2];
  document.getElementById('msTens').textContent = printTime[3];
  if(time === 10000){
    clearInterval(counter);
    document.querySelectorAll('.digit').forEach(el => el.style.color = "red");
    document.getElementById('button').disabled = false;
    time = 0;
  }
}


const reset = () => {
  clearInterval(counter);
  document.getElementById('button').disabled = false;
  document.getElementById('secondTens').textContent = "-";
  document.getElementById('secondOnes').textContent = "-";
  document.getElementById('msHundreds').textContent = "-";
  document.getElementById('msTens').textContent = "-";
  document.querySelectorAll('.digit').forEach(el => el.style.color = "black");
}