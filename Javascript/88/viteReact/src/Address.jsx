export default function Address(props) {
    const {street, city, state, zip} = props;
    return (<h5>My address is {street} {city} , {state} {zip} </h5>
    )
}


