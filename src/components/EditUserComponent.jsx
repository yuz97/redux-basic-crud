import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { editUser, updateUser } from '../actions/userAction'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert, Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

function EditUserComponent(props) {
    const { userData, editUser, updateUser } = props

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()
    const user = useParams() //id user


    useEffect(() => {
        editUser(user.id)
    }, [])


    useEffect(() => {
        if (userData) {
            setId(userData.id)
            setName(userData.name)
            setAddress(userData.address)
            setPhone(userData.phone)
        }
    }, [userData])



    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = { id, name, address, phone }

        if (!id || !name || !address || !phone) {
            setError("all fields is required")
            return
        }
        updateUser(userData, user.id)
        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert color='danger'>{error}</Alert>}
            <Col md="6">
                <FormGroup hidden >
                    <Label>
                        Id
                    </Label>
                    <Input value={id || ''} onChange={(e) => setId(e.target.value)} type='text' placeholder='masukkan nama' />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>
                        Name
                    </Label>
                    <Input value={name || ''} onChange={(e) => setName(e.target.value)} type='text' placeholder='masukkan nama' />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                    <Label>
                        Address
                    </Label>
                    <Input value={address || ''} onChange={(e) => setAddress(e.target.value)} type='text' placeholder='masukkan alamat lengkap' />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                    <Label>
                        Phone
                    </Label>
                    <Input value={phone || ''} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='nomor telephone' />
                </FormGroup>
            </Col>

            <Button color='dark' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.users.editUserList
    }
}

const mapDispatchToProps = {
    editUser,
    updateUser
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUserComponent)