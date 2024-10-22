import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userAction'
import { Alert, Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom'



function FormComponent({ createUser }) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => setError(false), 3000)
    }, [error])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = { name, address, phone }

        //validasi form email,address,phone
        if (!name || !address || !phone) {
            setError('All fields are required');
            return;
        }

        try {
            await createUser(userData)
            setName('')
            setAddress('')
            setPhone('')
            setError(false)

            navigate('/')
        } catch (error) {
            setError('gagal tambah user')
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert color='danger'>{error}</Alert>}
            <Col md="6">
                <FormGroup>
                    <Label>
                        Name
                    </Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='masukkan nama' />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                    <Label>
                        Address
                    </Label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} type='text' placeholder='masukkan alamat lengkap' />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                    <Label>
                        Phone
                    </Label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='nomor telephone' />
                </FormGroup>
            </Col>

            <Button color='dark' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

const mapDispatchToProps = {
    createUser
}


export default connect(null, mapDispatchToProps)(FormComponent)
