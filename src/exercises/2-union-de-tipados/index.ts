
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

export const persons: Person[]= [
  
  {
    name: 'Javier Castillo',
    age: 32,
    role: 'Estudiante',
  },
  {
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
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
] as (Admin | User)[];

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
