import { faker } from "@faker-js/faker";
import { Customer } from "../types/Customer";

export const generateCustomers = (num: number): Customer[] => {
	const customers: Customer[] = [];
	for (let i = 0; i < num; i++) {
		const customer: Customer = {
			id: faker.string.uuid(),
			name: faker.person.fullName(),
			title: faker.person.jobTitle(),
			address: faker.location.streetAddress(),
		};
		customers.push(customer);
	}
	return customers;
};
