# NodeJS Typescript starter pack

This is a  default repository for starting NodeJs project using typescript. Here, you will find a basic startup in other to get you started. this is a TDD based template, we will be also configuring in a more *efficient* way routes, controllers and other concept.
If you have any inquiries do not hesitate to contact me mail@jrking-dev.com. If you want to contribute, first open the issue then we will discuss about it and get you started. stay tune for more.

## Test librairies

1. installing librairies  
first we are going to install mocha and chai. **Mocha** is the testing librairy that we are going to use, while **chai** is the assertion librairy for mocha, it enables us the use of some keywords for testing like *expect, assert ...*  
To install mocha and chai, we will do:  
`npm i - D mocha chai`
  
  Once our libraries are installed, typescript willnot be able to recognize them, because they are written in javascript, so we need to install what we call *types definitions* for our dependencies librairies.  
`npm i -D @types/mocha @types/chai`  

Then we are going to install **chai-http** which will enable us to do all of our http request, so to install it, we are going to do:
`npm i --save-dev chai-http`
We also need to install as you might already know, the types dependencies for typescript, so to  do that, as you might have guessed, we will add **@types** to the same install command.
`npm i --save-dev @types/chai-http`

2. Setting up test  
Now that we have our dependencies installed, we can now start writing test in out application. we will start by creating a directory for test for our test, we will create it at the root of our repository, so it will be easy to spot and manage.  
`mkdir tests`  

We are going to create our first test. in the folder *tests*, we are going to create a new file called **app.test.ts** which by the name you surely understand, is going to be our test file for our app.ts file.  
I am going to paste our basic test in app.test.ts then I'm going to explain.

```ts
import app from "../src/app";
import 'mocha';
import chai from 'chai';
import chaiHttp = require('chai-http');

//use chai-http
chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;

describe('Basic test of the app.ts file', () => {
    it('should return hello world', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.text).to.eql('Hello world');
            })
    })
})
```

also I might as well give you the route in our app.ts file that the test uses.  

```ts
app.get('/', (req, res) => {
  res.send('Hello world');
});
```
