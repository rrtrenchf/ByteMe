import React from "react";


//handleInputChange will filter the employees by last name or first name
function SearchForm(props) {

    // const [showResults] = React.useState(false)
    // const onClick = () => setShowResults(true)

    return (
        <form className="text-center">
            <div className="input-group mb-3"  style={{ marginLeft: "425px" }}>
                <label htmlFor="search"></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="searchbox text-center"
                    placeholder="Search by Artist or Song"
                    id="search"
                />
                <div class="input-group-append">
                <button type="button" class="btn btn-secondary">Make my Playlist!</button>
                </div>
                {/* <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="searchbox text-center"
                    placeholder="Search by Song"
                    id="search"
                /> */}
            </div>
            <div>
                <a href="#" onClick={props.handleClick}>
                    Want a different location?
                </a>  
                {/* { showResults ? 
                <input
                    id="results"
                    type="text"
                    name="zip"
                    placeholder="Enter zip code"
                    value="Insert zip code"
                >
                </input> : "" } */}
      </div>
    </form>
  );
}

export default SearchForm;