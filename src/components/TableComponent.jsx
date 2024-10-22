import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Spinner, Table } from "reactstrap";
import { deleteUser } from "../actions/userAction";

const mapStateToProps = (state) => {
    return {
        users: state.users.getUsersList,
        title: state.users.title,
        error: state.users.errorUserList
    }
}

const mapDispatchToProps = {
    deleteUser
}


function TableComponent(props) {
    const { users, title, error, deleteUser } = props

    const handleDelete = (id) => {
        deleteUser(id)
    }

    return (
        <Container className="mt-4">
            <div className="text-center">
                <h4 className="font-weight-bold">{title}</h4>
            </div>
            <Link to={"/create"}>
                <Button color="primary" className="my-3">Add user</Button>
            </Link>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th colSpan={3} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? users.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{++index}</th>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td className="text-center">
                                <Link to={"/show/" + user.id}><Button color="secondary">Show</Button></Link>
                            </td>
                            <td className="text-center">
                                <Link to={"/edit/" + user.id}><Button color="warning">Edit</Button></Link>
                            </td>
                            <td className="text-center">
                                <Button onClick={() => handleDelete(user.id)} color="danger">Delete</Button>
                            </td>
                        </tr>
                    )) :
                        error ? error : <Spinner color="dark"></Spinner>
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)