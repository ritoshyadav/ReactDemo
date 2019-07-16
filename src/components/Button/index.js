import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const Buttons = props => {
    let { color, value, handleClick } = props;
    return (
        <div>
            <Button variant="contained" color={color} onClick={handleClick} >
                {value}
            </Button>
        </div>
    )
}

export default Buttons;