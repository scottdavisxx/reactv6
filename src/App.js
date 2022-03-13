const Pet = (props) => {
    return React.createElement("div",{}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),

    ])
}

const App = () => {
    return React.createElement (
        "div",
        {},
        [
            React.createElement("h1",{id: "my-brand"}, "Adopt Me!"),
            React.createElement(Pet, {name: "Murphy", animal: "Dog", breed: "Golendoodle"}),
            React.createElement(Pet, {name: "Montana", animal: "Dog", breed: "Pomeranian"}),
            React.createElement(Pet, {name: "Toby", animal: "Dog", breed: "Golendoodle"}),
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))