//eslint-disable-next-line
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import '../index.css';
//eslint-disable-next-line
import "materialize-css/dist/js/materialize.min.js";
import {Navbar, NavItem, Icon} from 'react-materialize';
import React from 'react';

const MaterializeNavbar = ({bg_color, text_color}) => {
    return (
        <Navbar className={`${bg_color} ${text_color}`}
            alignLinks="right"
            brand={<a className={`brand-logo ${text_color}`} href="#">Portfolio</a>}
            centerChildren
            id="mobile-nav"
            menuIcon={<Icon>Menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem href="#" className={`${text_color}`}>
                Getting started
            </NavItem>
            <NavItem href="#" className={`${text_color}`}>
                Components
            </NavItem>
        </Navbar>
    )
}

export default MaterializeNavbar