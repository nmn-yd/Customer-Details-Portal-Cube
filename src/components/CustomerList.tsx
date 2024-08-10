import { useState } from "react";
import { Customer } from "../types/Customer";
import CustomerCard from "./CustomerCard";

export const itemHeight: number = 100;
export const windowHeight: number = 655;
const overscan = 5;

interface CustomerListProps {
	customers: Customer[];
	selectedCustomerId: string | null;
	onSelect: (id: string) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
	customers,
	selectedCustomerId,
	onSelect,
}) => {
	const [scrollTop, setScrollTop] = useState<number>(0);
	const startIndex = Math.max(
		0,
		Math.floor(scrollTop / itemHeight) - overscan
	);

	const endIndex = Math.min(
		customers.length,
		startIndex + Math.floor(windowHeight / itemHeight) + overscan
	);

	const virtualisedList = customers.slice(startIndex, endIndex);

	return (
		<div
			className="customer-list"
			style={{
				height: `${windowHeight}px`,
				overflowY: "auto",
			}}
			onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
		>
			<div
				style={{
					height: `${customers.length * itemHeight}px`,
				}}
			>
				<ul
					role="list"
					style={{
						transform: `translateY(${startIndex * itemHeight}px)`,
					}}
				>
					{virtualisedList.map((customer) => (
						<CustomerCard
							key={customer.id}
							customer={customer}
							onClick={() => onSelect(customer.id)}
							isSelected={customer.id === selectedCustomerId}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CustomerList;
