function Card(props){
    return(
        <div>
            {props.title ? <h1>{props.title}</h1>:undefined}
            <div>{props.children}</div>
            {props.footer ? <h1>{props.footer}</h1>:undefined}
        </div>
    );
}
export default Card