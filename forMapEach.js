
// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).

function task41(data) {
    let ulElement = document.querySelector('#task41')
  
    for (let i = 0; i < data.length; i++) {
      if (!isNaN(data[i])) {
        let liElement = document.createElement('li')
        liElement.textContent = data[i]
        ulElement.prepend(liElement)
      }
    }
  }
  
  task41(arr)
  
  // 4.2. Tik tekstą (string tipo duomenis).
  function task42(data) {
    let ulElement = document.querySelector('#task42')
  
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === 'string') {
        let liElement = document.createElement('li')
        liElement.textContent = data[i]
        ulElement.prepend(liElement)
      }
    }
  }
  
  task42(arr)
  
  
  // 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
  
  function task43(data, num = 2) {
    for (let i = 0; i < data.length; i++) {
      if (!isNaN(data[i])) {
        console.log(Math.pow(data[i], num));
      }
    }
  }
  
  // task43(arr, 1)
  
  // 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
  function task44(data, num = 0) {
    for (let i = 0; i < data.length; i++) {
      if (!isNaN(data[i])) {
        console.log(data[i] + num);
      }
    }
  }
  
  task44(arr, 55)
  
  // 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      console.log(arr[i] / 2);
    }
  }
  
  
  
  // 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      console.log('Number: ' + arr[i]);
    }
  }  
  
  
  // 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
  //   "Index: 0, Number: 2"
  //   "Index: 1, Number: 3"
  //   "Index: 2, Number: 5"
  //   Ir t.t.
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      console.log(`Index: ${i}, Number: ${arr[i]}`);
    }
  } 
  
  
  // 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      console.log(arr[i] * i);
    }
  }  
  
  // 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
  //   - Pirmo skaičiaus dauginti nereikia.
  //   - Antrą skaičių dauginti iš pirmo.
  //   - Trečią skaičių dauginti iš antro.
  //   - Ketvirta skaičių dauginti iš trečio.
  //   - Penktą skaičių dauginti iš ketvirto.
  //   Ir t.t.
  let numbersArray = arr.filter(item => !isNaN(item)); // Sukuriamas naujas masyvas tik su skaičiais 
  for (let i = 0; i < numbersArray.length; i++) {
    if (i > 0) {
      console.log(numbersArray[i] * numbersArray[i - 1]);
    } else {
      console.log(numbersArray[i]);
    }
  }
  
  // 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let answer = arr[i] * 5;
  
      if (answer > 350) {
        console.log(answer);
      }
    }
  }
  
  // 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') { // patikrinama ar duomeny tipas yra string
      console.log(`${arr[i]} has ${arr[i].length} symbols`);
    }
  } 
  
  
  // 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let lettersArray = arr[i].split('');
      let updatedWord = lettersArray.join('-').toUpperCase();
      console.log(updatedWord);
    }
  }
  
  // 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let lettersArray = arr[i].split('');
      lettersArray[0] = '_';
      lettersArray[2] = '_';
      let updatedWord = lettersArray.join('');
      console.log(updatedWord);
    }
  }
  
  // 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let lettersArray = arr[i].split('');
      let updatedWord = lettersArray.reverse().join('');
      console.log(updatedWord);
    }
  }  
  
  // 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if (i === 0) {
        console.log(`Word ${arr[i]} is the first in the array and before ${arr[i + 1]} in the array`);
      } else if (i === arr.length - 1) {
        console.log(`Word ${arr[i]} is the first in the array and after ${arr[i - 1]} in the array`);
      } else {
        console.log(`Word ${arr[i]} is between ${arr[i - 1]} and ${arr[i + 1]} in the array`);
      }
    }
  }
  
  // 5. Atlikti ta patį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
  // 5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
  //   <ul id="task-41"></ul>
  //   <ul id="task-42"></ul>
  //   <ul id="task-43"></ul>
  //   Ir t.t.
  // 5.2. JavaScript'e paselektinti šiuos elementus.
  // 5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
  // 5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.
  
  
  // 4.1. Tik skaičius (number tipo duomenis).
  let ulElement41 = document.querySelector('#task-41');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>${arr[i]}</li>`;
      ulElement41.innerHTML += liElement;
    }
  }
  
  // 4.2. Tik tekstą (string tipo duomenis).
  let ulElement42 = document.querySelector('#task-42');
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let liElement = `<li>${arr[i]}</li>`;
      ulElement42.innerHTML += liElement;
    }
  }
  
  
  // 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
  let ulElement43 = document.querySelector('#task-43');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>${Math.pow(arr[i], 4)}</li>`;
      ulElement43.innerHTML += liElement;
    }
  }
  
  // 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
  let ulElement44 = document.querySelector('#task-44');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>${arr[i] + 55}</li>`;
      ulElement44.innerHTML += liElement;
    }
  }
  
  // 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
  let ulElement45 = document.querySelector('#task-45');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>${arr[i] / 2}</li>`;
      ulElement45.innerHTML += liElement;
    }
  }
  
  // 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
  let ulElement46 = document.querySelector('#task-46');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>${'Number: ' + arr[i]}</li>`;
      ulElement46.innerHTML += liElement;
    }
  }
  
  // 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
  //   "Index: 0, Number: 2"
  //   "Index: 1, Number: 3"
  //   "Index: 2, Number: 5"
  //   Ir t.t.
  let ulElement47 = document.querySelector('#task-47');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>Index: ${i}, Number: ${arr[i]}</li>`;
      ulElement47.innerHTML += liElement;
    }
  }
  
  // 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
  let ulElement48 = document.querySelector('#task-48');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let liElement = `<li>${arr[i] * i}</li>`;
      ulElement48.innerHTML += liElement;
    }
  }
  
  // 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
  //   - Pirmo skaičiaus dauginti nereikia.
  //   - Antrą skaičių dauginti iš pirmo.
  //   - Trečią skaičių dauginti iš antro.
  //   - Ketvirta skaičių dauginti iš trečio.
  //   - Penktą skaičių dauginti iš ketvirto.
  //   Ir t.t.
  
  let ulElement49 = document.querySelector('#task-49');
