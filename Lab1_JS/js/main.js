
const tablica = ['pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty'];


alert(tablica[0]);


tablica[tablica.length - 1] = 'Nowa wartość ostatniego elementu';
alert(tablica[tablica.length - 1]);


tablica[5] = 'nowy6';
tablica[tablica.length] = 'nowy7';
tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');


tablica.unshift('nowy12', 'nowy13');


const usunietyKoniec = tablica.pop();
const usunietyPoczatek = tablica.shift();


const wynikP = document.getElementById('tablice-wynik');
wynikP.innerHTML =
  '<strong>Aktualna tablica:</strong> ' + tablica.join(', ') +
  '<br>Usunięty z końca: ' + usunietyKoniec +
  '<br>Usunięty z początku: ' + usunietyPoczatek;


const nowaTablica = ['poniedziałek', 'wtorek', 'środa'];
const drugaP = document.getElementById('druga-tablica-wynik');

drugaP.innerHTML =
  'Pierwszy element to <strong>' + nowaTablica[0] + '</strong><br>' +
  'Ostatni element to <strong>' +
  nowaTablica[nowaTablica.length - 1] + '</strong>';


nowaTablica.unshift('niedziela', 'sobota');


drugaP.innerHTML +=
  '<br>Po użyciu unshift() pierwszy element to teraz <strong>' +
  nowaTablica[0] + '</strong>';


document.getElementById('imie').textContent = 'Imię: Maria';     
document.getElementById('nazwisko').textContent = 'Nazwisko: Kowalska';
document.getElementById('indeks').textContent = 'Nr indeksu: 12345';


const listaWhile = document.getElementById('lista-while');
let i = 0;
const polowa = Math.floor(nowaTablica.length / 2);

while (i < polowa) {
  const li = document.createElement('li');
  li.textContent = nowaTablica[i];
  listaWhile.appendChild(li);
  i++;
}


const listaFor = document.getElementById('lista-for');
for (let j = 0; j < polowa; j++) {
  const li = document.createElement('li');
  li.textContent = nowaTablica[j];
  listaFor.appendChild(li);
}

function pokazDane() {
  const imie = document.getElementById('imie').textContent;
  const nazwisko = document.getElementById('nazwisko').textContent;
  const indeks = document.getElementById('indeks').textContent;
  alert(imie + '\n' + nazwisko + '\n' + indeks); 
}

document
  .getElementById('pokaz-dane-btn')
  .addEventListener('click', pokazDane);


console.log('Liczba formularzy na stronie (forms.length):', document.forms.length);
