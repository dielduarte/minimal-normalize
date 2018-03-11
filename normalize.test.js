const normalize = require('./index');

test('should return a normalized object by id', () => {
  const array = [
    {
      id: '123131321313',
      name: 'name1'
    },
    {
      id: '728292',
      name: 'name2'
    },
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

  expect(normalize(array, 'id')).toEqual(normalizedObject);
});