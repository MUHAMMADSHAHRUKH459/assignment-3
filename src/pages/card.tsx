// for components

const Card = () => {
    let message : string = 'this card for components'
    return (
        <div className="card">
            <h1> {message} </h1>

        </div>
    )
};

export const Card2 = () => {
    let message : string = 'this card2 for components'
    return (
        <div className="card">
            <h1> {message} </h1>

        </div>
    )
}

export default  Card;