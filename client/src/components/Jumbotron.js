import React, { Component } from 'react'

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron" style={{ opacity: ".6" }}>
                <header className="display-4"
                    style={{
                        position: "relative",
                        textAlign: "center",
                        fontFamily: "'Fjalla One', sans-serif",
                        fontSize: "80px",
                        fontWeight: "bold",
                        color: "black"
                    }}>
                    Sweater Weather
        </header>
            </div>
        )
    }
}

export default Jumbotron;