const user = () => {
  return {
    id: '1',
    username: 'johndoe',
  };
};

const users = () => {
  return [
    {
      id: '1',
      username: 'johndoe',
    },
    {
      id: '2',
      username: 'johndoe2',
    },
    {
      id: '3',
      username: 'johndoe3',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
