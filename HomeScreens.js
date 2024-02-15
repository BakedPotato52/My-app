import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar'

function homeScreen() {
    return (
        <>
            <Container>
                <CategoriesBar>
                    <Row>
                        {
                            [...new Array(20)]
                                .map(() =>
                                    <col lg={3} md={4}>
                                        <video />

                                    </col>)
                        }

                    </Row>
                </CategoriesBar>
            </Container>
        </>
    )
}

export default homeScreen
