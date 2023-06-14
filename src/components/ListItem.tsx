import type { User } from '../types/users';

export const ListItem = (props: User) => {
  const { id, name, age, personalColor, hobbies } = props;
  return (
    <p style={{ color: personalColor }}>
      {id} : {name} ({age}) {hobbies?.join(' / ')}
    </p>
  );
};

ListItem.defaultProps = {
  personalColor: 'gray',
};
