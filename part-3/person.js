function Person(props) {
    const {name, age, hobbies} = props;
    return (
        <div>    
            <p>Learn some information about this person</p>
            <h3>{age >= 18 ? "please go vote" : "you must be 18"}</h3> 
            <p>{name.length > 8 ? name.substring(0,6) : name}</p>
            <ul>    
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}