import { Customer } from "../types/Customer";
import PhotoGrid from "./PhotoGrid";

interface CustomerDetailsProps {
	customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
	return (
		<div className="customer-details">
			{!customer ? (
				<div className="no-customer-selected">
					<h2>Select a customer to see details.</h2>
				</div>
			) : (
				<article className="customer-details-container">
					<header className="customer-details-header">
						<div className="customer-name-address">
							<h2>{customer.name}</h2>
							<h3>{customer.address}</h3>
						</div>
						<p>{customer.title}</p>
					</header>
					<PhotoGrid selectedCustomerId={customer?.id} />
				</article>
			)}
		</div>
	);
};

export default CustomerDetails;
