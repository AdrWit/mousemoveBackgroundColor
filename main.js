const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {
  // console.log(e.clientX, e.clientY);

  const x = e.clientX;
  const y = e.clientY;

  h1.textContent = x + ", " + y;

  document.body.style.backgroundColor = 'rgb(' + x + ',' + y + ',' + (x / y * 20) + ')';



})