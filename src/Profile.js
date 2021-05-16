import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';


export class Profile extends Component {
    render() {
        const { isAuthenticated, user } = this.props.auth0;
        console.log(this.props.auth0)
        return (
            <div>
                {isAuthenticated &&
                    <>
                        <p> Hello  {user.name} ! </p>
                        <p> Your Email address : {user.email}. </p>
                       
                       <img src={user.picture} alt=""/>
                    </>
                }
            </div>
        )
    }
}

export default withAuth0(Profile);
