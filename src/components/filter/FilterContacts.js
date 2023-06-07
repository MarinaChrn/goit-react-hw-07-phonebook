import { StyledFilter } from "./FilterContacts.styled";
import { useDispatch } from "react-redux";
import { changeSearch } from "redux/filter/filterSlice";
;

export const FilterContacts = ()=> {
    const dispatch = useDispatch();

    const searchByName = (name) => {
        dispatch(changeSearch(name.toLowerCase()))
    }

    return (
        <div>
            <h3>Find contacts by name</h3>
            <StyledFilter type="text" placeholder="Write name" onChange={(event)=>{searchByName(event.target.value)}}/>
        </div>
    )
}
