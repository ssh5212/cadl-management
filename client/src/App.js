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

class App extends Component {
    // 서버에 접근하여 데이터를 받는 기능
    state = {
        customers: '',
    };

    // 모든 컴포넌트가 마운트 완료 되었을 때 실행
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ customers: res }))
            .catch(err => console.log('Com', err));
    }

    // 비동기적으로 데이터를 접근하고 값을 반환
    callApi = async () => {
        const response = await fetch('/api/customers', {
            headers: {
                Accept: 'application / json',
            },
        });
        const body = await response.json();
        console.log('hola');
        return body;
    };

    render() {
        const { classes } = this.props;
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
                        {this.state.customers
                            ? this.state.customers.map(c => {
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
                              })
                            : ''}
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
