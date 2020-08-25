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
                    style={{ 
                        paddingTop: "5px", 
                        paddingBottom: "5px",
                        fontFamily: "'Montserrat', sans-serif",
                    }}
                />
                {/* <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <div class="btn-group" role="group">
                        <button 
                        id="btnGroupDrop1" 
                        type="button" 
                        class="btn btn-secondary dropdown-toggle" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                        style={{ 
                            paddingTop: "4px", 
                            paddingBottom: "4px",
                            
                         }}
                        >
                        </button>
                
                            <button type="button" class="btn btn-secondary" onClick={props.handleSearch} style={{ fontFamily: "'Montserrat', sans-serif", }}>Search Artist</button> */}
                            <button type="button" class="btn btn-secondary" onClick={props.handleSong} style={{ fontFamily: "'Montserrat', sans-serif", }}>Search</button>
              
                    
              
            </div>
        </form>
    );
}



export default SearchForm;