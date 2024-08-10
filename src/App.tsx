import { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import { Customer } from "./types/Customer";
import { generateCustomers } from "./data/customerData";

const App: React.FC = () => {
	const [customers, setCustomers] = useState<Customer[]>([]);
	const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
		null
	);

	useEffect(() => {
		const generatedCustomers = generateCustomers(1000); // Generate 1000 customers
		setCustomers(generatedCustomers);
	}, []);

	const selectedCustomer =
		customers.find((customer) => customer.id === selectedCustomerId) || null;

	return (
		<div className="wrapper">
			<h1 className="app-heading">
				<img
					src="/public/cubeLogo.png"
					alt="A text with cube written in it"
				/>
				<span>Customer Details Portal</span>
			</h1>
			<div className="app">
				<CustomerList
					customers={customers}
					selectedCustomerId={selectedCustomerId}
					onSelect={setSelectedCustomerId}
				/>
				<CustomerDetails customer={selectedCustomer} />
			</div>
		</div>
	);
};

export default App;
