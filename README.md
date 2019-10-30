# NodeJS Typescript starter pack

This is a  default repository for starting NodeJs project using typescript

## Test librairies

1. installing librairies  
first we are going to install mocha and chai. **Mocha** is the testing librairy that we are going to use, while **chai** is the assertion librairy for mocha, it enables us the use of some keywords for testing like *expect, assert ...*  
To install mocha and chai, we will do:  
`npm i - D mocha chai`
  
  Once our libraries are installed, typescript willnot be able to recognize them, because they are written in javascript, so we need to install what we call *types definitions* for our dependencies librairies.  
`npm i -D @types/mocha @types/chai`  

2. Setting up test  
Now that we have our dependencies installed, we can now start writing test in out application. we will start by creating a directory for test for our test, we will create it at the root of our repository, so it will be easy to spot and manage.  
`mkdir tests`  

We are going to create our first test. in the folder *tests*, we are going to create a new file called **app.test.ts** which by the name you surely understand, is going to be our test file for our app.ts file.






