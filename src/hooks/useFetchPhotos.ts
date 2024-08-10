import { useEffect, useState } from "react";
import { PexelsResponse } from "../types/pexels";

const useFetchPhotos = (selectedCustomerId: string | null) => {
	const [photos, setPhotos] = useState<string[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState<boolean>(true); // Loading state
	const [error, setError] = useState<string | null>(null); // Error state

	useEffect(() => {
		const fetchPhotos = async () => {
			setLoading(true); // Set loading to true before fetching
			setError(null); // Reset error state before fetching

			try {
				const response = await fetch(
					`https://api.pexels.com/v1/curated?per_page=9&page=${page}`,
					{
						method: "GET",
						headers: {
							Authorization: import.meta.env.VITE_PEXELS_API_KEY,
						},
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data: PexelsResponse = await response.json();
				const imageUrls = data.photos.map((photo) => photo.src.medium);
				setPhotos(imageUrls);
			} catch (error) {
				clearInterval(interval);
				setError(
					error instanceof Error
						? error.message
						: "An unknown error occurred"
				);
			} finally {
				setLoading(false); // Set loading to false after fetching
			}
		};

		fetchPhotos(); // Initial fetch
		const interval = setInterval(() => {
			setPage((prevPage) => {
				const nextPage = prevPage + 1;
				return nextPage > 100 ? 1 : nextPage;
			});
		}, 10000);

		return () => clearInterval(interval);
	}, [page]);

	useEffect(() => {
		setPage(1);
	}, [selectedCustomerId]);

	return { photos, loading, error };
};

export default useFetchPhotos;
