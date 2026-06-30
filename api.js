const express = require('express'); // import express JS package
const app = express() // create the object for the express factory function
const port = 3000 // Does not provide the official port number


//Get the Data
app.get('/getUser', (req, res) => {
  res.send('Get User Data')
})

//Post or Create the Data
app.post('/createUser-login', (req, res) => {
    //destructuring
    var {username, password} =req.query;

    if (username == "" || username == undefined) 
    {
        //Username Failure Response
         res.status(400).send('Provide the Username!')
    }
    else if (password == "" || password == undefined)
    {
         //Password Failure Response
         res.status(400).send('Provide the Password!')    
    }
     else if (username == "ajay@gmail.com" && password == "Aji")
    {
         //Password Failure Response
         res.status(200).send('Your details are saved')    
    }
    else{
        //Failure Response
        res.status(400).send('Please provide the proper details!')
    }
})

//update the User Data
app.put('/updateUser-login', (req, res) => {

    var { username, password } = req.query;

    if (!username) {
        return res.status(400).send("Provide the New Username!");
    }

    else if (!password) {
        return res.status(400).send("Provide the New Password!");
    }

     else if (username == "ajay@gmail.com" && password == "Aji") {
        return res.status(400).send("User Data not updated");
    }
    
    else if (username !== "ajay@gmail.com" && password != "Aji") {
        return res.status(200).send("Updated user data successfully!");
    }

    else{
        res.status(400).send("Please Provide the correct data!")
    }

   
});

//Delete User Data
app.delete('/deleteUser-login', (req, res) => {

    var { username,password } = req.query;

    if (!username) {
        return res.status(400).send("Provide the Username!");
    }

    else if (!password) {
        return res.status(400).send("Provide the Password!");
    }

    else if (username == "ajay@gmail.com" && password == "Aji") {
        return res.status(200).send("User details deleted successfully!");
    }

    else if (username !== "ajay@gmail.com" && password == "Aji") {
        return res.status(400).send("Provide Correct Username!")
    }

    else if (username == "ajay@gmail.com" && password !== "Aji") {
        return res.status(400).send("Provide Correct Password!")
    }
    else{
        res.status(404).send("User not found!");
    }
    
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})