import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
      <h1 className="text-center mt-3 ">MEME Generator App</h1>

      <div className="row">
        {meme ?
          meme.map((elem) => {
            return (
              <Card style={{ width: '18rem', margin: "10px" }} key={elem.id}>
                <Card.Img variant="top" src={elem.url} />
                <Card.Body>
                  <Card.Title>{elem.name}</Card.Title>
                  <Button variant="primary" onClick={(e) => {
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