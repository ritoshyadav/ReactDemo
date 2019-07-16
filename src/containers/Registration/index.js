import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Gender from "../../components/Gender";
import Buttons from "../../components/Button";

const style = {
    container: {
        backgroundColor: '#F0F5F8'
    }
}

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            age: "",
            selectedValue: "",
            gender: "male",
            password: "",
            color: "primary",
            value: "Registration",
            sColor: "secondary",
            sValue: "Cancel"
        }
    }

    // const[values, setValues] = React.useState({
    //     name: 'Cat in the Hat',
    // });
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value }, () => console.log(this.state));
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value }, () => console.log(this.state));
    }
    handleChangeFirstName = (event) => {
        console.log("change ===>", event);
        this.setState({ firstName: event.target.value }, () => console.log(this.state));
    };
    handleChangeLastName = (event) => {
        console.log("change ===>", event);
        this.setState({ lastName: event.target.value }, () => console.log(this.state));
    };
    handleChangeAge = (event) => {
        console.log("change ===>", event.target);
        this.setState({ age: event.target.value }, () => console.log(this.state));
    };

    handleGenderChange = (event) => {
        this.setState({ gender: event.target.value }, () => console.log(this.state));
    }
    handleButton1Click = (event) => {
        let { firstName, lastName, email, password } = this.state;
        let userDeatils = {
            firstName: firstName, lastName: lastName, email: email, password: password
        }
        fetch("http://localhost:4547/api/user/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, cors, *same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({ username: email, password }) // body data type must match "Content-Type" header
        }).then(res => {
            console.log("response form server===>", res);
            return res.json();
        }).then(response => {
            console.log("response json===>", response);

        }).catch(e => console.warn("api error :", e))
        alert('You sure login!');
    }
    handleButton2Click = (event) => {
        alert('Cancel all!');
    }

    render() {
        let { firstName, lastName, age, selectedValue, email, password } = this.state;
        let { classes } = this.props
        return (
            <div>
                <Container className={classes.container} maxWidth="sm">
                    <label>Registration From...</label><br />
                    <TextField
                        id="email"
                        label="Email"
                        style={{ marginLeft: 10 }}
                        value={email}
                        onChange={this.handleChangeEmail}
                        margin="normal"
                    /><br />
                    <TextField
                        id="first-name"
                        label="First Name"
                        style={{ marginLeft: 10 }}
                        value={firstName}
                        onChange={this.handleChangeFirstName}
                        margin="normal"
                    /><br />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        style={{ marginLeft: 10 }}
                        value={lastName}
                        onChange={this.handleChangeLastName}
                        margin="normal"
                    /><br />
                    <TextField
                        id="age"
                        label="Age"
                        style={{ marginLeft: 10 }}
                        value={age}
                        onChange={this.handleChangeAge}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        style={{ marginLeft: 10 }}
                        value={password}
                        onChange={this.handleChangePassword}
                        margin="normal"
                    />
                    <br />
                    <Gender value={this.state.gender} handleChange={this.handleGenderChange} />
                    <Buttons color={this.state.color} value={this.state.value} handleClick={this.handleButton1Click} />
                    <Buttons color={this.state.sColor} value={this.state.sValue} handleClick={this.handleButton2Click} />
                </Container>
            </div>
        );
    }
};
export default withStyles(style)(Registration);