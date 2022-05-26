createTable = () => createData();
let count = 0; //skaiciavimui kiek buvo kartu paspaustas mygtukas
let a = 0; //skaiciavimui, kurioje vietoje ideti tr taga
function createData() {
  if (count > 0) {
    location.reload();
  }
  count++;

  const numberOfRows = document.getElementById('numberOfRows').value;
  const numberOfCols = document.getElementById('numberOfCols').value;
  //kuriame lentele
  let div = document.getElementsByTagName('body')[0];
  let createTable = document.createElement('table');
  div.appendChild(createTable);

  //gauname lenteles nuoroda
  let table = document.getElementsByTagName('table')[0];
  //dedame tr taga
  for (let i = 1; i <= numberOfRows; i++) {
    const element = document.createElement('tr');
    table.appendChild(element);
  }
  for (let i = 1; i <= numberOfCols; i++) {
    let tr = document.getElementsByTagName('tr')[a];
    //trcias ciklas, nes createElement leidzia sukurti tik po viena elementa
    for (let i = 1; i <= numberOfCols; i++) {
      let element = document.createElement('td');
      element.textContent = i;
      element.style.cssText = 'border:1px solid blue;width:300px;';
      tr.appendChild(element);
    }
    a += 1;
  }
}
