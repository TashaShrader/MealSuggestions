import axios from 'axios';

export default{
    createAccount: function(name, email){
        let userObj = {
            name,
            email,
            nutrients: [{}]
        }
        console.log(userObj);
        axios.post("/api/login", userObj)
        
    }
}