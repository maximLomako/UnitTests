export const value02_02 = '02_02';


type CityType = {
  title: string,
  countryTittle: string
}

type AddressType = {
  streetTittle: string,
  city: CityType
}

type TechType = {
  id: number
  title: string
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}


const student: StudentType = {
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

console.log(student.age);
console.log(student.isActive);
console.log(student.address.city.title);
console.log(student.technologies[2].title)
