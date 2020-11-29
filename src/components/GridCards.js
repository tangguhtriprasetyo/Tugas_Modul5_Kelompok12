import React from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';
import { IMAGE_BASE_URL } from '../Config';

function GridCards(props) {

    let { key, image, movieId, movieName, characterName } = props
    const POSTER_SIZE = "w154";

    
        return (
            <Col key={key} span={8}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{ width: '25%', height: '320px' }} alt={movieName} src={image} />
                    </a>
            </Col>
        )
    }



export default GridCards
