import { useState } from "react";
import { Pagination } from "flowbite-react";

export default {
	title: "Components/Pagination",
	component: Pagination
};

export const DefaultPagination = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
		</div>
	);
};

export const TableDataPagination = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				layout="table"
				currentPage={currentPage}
				totalPages={100}
				onPageChange={onPageChange}
			/>
		</div>
	);
};

export const NavigationPagination = () => {
	const [currentPage, setCurrentPage] = useState(1);	
	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				layout="pagination"
				currentPage={currentPage}
				totalPages={0}
				onPageChange={onPageChange}
			/>
		</div>
	);
};

export const PreviousAndNext = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				layout="navigation"
				currentPage={currentPage}
				totalPages={100}
				onPageChange={onPageChange}
			/>
		</div>
	);
};
export const PaginationWithIcons = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				currentPage={currentPage}
				totalPages={100}
				onPageChange={onPageChange}
				showIcons
			/>
		</div>
	);
};

export const PaginationWithSelector = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				currentPage={currentPage}
				totalPages={100}
				onPageChange={onPageChange}
				showIcons
			/>
		</div>
	);
};

export const PaginationDisabledSelector = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
		</div>
	);
};

export const PaginationPreviousNext = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<div className="flex overflow-x-auto sm:justify-center">
			<Pagination
				currentPage={currentPage}
				totalPages={100}
				onPageChange={onPageChange}
				showIcons
			/>
		</div>
	);
};
