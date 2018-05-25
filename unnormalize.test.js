const { unnormalize } = require('./index');

test('should return a array with object normalized passed', () => {
  const array = [
    {
      id: '728292',
      name: 'name2'
    },
    {
      id: '123131321313',
      name: 'name1'
    }
  ];

  const normalizedObject = {
    123131321313: {
      id: '123131321313',
      name: 'name1'
    },
    728292: {
      id: '728292',
      name: 'name2'
    }
  };

  expect(unnormalize(normalizedObject)).toEqual(array);
});