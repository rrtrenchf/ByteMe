import React from "react";

//handleInputChange will filter the employees by last name or first name
function SearchForm(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="searchbox text-center"
          placeholder="Search by Artist"
          id="search"
        />
         <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="searchbox text-center"
          placeholder="Search by Song"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;