import { Container } from '@material-ui/core';
import React from 'react';

const NotFound = () => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <h2>404 error!</h2>
            <h3>The page not found.</h3>
        </Container>
    );
};

export default NotFound;