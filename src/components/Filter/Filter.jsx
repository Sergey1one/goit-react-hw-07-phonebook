import { setFilter } from "redux/filterSlice"
import { useSelector,useDispatch } from "react-redux";
import { selectFilter } from "redux/selectors";


const Filter = () => {
    const dispatch = useDispatch();
    const filter=useSelector(selectFilter)

    const changeFilter = (e) => {
        const {value} = e.currentTarget;
        dispatch(setFilter(value));
    }

    
    
    return (
        <label> Find contact by name
            <input type='text' value={filter} onChange={changeFilter} />
            </label>
   )
}

export default Filter

