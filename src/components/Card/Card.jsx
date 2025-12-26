import './Card.css';

export default function Card(props) {
    // props - מאפיינים
    // אוביקט עם כל התכונות ששלחנו לתגית
    console.log(props);

    // const str = `<div>${props.name}</div>`;
    // const css = {
    //     backgroundColor: props.mark >= 95 ? 'lightgreen' : 'lightblue'
    // };

    return (
        <div className='card' style={{ background: props.mark >= 95 ? 'lightgreen' : 'lightblue' }}>
            <h2>hello {props.name}!!!!!!!!</h2>
            {/* <p>your mark is {parseFloat(props.mark) + 3}</p>
            <p>your mark is {Number(props.mark) + 3}</p>
            <p>your mark is {+props.mark + 3}</p> */}
            <p>your mark is {props.mark}</p>
            <p>after update is {Math.min(100, props.mark + 3)}</p>
        </div>
    )
}