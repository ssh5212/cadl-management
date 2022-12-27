import React from 'react';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell align='center'>{this.props.id}</TableCell>
                <TableCell align='center'>{this.props.name}</TableCell>
                <TableCell align='center'>{this.props.studentId}</TableCell>
                <TableCell align='center'>{this.props.department}</TableCell>
                <TableCell align='center'>{this.props.gender}</TableCell>
                <TableCell align='center'>{this.props.etc}</TableCell>
            </TableRow>
        );
    }
}

export default Customer;
