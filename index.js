console.log('hello world');


let classes = ['flower', 'paper'];
let angles = [137.5, 100, 211, 157, 13, 21, 47]; // avoid factors of 360

function createSpiral(j,className,angle,note) {
  let container = document.createElement('div');
  container.className = `container ${className}`;

  for(var i=1; i< 100; i++) {
    let el = document.createElement('span');
    el.className = 'petal';
    let deg = i*(angle);
    let height = i*1.5;
    el.setAttribute('style', `height: ${height}px; width: ${height/5}px; transform: rotate(${deg}deg); z-index: ${-i}`);

    let numColors = j;
    el.style.background = `hsl(${i%numColors * 360/numColors}, 80%, 80%)`;

    container.appendChild(el);

  }
  if (note) {
    let label = document.createElement('p');
    label.className = 'note';
    label.textContent = `angle: ${angle}, colors: ${j}, className: "${className}"`;
    container.appendChild(label);
  }
  return container;
}

function generateSpirals() {
  let row = document.createElement('div');
  row.className = 'row';
  for (var j=1; j < 50; ++j) {
    for (var k=0; k < classes.length; ++k) {
      for (var d=0; d < angles.length; ++d) {
        let spiral = createSpiral(j,classes[k],angles[d], true);
        row.appendChild(spiral);
      }
    }
  }
  document.body.appendChild(row);
}

function artisanalSpirals() {
  let spirals = [
    {
      angle: 211, colors: 5, className: "flower" // 5 CCW
    },
    // dupe { angle: 100, colors: 7, className: "flower" // 7 CCW },
    {
      angle: 157, colors: 7, className: "flower" // 7 CW
    },
    {
      angle: 47, colors: 4, className: "flower" // 8 CW
    },
    // dupe { angle: 137.5, colors: 8, className: "flower" // 8 CW },
    {
      angle: 21, colors: 9, className: "flower" // 9 CW
    },
    {
      angle: 100, colors: 11, className: "flower" // 11 CW
    },
    {
      angle: 211, colors: 4, className: "flower" // 12 CW
    },
    {
      angle: 137.5, colors: 13, className: "flower" // 13 CCW
    },
    {
      angle: 47, colors: 5, className: "flower" // 15 CCW
    },
    {
      angle: 157, colors: 4, className: "flower" // 16 CCW
    },
    {
      angle: 21, colors: 3, className: "flower" // 17 CW but iffy
    },
    {
      angle: 21, colors: 6, className: "flower" // 18 CW
    },
    {
      angle: 137.5, colors: 7, className: "flower" // 21 CW
    },
    {
      angle: 157, colors: 23, className: "flower" // 23 CW
    },
    {
      angle: 13, colors: 9, className: "flower" // 27 CCW
    },
  ];
  let row = document.createElement('div');
  row.className = 'row';
  for (var i=0; i < spirals.length; ++i) {
    let { colors, className, angle } = spirals[i];
    let spiral = createSpiral(colors, className, angle, false);
    row.appendChild(spiral);
  }
  document.body.appendChild(row);
}

artisanalSpirals();
generateSpirals();
