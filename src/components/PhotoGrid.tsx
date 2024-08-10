import useFetchPhotos from "../hooks/useFetchPhotos";
import Loader from "./Loader"; // Import the Loader component

interface PhotoGridProps {
	selectedCustomerId: string | null;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ selectedCustomerId }) => {
	const { photos, loading, error } = useFetchPhotos(selectedCustomerId);
	console.log("hi render");
	if (error) {
		return <div className="error-message">Error: {error}</div>;
	}
	return (
		<>
			<div className="photo-grid">
				{photos.map((url, index) => (
					<img
						key={`${url}-index`}
						src={url}
						alt={`Random from Pexels ${index}`}
					/>
				))}
			</div>
			{loading && <Loader />}
		</>
	);
};

export default PhotoGrid;
