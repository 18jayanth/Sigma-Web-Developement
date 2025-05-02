import './Card.css'

export default function Card(props)
{ return(
    <div className="card">
        <h1>{props.title}</h1>
        <img src={props.movie}/>
        
        <p>{props.description}</p>
    </div>
)
}