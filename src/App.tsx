import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListItem } from './components/ListItem';
import type { User } from './types/users';

const json = [
  {
    id: 1,
    name: '누시다',
    age: 24,
    personalColor: 'blue',
  },
  {
    id: 2,
    name: '시카오카',
    age: 28,
    personalColor: 'pink',
  },
  {
    id: 3,
    name: '고토',
    age: 23,
    personalColor: 'green',
    hobbies: ['game', 'soccer'],
  },
];

export const App = () => {
  
  const [users, setUsers] = useState<User[]>([]);
  console.log('App 렌더링', users);

  // useEffect(() => {
  //   axios.get<User[]>('http://localhost:3000/test').then((res) => {
  //     console.log('axios');
  //     setUsers(res.data);
  //   });
  // }, []);

  useEffect(() => {
    console.log('users 세팅');
    setUsers(json);
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            personalColor={user.personalColor}
            hobbies={user.hobbies}
          />
        );
      })}
    </div>
  );
};
