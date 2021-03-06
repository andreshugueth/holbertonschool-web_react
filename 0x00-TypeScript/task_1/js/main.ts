// Task 1
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
};

export const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Task 2
export interface Directors extends Teacher {
  numberOfReports: number;
};

export const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Peter", "Parker"));

// Task 4
export interface Student {
  firstName: string;
  lastName: string;
}

export interface ClassRoom extends Student {
  workOnHomework: () => string;
  displayName: () => string;
}

export class StudentClass implements ClassRoom {

  public firstName: string;
  public lastName: string;

  constructor({ firstName, lastName }: Student) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

let classroom = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(classroom.displayName());

