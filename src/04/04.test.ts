export const value04_04 = '04_04';
test('should tale old men older then 90', () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];


  const oldAges = ages.filter((age) => age >= 100);


  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
})


test('only cheap courses', () => {
  const courses = [{title: 'css', price: 100},
    {title: 'react', price: 210},
    {title: 'js', price: 150}]


  const cheapCourses = courses.filter(
    (price) => price.price <= 160);


  expect(cheapCourses.length).toBe(2);
})