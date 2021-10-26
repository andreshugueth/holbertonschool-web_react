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
      return new Teacher();
    }
  }
  return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
