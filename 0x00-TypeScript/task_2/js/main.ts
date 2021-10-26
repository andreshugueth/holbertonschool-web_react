// Task 5
interface DirectorTeacherCommon {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
}

interface DirectorInterface extends DirectorTeacherCommon {
  workDirectorTasks: () => string;
}

interface TeacherInterface extends DirectorTeacherCommon {
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {

  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher;
    }
  }
  return new Director;
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6
function isDirector(employee: Director | Teacher) {
  if ("workDirectorTasks" in employee) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

function executeWork(employee: Director | Teacher) {
  isDirector(employee);
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === "Math") {
    return "Teaching Math"
  } else {
    return "Teaching History"
  }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
