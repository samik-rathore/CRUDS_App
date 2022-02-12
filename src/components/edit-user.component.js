import React,{Component} from 'react';
import axios from 'axios';


export default class EditUser extends Component {
    constructor(props){
        super(props);
    
        this.onChangename = this.onChangename.bind(this);
        this.onChangephone_number = this.onChangephone_number.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangehobbies = this.onChangehobbies.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            name:'',
            phone_number:'',
            email:'',
            hobbies:'',
        }
        
    }
    
    componentDidMount(){
        const arr = window.location.pathname.split('/');
        const id= arr[arr.length-1];
        console.log(id);
        
        axios.get(`https://basic-cruds-app.herokuapp.com/users/${id}`)
            .then(response =>{
                this.setState({
                    name: response.data.name,
                    phone_number: response.data.phone_number,
                    email:response.data.email,
                    hobbies:response.data.hobbies
                })
            })
            .catch(function(error){
                console.log(error);
            })
    }

    onChangename(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangephone_number(e){
        this.setState({
            phone_number: e.target.value
        });
    }
    onChangeemail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangehobbies(e){
        this.setState({
            hobbies: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            name:this.state.name,
            phone_number:this.state.phone_number,
            email:this.state.email,
            hobbies:this.state.hobbies
        }

        console.log(user);

        const arr = window.location.pathname.split('/');
        const id= arr[arr.length-1];
        console.log(id);
        axios.post(`https://basic-cruds-app.herokuapp.com/users/update/${id}`,user)
            .then(res=>console.log(res.data));

        window.location='/';

    }

    render(){
        return(
            <div>
                <h3>Update User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.phone_number}
                            onChange={this.onChangephone_number}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeemail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hobbies:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.hobbies}
                            onChange={this.onChangehobbies}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}
  


