import  {useState} from 'react';
import {filteredSearch} from "../../utils/helpers";
import SearchableCombobox from "../Inputs/SearchableCombobox";
const categoryValues = [{name: 'BBQ'}, {name: 'Kip'}, {name: 'Vlees'}, {name: 'Diversen'}, {name: 'Vis'}]
const SelectCategory = ({ select, setSelect}) => {
    const [query, setQuery] = useState('')
    const filteredSearch = query === ''
        ? categoryValues
        : categoryValues.filter((item) => {
         return   item.name.toLowerCase().includes(query.toLowerCase())
        })

    const handleChange = (event) => {

        setSelect( (prev)=> (
                [...prev, event.name]
        ))
    }

    return (
        <SearchableCombobox
            filteredQuery={filteredSearch}
            query={query}
            setQuery={setQuery}
            data={categoryValues}
            select={select}
            handleChange={handleChange}
            setSelect={setSelect}
        />
    );
};

export default SelectCategory;
