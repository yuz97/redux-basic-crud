import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import EditUserComponent from '../components/EditUserComponent'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getUserDetail } from '../actions/userAction'

function EditUserContainer() {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetail(id))
    }, [])


    return (
        <Container>
            <EditUserComponent id={id} />
        </Container>
    )
}

export default connect()(EditUserContainer)