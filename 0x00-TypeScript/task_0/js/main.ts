interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Pedro",
  lastName: "Perez",
  age: 26,
  location: "Barranquilla"
};

const student2: Student = {
  firstName: "Pepito",
  lastName: "Gonzales",
  age: 30,
  location: "Medellin"
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const headerRow: HTMLTableRowElement = thead.insertRow(0);
const headerName1: HTMLTableCellElement = headerRow.insertCell(0);
const headerName2: HTMLTableCellElement = headerRow.insertCell(1);

headerName1.innerHTML = "First Name";
headerName2.innerHTML = "Location";

table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const name: HTMLTableCellElement = row.insertCell(0);
  const location: HTMLTableCellElement = row.insertCell(1);

  name.innerHTML = student.firstName;
  location.innerHTML = student.location;
});

table.append(tbody);
table.setAttribute("border", "3");
body.append(table);
