import React, {useState} from 'react';
import { Label, TextInput } from "flowbite-react";
import './SearchBar.css'
const SearchBar = ({hidden}) => {
    const [isHidden, setIsHidden] = useState(hidden)

    return isHidden ? '' :
        <div className="flex max-w-md flex-col gap-4">
            <div>
                <input type="text" id="small-input" className="searchbar block w-full p-2 border border-gray-300 rounded-2xl text-xs  " />
            </div>
        </div>
};

export default SearchBar;