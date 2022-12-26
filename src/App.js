import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

const customers = [
    {
        id: 1,
        image: 'https://placeimg.com/64/64/1',
        name: '나동ssss',
        birthday: '970808',
        gender: '남자',
        job: ' 대학생',
    },
    {
        id: 2,
        image: 'https://placeimg.com/64/64/2',
        name: '홍길',
        birthday: '970808',
        gender: '남자',
        job: ' 대학생',
    },
    {
        id: 3,
        image: 'https://placeimg.com/64/64/3',
        name: '이순',
        birthday: '970808',
        gender: '남자',
        job: ' 대학생',
    },
];

class App extends Component {
    render() {
        return (
            <div>
                {customers.map(c => {
                    return (
                        <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                        />
                    );
                })}

                {/* <Customer
                    id={customers[0].id}
                    image={customers[0].image}
                    name={customers[0].name}
                    birthday={customers[0].birthday}
                    gender={customers[0].gender}
                    job={customers[0].job}
                /> */}
            </div>
        );
    }
}

export default App;
