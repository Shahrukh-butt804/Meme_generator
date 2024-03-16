import { useEffect, useState } from "react";
import {Button,Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  let [meme, setmeme] = useState([])

  useEffect(() => {

    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        let data = res.json()
        return data
      })
      .then((data) => {
        setmeme(data.data.memes)

      }).catch((error) => console.log(error))
  }, [])




  return (
    <>
      <h1 className="text-center mt-3 text-decoration-underline">MEME Generator App</h1>

      <div className="row ms-4 mt-3">
        {meme ?
          meme.map((elem) => {
            return (
              <Card style={{ width: '17rem', margin: "10px"}} key={elem.id}>
                <Card.Img variant="top" src={elem.url} style={{height:'280px'}} />
                <Card.Body>
                  <Card.Title>{elem.name.slice(0,18)}</Card.Title>
                 <Button className="mt-2 " variant="primary" onClick={(e) => {
                    navigate(`/edit/${elem.id}?url=${elem.url}`)
                  }}>Edit</Button>
                </Card.Body>
              </Card>
            )

          })
          :
          <></>
        }
      </div>
    </>
  );
}

export default App