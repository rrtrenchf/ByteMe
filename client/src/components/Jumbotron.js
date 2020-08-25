import React, { Component } from 'react'

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron" style={{ }}>
                <header className="display-1"
                    style={{
                        backgroundColor: "transparent",
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