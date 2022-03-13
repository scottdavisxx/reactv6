const Pet = () => {
    return React.createElement("div",{}, [
        React.createElement("h2", {}, "Murphy"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Goldendoodle"),

    ])
}

const App = () => {
    return React.createElement (
        "div",
        {},
        [
            React.createElement("h1",{}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))