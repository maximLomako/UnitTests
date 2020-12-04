export const value04_04 = '04_04';


const ages = [18, 20, 100, 101, 13 ,51, 7];

const predicate = (age: number) => {
  return age < 90;
}


const oldAges = [100];

const courses = [{title: 'css', price: 100}, {title: 'react', price: 210}, {title: 'js', price: 150}]



type CourseType = {
  title: string,
  price: number
}

const predicate2 = (course: CourseType) => {
  return course.price < 160
}


const cheapCourses = [];