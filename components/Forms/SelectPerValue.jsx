import {useState} from 'react';
import SearchableCombobox from "../Inputs/SearchableCombobox";
const perValues = [ {name: 'Kg'}, {name: 'Stuk'}, {name: 'Liter'}]

const SelectPerValue = ({select, setSelect, defaultValue}) => {
    const [query, setQuery] = useState('')
    const filteredSearch =
        query === ''
            ? perValues
            : perValues.filter((item) => {
                return item.name.toLowerCase().includes(query.toLowerCase())
            })
    const handleChange = (event) => {
        setSelect({ name: event.name })
    }
    return (
        <SearchableCombobox
            filteredQuery={filteredSearch}
            defaultValue={defaultValue}
            query={query}
            setQuery={setQuery}
            data={perValues}
            select={select}
            handleChange={handleChange}
            setSelect={setSelect}
        />
    );
};

export default SelectPerValue;
