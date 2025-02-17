require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port || 8000



app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.post('/signUp',(req,res)=>{
    const {Username,email,password} = req.body

    if (!Username || !email || !password){
        return res.status(400).json({ message: "Please fill in all fields" })
        }
    if (password.length < 8 && password.length > 16){
        return res.status(400).json({ message: "Password should be between 8 and 16 characters" })
    }

    const newUser = new User({
        Username: Username,
        email: email,
        password: password
        })
        newUser.save()
        
                
})



app.listen(port ,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})