import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        user: state.users.getUserDetail,
        error: state.users.errorUserList
    }
}

function DetailUserComponent(props) {
    const { user } = props
    return (
        <Table striped>
            <tbody>
                <tr>
                    <td width={200}>Name</td>
                    <td width={2}>:</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td width={200}>Address</td>
                    <td width={2}>:</td>
                    <td>{user.address}</td>
                </tr>
                <tr>
                    <td width={200}>Phone Number</td>
                    <td width={2}>:</td>
                    <td>{user.phone}</td>
                </tr>

            </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, null)(DetailUserComponent)