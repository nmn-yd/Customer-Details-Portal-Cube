import { Customer } from "../types/Customer";
import { itemHeight } from "./CustomerList";

interface CustomerCardProps {
	customer: Customer;
	onClick: () => void;
	isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
	customer,
	onClick,
	isSelected,
}) => {
	return (
		<li
			className={`customer-card ${isSelected ? "selected" : ""}`}
			style={{
				height: `${itemHeight}px`,
			}}
			onClick={onClick}
		>
			<h3>{customer.name}</h3>
			<p>{customer.title}</p>
		</li>
	);
};

export default CustomerCard;
