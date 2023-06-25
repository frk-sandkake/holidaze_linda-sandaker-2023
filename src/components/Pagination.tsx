import Pagination from "react-bootstrap/Pagination";
import { useAppDispatch } from "../redux/hooks";
import { setCurrentPage } from "../redux/paginationSlice";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const CustomPagination = ({
    currentPage,
    totalPages,
    onPageChange,
    }: PaginationProps) => {
    const dispatch = useAppDispatch();

    const handlePageChange = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
        onPageChange(pageNumber);
    };

    let pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(
        <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => handlePageChange(i)}
        >
            {i}
        </Pagination.Item>
        );
    }

    return (
        <Pagination className="d-flex justify-content-center align-items-center">
        <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
        ></Pagination.Prev>
        {pageItems}
        <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        ></Pagination.Next>
        </Pagination>
    );
};

export default CustomPagination;
