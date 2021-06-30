/** @format */

import faker from 'faker';

export const generateData = () => {
  let arr = new Array(10).fill().map(function () {
    return {
      id: faker.datatype.uuid(),
      employee_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      employee_salary: faker.datatype.number(),
      employee_age: faker.datatype.number(),
      profile_image: faker.image.avatar(),
      base_image: faker.image.image(),
      position: faker.name.jobTitle(),
      location: faker.address.cityName(),
      department: faker.commerce.department(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      isAvailable: faker.datatype.boolean(),
    };
  });
  return arr;
};
