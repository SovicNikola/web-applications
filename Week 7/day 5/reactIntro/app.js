const App = () => {
    return (
        <div>
            <h1> This is React</h1>


            <img src="./3.jpg" width="450px" height="450px" />
            <Copy name='BIT' />
        </div>
    )

}

const Copy = (arg) => {
    return (
        <div>
            <p>Copyright {arg.name}</p>
        </div>

    )
}
const rootEl = document.getElementById('root')
ReactDOM.render(
    <App />,
    rootEl
)