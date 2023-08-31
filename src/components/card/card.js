
export default function ContainerCard(props) {

    let  urlSplited = props.pokemon.url.split('/')

    return (
        <div className="col-md-4" >
            <div className="list-group">
                <h2>{props.pokemon.name}</h2>
                <p>POKEMON # {parseInt(urlSplited[6])}</p>
                <a className="btn btn-sm" href={"/detail?id=" + urlSplited[6]}> VIEW DETAILS </a>   
            </div>
            <br />
        </div>
    )

}