import type { User } from '../types/users';

export const ListItem = (props: User) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{color: personalColor}}>
      {id} : {name} ({age})
    </p>
  );
};