//   let numbersArray = arr.filter(item => !isNaN(item));
  for (let i = 0; i < numbersArray.length; i++) {
    if (i > 0) {
      let liElement = `<li>${numbersArray[i] * numbersArray[i - 1]}</li>`;
      ulElement49.innerHTML += liElement;
    } else {
      let liElement = `<li>${numbersArray[i]}</li>`;
      ulElement49.innerHTML += liElement;
    }
  }
  
  // 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
  let ulElement410 = document.querySelector('#task-410');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let answer = arr[i] * 5;
  
      if (answer > 350) {
        let liElement = `<li>${answer}</li>`;
        ulElement410.innerHTML += liElement;
      }
    }
  }
  
  // 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
  let ulElement411 = document.querySelector('#task-411');
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') { // patikrinama ar duomeny tipas yra string
      let liElement = `<li>${arr[i]} has ${arr[i].length} symbols</li>`;
      ulElement411.innerHTML += liElement;
    }
  }
  
  // 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
  let ulElement412 = document.querySelector('#task-412');
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let lettersArray = arr[i].split('');
      let updatedWord = lettersArray.join('-').toUpperCase();
      let liElement = `<li>${updatedWord}</li>`;
      ulElement412.innerHTML += liElement;
    }
  }
  
  // 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
  let ulElement413 = document.querySelector('#task-413');
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let lettersArray = arr[i].split('');
      lettersArray[0] = '_';
      lettersArray[2] = '_';
      let updatedWord = lettersArray.join('');
      let liElement = `<li>${updatedWord}</li>`;
      ulElement413.innerHTML += liElement;
    }
  }
  
  // 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
  let ulElement414 = document.querySelector('#task-414');
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let lettersArray = arr[i].split('');
      let updatedWord = lettersArray.reverse().join('');
      let liElement = `<li>${updatedWord}</li>`;
      ulElement414.innerHTML += liElement;
    }
  }
  
  // 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
  let ulElement415 = document.querySelector('#task-415');
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let liElementContent;
  
      if (i === 0) {
        liElementContent = `Word ${arr[i]} is the first in the array and before ${arr[i + 1]} in the array`;
      } else if (i === arr.length - 1) {
        liElementContent = `Word ${arr[i]} is the first in the array and after ${arr[i - 1]} in the array`;
      } else {
        liElementContent = `Word ${arr[i]} is between ${arr[i - 1]} and ${arr[i + 1]} in the array`;
      }
  
      ulElement415.innerHTML += `<li>${liElementContent}</li>`;
    }
  }