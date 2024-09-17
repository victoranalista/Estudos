const pontoTable = document.getElementById('ponto-table');
const pontoBody = document.getElementById('ponto-body');
const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', registerPonto);

function registerPonto() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const newRow = `
    <tr>
      <td>${currentDate.toLocaleDateString()}</td>
      <td>${currentTime}</td>
      <td></td>
    </tr>
  `;
  pontoBody.innerHTML += newRow;
}

// registrar ponto de saída quando o usuário clica novamente no botão
registerButton.addEventListener('click', registerPontoExit);

function registerPontoExit() {
  const lastRow = pontoBody.lastChild;
  const currentTime = new Date().toLocaleTimeString();
  lastRow.cells[2].innerHTML = currentTime;
}