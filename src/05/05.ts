export const value05_05 = '05_05';

export function sum(a: number, b: number) {
  return a + b
}

export function multiply(a: number, b: number) {
  return a * b
}

type StudentType = {
  name: string
  age: number
  isMarried: boolean
  scores: number
  friends: Array<string>
}

export type StudentsGroupType = Array<StudentType>

export const makeCopyOfStudent = (obj: StudentType) => {
  let copyStudent = {...obj};
  return copyStudent
}

export const makeFullCopyOfStudent = (obj: StudentType) => {
  let copyStudent = {...obj, friends: [...obj.friends]};
  return copyStudent
}

export const makeFullCopyStudentGroup = (group: StudentsGroupType): any => {
  let copyGroup = group.map(g => ({...g}));
  let names = copyGroup.map(s => s.name);
  return group.map(s => ({...s, friends: names.filter(i => i !== s.name)}))
}

