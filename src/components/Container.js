import { useState } from "react";

export const Container = () => {

    return (
        <section className="card-container">
            <Card 
                cardHeader={'Cat Image'}
                cardBody={'This is description of the card product, you can type anything here'}
            />

            <Card 
                cardHeader={'Dog Image'}
                cardBody={'This is description of the card product, you can type anything here'}
            />

            <Card 
                cardHeader={'Elephant Image'}
                cardBody={'This is description of the card product, you can type anything here'}
            />

            <Card 
                cardHeader={'Giraffe Image'}
                cardBody={'This is description of the card product, you can type anything here'}
            />

            <Card 
                cardHeader={'Monkey Image'}
                cardBody={'This is description of the card product, you can type anything here'}
            />

            <Card 
                cardHeader={'Horse Image'}
                cardBody={'This is description of the card product, you can type anything here'}
            />
        </section>
    );
}

export const Card = ({cardHeader, cardBody}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{cardHeader}</h3>
            </div>
            <div className="card-image">
                
            </div>
            <div className="card-body">
                <p>{cardBody}</p>
            </div>

            <div className="number-of-items">
                <Bttns />
            </div>
        </div>

    );
}

export const Bttns = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="bttns">
            <button className="decrease" onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>-</button>
            <span className="result">{count}</span>
            <button className="increase" onClick={() => count < 20 ? setCount(count + 1) : setCount(count)}>+</button>
        </div>
    );
}