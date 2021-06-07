import './style.css';
import Circle from './Components/Circles.js';

const holder = document.getElementById('root');

const arrCircles = [];

const createCircles = () => {
  arrCircles.push(new Circle(holder));
  if (arrCircles.length === 100) {
    document.querySelectorAll('.circle').forEach((circle) => {
      circle.style.backgroundColor = 'pink';
      circle.style.borderColor = 'red';
    }, clearInterval(interval));
  }
};

const interval = setInterval(createCircles, 100);
