# Crowdly
### Basic Social Media app created in react-native
## under development...
***
#### depedencies installed
```
yarn add express cross-env body-parser
yarn add -D babel-cli babel-plugin-transform-object-rest-spread babel-preset-env
yarn add mongoose
yarn add nodemon
yarn add apollo-server-express
yarn add graphql express-graphql
```
***
#### In case of server connection failed mongoDB
1. Go to Control Panel and click on Administrative Tools.
2. Double click on Services. A new window opens up.
3. Search MongoDB.exe. Right click on it and select Start.

#### Faker
##### use to create random fake or mock data in your project
```
yarn add -D faker
```
```javascript
import faker from 'faker';

import Tweet from '../models/Tweet';

const TWEETS_TOTAL = 10;

export default async () => {
  try {
    await Tweet.remove();

    await Array.from({ length: TWEETS_TOTAL }).forEach(async () => {
      await Tweet.create({
        text: faker.lorem.paragraphs(1),
      })
    });
  } catch (error) {
    throw error;
  }
}
```

add this in src/index.js

```javascript
mocks().then(() => {
  app.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App running on port: ${constants.PORT}`);
    }
  });
});
```

