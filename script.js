const hourInputs = document.getElementsByClassName('input');
const classHourInput = document.getElementById('classHourInput');
const table = document.getElementById('table');

for (const input of hourInputs) {
    if (input.type === 'number') {
        input.oninput = (e) => {
            updateRow(e.target.parentElement.parentElement);
        }
    } else {
        input.oninput = () => {
            updateTable();
        }
    }
}

function updateRow(row) {
    const input = row.getElementsByClassName('input')[0];
    const subjectName = row.getElementsByClassName('subjectName')[0].innerHTML;

    const hours = subjectName === 'Citi priekšmeti' ? 23 : 22;
    const num = subjectName === 'Citi priekšmeti' ? 2 : 3;
    let count = subjectName === 'Citi priekšmeti' ? 6 : 5;

    if (classHourInput.checked) {
        count = subjectName === 'Citi priekšmeti' ? 5 : 4;
    }
    
    row.getElementsByClassName('writingWork')[0].innerHTML = Math.floor(input.value*num/hours*60);
    row.getElementsByClassName('consultation')[0].innerHTML = Math.floor(input.value*num/hours*60);
    row.getElementsByClassName('preparing')[0].innerHTML = Math.floor(input.value*num/hours*60);
    row.getElementsByClassName('projects')[0].innerHTML = Math.floor(input.value*count/hours*60);
}

function updateTable() {
    for (const row of table.children[0].children) {
        if (row.classList.contains('subject')) {
            updateRow(row)
        }
    }
}

updateTable();