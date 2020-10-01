import {StudentType} from "../02/02";
import {addSkill, makeStudentActive, whereStudentLive} from "./03";

let student: StudentType;

beforeEach(() => {
  student =  {
    id: 1,
    name: 'Max',
    age: 25,
    isActive: false,
    address: {
      streetTittle: 'Kosmonavtov',
      city: {
        title: 'Minsk',
        countryTittle: 'Belarus'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'html'
      },
      {
        id: 2,
        title: 'css'
      },
      {
        id: 3,
        title: 'js'
      }
    ]

  }
})

test ('new tech skill should be added to student', () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, 'JS')

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe('JS');
  expect(student.technologies[3].id).toBeDefined();


})

test ('should be made active', () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student)

  expect(student.isActive).toBe(true);


})


test ('Does student live in city?', () => {

  let res1 = whereStudentLive(student, 'Moscow');
  let res2 = whereStudentLive(student, 'Minsk');

  expect(res1).toBe(false);
  expect(res2).toBe(true);


})