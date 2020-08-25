import React from "react";


const SearchForm = (props) => {

    return (
        <form className="text-center">
            <div className="input-group mb-3" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <label htmlFor="search"></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="searchbox text-center"
                    placeholder="Search by Artist or Song"
                    id="search"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                />
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <div class="btn-group" role="group">
                        <button 
                        id="btnGroupDrop1" 
                        type="button" 
                        class="btn btn-secondary dropdown-toggle" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                        style={{ paddingTop: "4px", paddingBottom: "4px" }}
                        >
                        </button>
                        <container class="dropdown-menu" >
                            <button type="button" class="btn btn-secondary" onClick={props.handleSearch}>Search Artist</button>
                            <button type="button" class="btn btn-secondary" onClick={props.handleSong} >Search Song</button>
                        </container>
                    </div>
                </div>
            </div>
        </form>
    );
}



export default SearchForm;