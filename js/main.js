
function getRandomFigure(from, to) {
  let min = Math.ceil(from);
  let max = Math.floor(to);
  return Math.floor (Math.random() * (max - min + 1) + min);
}

function randomNumber(min, max, precision) {
  return (Math.random() * (max - min + 1) + min).toFixed(precision);
}

const ads = []
const types = ['palace', 'flat', 'house', 'bungalow','hotel'];
// types[1];
const checkins = ['12:00','13:00','14:00'];
const checkouts = ['12:00','13:00','14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


for (let i=1; i<=10; i++){
  const ad={
    author:{
      avatar:`img/avatars/user${i.toString().padStart(2,'0')}.png`
    },
    offer:{
      title:'Редкая находка',
      address:`{{location.lat}}, {{location.lng}}`,
      price:getRandomFigure(100, 999),
      type:types[getRandomFigure(0,4)],
      rooms:getRandomFigure(1, 9),
      guests:getRandomFigure(1, 20),
      checkin:checkins[getRandomFigure(0,2)],
      checkout:checkouts[getRandomFigure(0,2)],
      features:features[getRandomFigure(0,5)],
      // как написать  так: чтобы значения не повторялись
      description:'Просторный и светлый номер',
      photos:[
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
     ],
    },
    location:{
      lat:randomNumber(35.65000, 35.70000, 5),
      lng:randomNumber(139.70000, 139.80000, 5)
    }
  }
  ads.push(ad)
}

