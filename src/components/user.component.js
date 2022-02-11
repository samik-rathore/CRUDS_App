import React, { Component} from 'react';
import UserList from './users-list.component';
import {Link} from 'react-router-dom';

export default class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
            <td><input type="checkbox"/></td>
            <td>{this.props.user.name}</td>
            <td>{this.props.user.phone_number}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.hobbies}</td>
            <td>
                <Link to={"/edit/"+this.props.user._id}>edit</Link> | <a href="#" onClick={()=>{this.props.deleteUser(this.props.user._id)}}>delete</a>
            </td>
        </tr>
        )
    }
}