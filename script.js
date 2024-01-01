const container1 = document.querySelector('.container1');
const fireworks1 = new Fireworks.default(container1, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 60
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    sound: {
        enabled: true,
        files: ['sound/explosion0.mp3', 'sound/explosion1.mp3', 'sound/explosion2.mp3'],
        volume: {
            min: 30,
            max: 31
        }
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  });
fireworks1.start();

const container2 = document.querySelector('.container2');
const fireworks2 = new Fireworks.default(container2, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 60
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    sound: {
        enabled: true,
        files: ['sound/explosion0.mp3', 'sound/explosion1.mp3', 'sound/explosion2.mp3'],
        volume: {
            min: 1,
            max: 1
        }
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  });
fireworks2.start();
new Snowflakes();

let message = "My Dearest Anonymous, > As the clock ticks its final moments for this year, my heart is filled with gratitude for the beautiful moments we've shared. You are the brightest star in my sky, and every day with you feels like a celebration. < As we step into the blank canvas of a new year, I'm excited about the adventures that await us. Together, let's create more memories, overcome challenges, and cherish the simple joys of life. < Your love has been my anchor and my wings, and I'm looking forward to another year of growing and thriving together. Happy New Year, my love! Here's to us and the beautiful journey ahead. > ";



let para = document.querySelector('.message');
let i = 0;
let interval = 100;
const typeWriter = () => {
    if (i < message.length) {
        if (message[i] === '>') para.innerHTML += '<br>';
        else if (message[i] === '<') para.innerHTML = '';
        else if (message[i] === ' ') para.innerHTML += ' ';
        else para.innerHTML += message[i];
        i++;
    }
    else clearInterval(callback);
}

const callback = setInterval(typeWriter, interval);
let audio = new Audio('sound/music.mp3');
let isPlaying = false;
audio.loop = true;
const background = () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }
}
window.addEventListener('click', background);