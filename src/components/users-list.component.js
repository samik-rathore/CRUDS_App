import React, { Component} from 'react';
import CreateUser from './create-user.component';
import axios from 'axios';
import User from './user.component.js';

export default class UserList extends Component {
    constructor(props){
        super(props);
        
        this.deleteUser = this.deleteUser.bind(this);

        this.state={
            isOpen:false,
            users:[]
        };
    }

    componentDidMount() {
        axios.get('https://basic-cruds-app.herokuapp.com/users/')
            .then(response =>{
                this.setState({users:response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    deleteUser(id){
        axios.delete('https://basic-cruds-app.herokuapp.com/users/'+id)
            .then(res=>console.log(res.data));
        this.setState({
            users: this.state.users.filter(el => el._id!==id)
        })
    }

    userList(){
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>
        })
    }

    render(){
        return (
        <div>
            <h1>Basic CRUDS App</h1>
            <input type="button" value="New User" onClick={()=>this.setState({isOpen:!this.state.isOpen})}/>
            {this.state.isOpen && (<Popup content={<><CreateUser/></>} handleClose={()=>this.setState({isOpen:!this.state.isOpen})}/>)}
            hii
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Hobbies</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.userList()}
                </tbody>
            </table>
        </div>
        )
    }
}


const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

