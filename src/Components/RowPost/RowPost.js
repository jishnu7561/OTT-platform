import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import axios from '../../Axios'
import { imageUrl } from '../../Constants/Constants'

function RowPost(props) {

    const [movies, setMovie] = useState([])

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data.results)
        setMovie(response.data.results)
      }).catch(err=>{alert("network error")})
    })
    

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj) => (
                <div key={obj.id} className="posterContainer">
                    <p className="posterTitle">{obj.title}</p>
                    <img className="poster" src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RowPost