import React from "react";
import { FormControl, Image, Button, Row, Col, InputGroup } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { FaTwitter, FaMediumM, FaInstagram } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import Tab from '../TabProfile/TabProfile'
import profilepic from '../../assets/profilepic.jpg'
import './ProductForm.css'
import FormDetail from './FormDetail'
export default function ProductForm() {

    return (
        <div className="card-profile-style-padding" >
            <Row>
                
                <Col md={3}>
                    <div className="card-profile">
                        <Image src={profilepic} className="profile-pic" />
                        <h4 className="title-profile">Lily Roze</h4>
                        <h4 className="title-profile-l1roze">@l1roze</h4>
                        <h6 className="text-profile">
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
                        </h6>
                        <InputGroup className="mb-3" >

                            <FormControl
                                value="HJSJAHJSHJGHJHSJHDJDDDDSJDSDSJ...."
                                className="input-profile"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <p> <BiWorld color="blue" />  https://unitok.template</p>
                        <p> <FaInstagram /> <FaTwitter className="margin-icon-profile" /> <FaMediumM /></p>
                        <hr />
                        <div className="flex-profile">
                            <h4 className="title-profile-nymber">3829<br /> Followers</h4>
                            <Button className="follow-button">Follow</Button>
                        </div>


                    </div>
                </Col>
                <Col md={9}>
                    <h1 className="collectible">Create collectible item</h1>
                        <FormDetail/>
                </Col>
            </Row>
        </div>
    );
}

