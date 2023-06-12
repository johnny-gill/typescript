import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListItem } from './components/ListItem';
import type { User } from './types/users';

export const App = () => {
  console.log('App 렌더링');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('http://localhost:3000/test').then((res) => {
      console.log('axios');
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <ListItem
            id={user.id}
            name={user.name}
            age={user.age}
            personalColor={user.personalColor}
          />
        );
      })}
    </div>
  );
};
