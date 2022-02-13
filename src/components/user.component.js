import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component{
    
    render(){
        return(
            <tr>
            <td><input type="checkbox" value={["User Name: "+this.props.user.name,"Phone: "+this.props.user.phone_number,"Mail: "+this.props.user.email,"Hobbies: "+this.props.user.hobbies]} onChange={this.props.handleChange}/></td>
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