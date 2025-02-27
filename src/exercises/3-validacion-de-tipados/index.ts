export type Person  = {
  name: string;
  age: number;
}

export interface User extends Person{
  occupation: string;
}

export interface Admin extends Person{
  role: string;
}

export const persons:( Admin| User)[]= [
  {
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  {
    name: 'Javier Castillo',
    age: 32,
    role: 'Estudiante',
  },
  {
    name: 'Maria Isabel Hernandez',
    age: 23,
    occupation: 'Abogada',
  },
  {
    name: 'Jorge Perez',
    age: 64,
    role: 'Contador',
  },
];

export function logPerson(person: (User | Admin)) {
  let additionalInformation: string;
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
