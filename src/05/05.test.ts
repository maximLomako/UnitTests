import {
  makeCopyOfStudent,
  makeFullCopyOfStudent,
  makeFullCopyStudentGroup,
  multiply,
  StudentsGroupType,
  sum
} from "./05";
import {StudentType} from "../02/02";

let a = 3,
  b = 6;
let group: StudentsGroupType = [];

let student = {
  name: "Boris",
  age: 22,
  isMarried: true,
  scores: 100,
  friends: ["Petya"]
}

beforeEach(() => {
  a = 3
  b = 6
  group = [{
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
    friends: []
  },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
      friends: []
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120,
      friends: []
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100,
      friends: []
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110,
      friends: []
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105,
      friends: []
    },
  ];

})


test("Sum of 2 variables should be correct", () => {
  expect(sum(3, 6)).toBe(9)
})

test("Multiply of 2 variables should be correct", () => {
  expect(multiply(3, 6)).toBe(18)
})

test("get copy student", () => {

  const copyStudent = makeCopyOfStudent(student);
  const res1 = copyStudent === student;
  const res2 = copyStudent.friends === student.friends;

  expect(res1).toBe(false);
  expect(res2).toBe(true);

})

test("get full copy student", () => {

  const copyStudent = makeFullCopyOfStudent(student);
  const res1 = copyStudent === student;
  const res2 = copyStudent.friends === student.friends;

  expect(res1).toBe(false);
  expect(res2).toBe(false);
})

test("get full copy student group", () => {
  let copyGroup = makeFullCopyStudentGroup(group);
  expect( group === copyGroup).toBe(false)
  expect( group[0].friends === copyGroup[0].friends).toBe(false)
  expect( group[0] === copyGroup[0]).toBe(false)
  expect( copyGroup[0].friends.length).toBe(copyGroup.length - 1)
  expect( copyGroup[0].friends.includes(copyGroup[0].name)).toBe(false);

})