console.log('hello world');

for (var j=1; j < 100; ++j) {
  let container = document.createElement('div');
  container.className = 'container';

  for(var i=10; i< 100; i++) {
    let el = document.createElement('span');
    el.className = 'petal';
    let deg = i*137.5;
    let height = i*100/50;
    el.setAttribute('style', `height: ${height}px; width: ${height/5}px; transform: rotate(${deg}deg); z-index: ${-i}`);

    let numColors = j; // no spirals
    el.style.background = `hsl(${i%numColors * 360/numColors}, 80%, 80%)`;

    container.appendChild(el);

  }
  document.body.appendChild(container);
}
