import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

const customers = [
    {
        id: 1,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 2,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
    {
        id: 3,
        name: '신승헌',
        studentId: '201621751',
        department: '컴공',
        gender: '남자',
        etc: '-',
    },
];

class App extends Component {
    render() {
        return (
            <TableContainer
                component={Paper}
                sx={{
                    maxHeight: '300px',
                    maxWidth: '1080px',
                }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>번호</TableCell>
                            <TableCell align='center'>이름</TableCell>
                            <TableCell align='center'>학번</TableCell>
                            <TableCell align='center'>학과</TableCell>
                            <TableCell align='center'>성별</TableCell>
                            <TableCell align='center'>기타</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => {
                            return (
                                <Customer
                                    key={c.id}
                                    id={c.id}
                                    name={c.name}
                                    studentId={c.studentId}
                                    department={c.department}
                                    gender={c.gender}
                                    etc={c.etc}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
        // return (
        //     <Paper className='classes.root'>
        //         <Table className='classes.table'>
        // <TableHead>
        //     <TableRow>
        //         <TableCell>번호</TableCell>
        //         <TableCell>이름</TableCell>
        //         <TableCell>학번</TableCell>
        //         <TableCell>학과</TableCell>
        //         <TableCell>성별</TableCell>
        //         <TableCell>기타</TableCell>
        //     </TableRow>
        // </TableHead>
        // <TableBody>
        //     {customers.map(c => {
        //         return (
        //             <Customer
        //                 key={c.id}
        //                 id={c.id}
        //                 name={c.name}
        //                 studentId={c.studentId}
        //                 department={c.department}
        //                 gender={c.gender}
        //                 etc={c.etc}
        //             />
        //         );
        //     })}
        // </TableBody>
        //         </Table>
        // </Paper>
        // );
    }
}

export default App;
