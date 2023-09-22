import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filteredContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    dispatch(filteredContacts(e.target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};
