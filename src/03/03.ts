import {StudentType} from "../02/02";

export const value03_03 = '03_03';


export const sum = (a: number, b: number) => {
  return a + b
}


export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
}

export const whereStudentLive = (s: StudentType, cityName: string) => {
  return s.address.city.title === cityName;
}