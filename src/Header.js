import React, { Component } from 'react'
import './mystyle.css'
class Header extends Component {
    render() {
        return (
            <header>
                <h1 className='headertag'>{this.props.name}</h1>
            </header>
        )
    }
}

export default Header
