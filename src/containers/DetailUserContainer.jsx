import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from 'reactstrap'
import { getUserDetail } from '../actions/userAction'
import DetailUserComponent from '../components/DetailUserComponent'

function DetailUserContainer(props) {
    const { id } = useParams()
    const { dispatch } = props

    useEffect(() => {
        dispatch(getUserDetail(id))
    }, [dispatch])

    return (
        <Container>
            <DetailUserComponent />
        </Container>
    )
}

export default connect()(DetailUserContainer)