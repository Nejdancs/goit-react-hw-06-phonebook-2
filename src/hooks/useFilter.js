import { set } from 'redux/actions/filterAction';
import { useSelector, useDispatch } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const setFilter = value => {
    dispatch(set(value));
  };

  return { filter, setFilter };
};
