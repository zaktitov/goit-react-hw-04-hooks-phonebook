// import { Fragment } from "react/cjs/react.production.min";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ contactName, onFindContact }) => {
  return (
    <label className={s.filterLabel} htmlFor="">
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={contactName}
        onChange={onFindContact}
      />
    </label>
  );
};

// const Filter = ({ filter, onChangeFilter }) => (
//   <Fragment>
//     <label className={s.filterLabel}>Find contacts by name</label>
//     <input className={s.filterInput} value={filter} onChange={onChangeFilter} />
//   </Fragment>
// );

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
