import ReactPaginate from "react-paginate";
import classes from "./Paginate.module.css";

const Paginate = ({ info, page, setPage }) => {
  return (
    <ReactPaginate
      forcePage={page === 1 ? 0 : page - 1}
      marginPagesDisplayed="3"
      breakClassName={classes.ellipsis}
      className={classes.pagination}
      pageClassName={classes.page}
      nextClassName={classes.next}
      previousClassName={classes.previous}
      activeClassName={classes.active}
      pageCount={info}
      onPageChange={(data) => {
        setPage(() => data.selected + 1);
      }}
    />
  );
};

export default Paginate;
