import axios from 'axios';

export default{
    createAccount: function(name, email){
        let nameArr = name[0].split("=");
        name = nameArr[1];
        console.log(email)
        let emailArr = email[0].split("=");
        email = emailArr[1]
        let userObj = {
            name,
            email,
            nutrients: [{}]
        }
        console.log(userObj);
        return axios.post("http://localhost:3001/api/meal/login", userObj);
        
    }
}