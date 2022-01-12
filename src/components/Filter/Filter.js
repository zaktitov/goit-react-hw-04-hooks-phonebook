import { Fragment } from "react/cjs/react.production.min";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ filter, onChangeFilter }) => (
  <Fragment>
    <label className={s.filterLabel}>Find contacts by name</label>
    <input className={s.filterInput} value={filter} onChange={onChangeFilter} />
  </Fragment>
);

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
