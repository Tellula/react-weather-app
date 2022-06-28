import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";
import Checkbox from "./checkbox";
import "./search.css";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [citizens, setCitizens] = useState({ citizens: 1000000 });

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=${citizens.citizens}&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const togglePreference = () => {
    const value = citizens.citizens === 1000000 ? 20000 : 1000000;
    setCitizens({ citizens: value });
  };

  return (
    <div>
      <AsyncPaginate
        className="searchBar"
        placeholder="Search for a city..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
      <Checkbox onChange={togglePreference} citizensNumber="20000" />
    </div>
  );
};

export default Search;
