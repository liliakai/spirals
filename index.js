console.log('hello world');

let row = document.createElement('div');
row.className = 'row';

let classes = ['flower', 'shell', 'paper'];
let angles = [137.5, 100, 211, 157, 13, 21, 47]; // avoid factors of 360

for (var j=1; j < 50; ++j) {
  for (var k=0; k < classes.length; ++k) {
    for (var d=0; d < angles.length; ++d) {
      let container = document.createElement('div');
      container.className = `container ${classes[k]}`;

      for(var i=1; i< 100; i++) {
        let el = document.createElement('span');
        el.className = 'petal';
        let deg = i*(angles[d]);
        let height = i*100/50;
        el.setAttribute('style', `height: ${height}px; width: ${height/5}px; transform: rotate(${deg}deg); z-index: ${-i}`);

        let numColors = j; // no spirals
        el.style.background = `hsl(${i%numColors * 360/numColors}, 80%, 80%)`;

        container.appendChild(el);

      }
      row.appendChild(container);
    }
  }
}
document.body.appendChild(row);
