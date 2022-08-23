const user = () => {
  return {
    id: '1',
    userName: 'johndoe',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'johndoe',
    },
    {
      id: '2',
      userName: 'johndoe2',
    },
    {
      id: '3',
      userName: 'johndoe3',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
