const { editTableForm } = document.forms;
const deleteTable = document.querySelector('.table-container');

if (editTableForm) {
  editTableForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(editTableForm).entries());
    const response = await fetch(`/user/table/${event.target.dataset.tableid}/edit`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        data,
      ),
    });

    if (response.status === 200) {
      window.location = '/user/table';
    }
  });
}

deleteTable?.addEventListener('click', async (event) => {
  // event.preventDefault();

  // console.log(event.target.parentElement.parentElement);
  if (event.target.classList.value === 'delete') {
    const table = event.target.parentElement.parentElement.parentElement;
    const response = await fetch('/user/table', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: table.id,
      }),
    });
    if (response.status === 200) {
      table.remove();
    }
  }

  if (event.target.classList.value === 'takeit') {
    const tableId = event.target.parentElement.parentElement.parentElement.dataset.takeit;
    console.log('=====>>>>>>', tableId);
    const response = await fetch('/user/table', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tableId}),
    });
    if (response.status === 200) {
      const curTable = await response.json();
      console.log('examinator ===>>>>', response.status);
      const examinatorInput = event.target.parentNode.parentNode.parentNode.querySelector('#examinator');
      console.log("exam",examinatorInput );
      examinatorInput.innerText = curTable.examinator.name;
      let takeButton = event.target.parentElement
      //takeButton.innerText = "ooooooooooooooo"
      
      
      takeButton.remove()
    }
  }
})
