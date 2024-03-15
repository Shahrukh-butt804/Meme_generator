import React, { useState } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { Form, Col, Row } from "react-bootstrap"



function Edit() {
    const [params] = useSearchParams();
    const { id } = useParams();
    let [text1, setText1] = useState("")
    let [text2, setText2] = useState("")
    let [isGenerated, setGenerated] = useState(false)
    let [generatedLink, setGeneratedLink] = useState('')




    const generate = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${id}&username=shahrukh_butt&password=imgflip.com&text0=${text1}&text1=${text2}`

        fetch(url)
            .then((res) => {
                // console.log(res)
                setGeneratedLink(res.url)
                setGenerated(true)
            })
    }

    return (
        <>
            <h1 className='text-center mt-3'>Generate MEME With Most Famous Template</h1>
            <div className="container">
                <img src={params.get("url")} key={params.get("id")} width={400} alt="" />
            </div>

            <div className="container">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                        <b>Text 1</b>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type='text' onChange={(e) => setText1(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                        <b>Text 2</b>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={(e) => setText2(e.target.value)} type="text" />
                    </Col>
                </Form.Group>
            </div>
            <div className="container">
                <button className="btn btn-success" onClick={generate}>Generate</button>

            </div>

            {isGenerated ?
                <>
                    <a href={generatedLink} target='_blank'>Click Here To See Your Meme</a>
                </>
                :
                <></>
            }
        </>

    );
}

export default Edit

//  userName =  shahrukh_butt
//  passwod = imgflip.com


