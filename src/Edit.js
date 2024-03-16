import React, { useState } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { Form, Col, Row, Spinner } from "react-bootstrap"



function Edit() {
    const [params] = useSearchParams();
    const { id } = useParams();
    let [text1, setText1] = useState("")
    let [text2, setText2] = useState("")
    let [isLoading, setLoading] = useState(false)






    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };

    const generate = () => {
        setLoading(true)
        let url = `https://api.imgflip.com/caption_image?template_id=${id}&username=shahrukh_butt&password=imgflip.com&text0=${text1}&text1=${text2}`

        fetch(url)
            .then((res) => {
                // console.log(res)
                setLoading(false)
                openInNewTab(res.url)
                setText1("")
                setText2("")
            })
    }

    return (
        <>
            <h1 className='text-center mt-3 text-uppercase'>Generate MEME With Famous Template</h1>

            <div className="d-flex ms-5 flex-wrap">
                <div className="one">
                    <div className="container">
                        <img src={params.get("url")} key={params.get("id")} width={400} alt="" />
                    </div>
                </div>


                <div className="two w-50">
                    <div className="container">
                        <div className="container-fluid mt-3">
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    <b>Text 1</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control className='border border-success' value={text1} type='text' onChange={(e) => setText1(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    <b>Text 2</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control className='border border-success' value={text2} onChange={(e) => setText2(e.target.value)} type="text" />
                                </Col>
                            </Form.Group>
                        </div>


                        <div className="container ">
                            <div className="d-flex mb-4">
                                <button className="btn btn-success" onClick={generate}>Generate</button>
                                <div className="container mt-1 text-end">
                                    {isLoading ?
                                        <Spinner animation="border" size="md" variant="success" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Edit

//  userName =  shahrukh_butt
//  passwod = imgflip.com


