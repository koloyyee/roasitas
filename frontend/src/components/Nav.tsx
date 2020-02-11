import * as React from 'react';
import {Paper, Tabs, AppBar } from '@material-ui/core'
import logo from "../static/Roasita's-2-02.png";
import '../css/Nav.css'
import {Link} from "react-router-dom";

class Nav extends React.Component{
    
    public render(){
        return(
                <AppBar className="nav_bar" position="sticky" color='default'>
                    <Paper>
                        <Tabs
                            className="nav"
                            value={0}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Link to="/" ><img src ={logo} className = "nav_logo" alt="logo"/></Link>
                            <Link className = "nav_item"  to="/menu" color='textPrimary' > Menu</Link>
                            <Link className = "nav_item"  to="/news" color='textPrimary' > News</Link>
                            <Link className = "nav_item"  to="/about" color='textPrimary' > About</Link>
                        </Tabs>
                    </Paper>
                </AppBar>
        )
    }
}

export default Nav