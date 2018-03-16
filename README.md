# Minimal normalize
normalizing your data before sending to your store

## How to use 

First install

```js
yarn add minimal-normalize
```

import `normalize` function and uses to normalizing your data before sending to your store, example:

```js
import normalize from 'minimal-normalize';

const results = wait fakeRequest('fakeUrlAPI');

dispatch({
  type: 'ACTION_NAME',
  results: normalize(results.data, 'id')
});

```

So if you receiving a array of users like:

```
 [
   {
     id: '123123',
     name: 'user 1',
     email: 'user1@example.com'
   },
   {
     id: '234234',
     name: 'user 2',
     email: 'user2@example.com'
   }
 ]
```

And normalized by id, the results will be like:

```
 {
   123123: {
     id: '123123',
     name: 'user 1',
     email: 'user1@example.com'
   },
   234234: {
     id: '234234',
     name: 'user 2',
     email: 'user2@example.com'
   }
 }

```
With this doing actions to manipulating a data is easier and sometimes faster, your code can be easier to understand and you can write less code :)

`OBS: instead of normalizing your data by id, you can uses normalize(array, 'desired key here') and normalizing your data by any key of the object`



