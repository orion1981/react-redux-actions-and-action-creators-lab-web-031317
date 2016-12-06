# Lights...Camera...Action!

![Camera](https://media.giphy.com/media/10bL6SqRBRfMUU/giphy.gif)

## Objectives

1. Build out action creators that return the correct data.
2. Create actions to read, create, and destroy data.

## Instructions

If you haven't already, make sure to run `npm insatll -g webpack-dev-server` to get the webpack dev server installed on your machine. 

>Note: If you're on the Learn IDE, this will have already been done for you. 

Imagine we're building a movie app for users to keep track of their favorite movies. We'll be building out action creator functions so that the user can take the following actions.

1. Add a new movie
2. Delete an existing movie
3. Update their username
4. Reset their username to the default username of 'default'

## How to run webpack server and tests

Make sure that you run `npm install` first.

In one terminal instance run `npm start`, and in a second terminal instance run `npm run test:watch`. This will start your Webpack Dev Server and your test suite that watches your code. Open the web browser and go to the port specified in the Webpack Dev Server. (ex. http://localhost:8080)

>Note: If you're using the Learn IDE, you can use [jobs](https://help.learn.co/hc/en-us/articles/229922347-Running-multiple-processes-in-the-IDE-terminal) rather than multiple terminals. 

## But Where Do I Write My Code?

By convention in Redux, we write our action creator functions in a folder called `actions`. For a small project, we can define all of the actions in a single file file called `index` and export them as named exports.

For example:

```javascript
// src/actions/index.js

export function incrementCount(){
  return {
    type: 'INCREMENT_COUNT'
  }
}
```
