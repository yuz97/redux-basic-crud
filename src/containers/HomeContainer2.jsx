import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../actions/userAction';
import TableComponent from '../components/TableComponent';

const HomeContainer = ({ dispatch }) => {
    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch]);

    return <TableComponent />;
};

export default connect()(HomeContainer);
