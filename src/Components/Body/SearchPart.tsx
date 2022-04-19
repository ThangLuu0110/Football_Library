import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface searchPartProps{
    value: string;
    updateValue: (e: any) => any;
    handleSearch: any;
}

export default function SearchPart({ value, updateValue, handleSearch}: searchPartProps){
    const searchRef = React.createRef<HTMLInputElement>();

    const handleSearchValue = () => {
        handleSearch();
        searchRef.current?.focus();
    }

    return (
        <div className="body__search">
            <input
                className="body__search-input"
                value={value} 
                onChange={updateValue}
                ref={searchRef}
                type="search"
            />
            <button
                className="body__search-button"
                onClick={handleSearchValue}
                type="button"
            >
               <BsSearch />
            </button>
        </div>
    )
}

