// Task 5
export interface DirectorTeacherCommon {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
}

export interface DirectorInterface extends DirectorTeacherCommon {
  workDirectorTasks: () => string;
}

export interface TeacherInterface extends DirectorTeacherCommon {
  workTeacherTasks: () => string;
}

export class Director implements DirectorInterface {

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

export class Teacher implements TeacherInterface {
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

export const createEmployee = (salary: number | string): Director | Teacher => {
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
export function isDirector(employee: Director | Teacher) {
  if ("workDirectorTasks" in employee) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

export function executeWork(employee: Director | Teacher) {
  isDirector(employee);
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

export type Subjects = "Math" | "History";

export const teachClass = (todayClass: Subjects): string => {
  if (todayClass === "Math") {
    return "Teaching Math"
  } else {
    return "Teaching History"
  }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
