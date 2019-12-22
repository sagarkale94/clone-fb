import React, { Component } from 'react';
import './Signup.css';
import TextField from '@material-ui/core/TextField';
import MaterialUIPicker from '../material/MaterialUIPicker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

class SignUp extends Component {
    render() {
        const useStyles = makeStyles({
            checkedIcon: {
                backgroundColor: '#137cbd',
            },
        });
        function StyledRadio(props) {
            const classes = useStyles();

            return (
                <Radio
                    className={classes.root}
                    disableRipple
                    color="default"
                    {...props}
                />
            );
        }
        return (
            <div>
                <h2 className="Title">Create a new account</h2>
                <span>It's quick and easy.</span>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField id="outlined-basic" label="FirstName" variant="outlined" style={{ 'backgroundColor': 'white', 'marginRight': '10px' }} />
                        <TextField id="outlined-basic" label="SurName" variant="outlined" style={{ 'backgroundColor': 'white' }} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="MobileNo or Email address" variant="outlined" style={{ 'backgroundColor': 'white', 'width': '100%' }} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="New password" variant="outlined" style={{ 'backgroundColor': 'white', 'width': '100%' }} />
                    </div>
                    <div>
                        <MaterialUIPicker />
                    </div>
                    <div>
                        <RadioGroup aria-label="gender" name="gender1" value={'male'}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <div style={{ 'display': 'flex' }}>
                                <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
                                <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
                            </div>
                        </RadioGroup>
                    </div>
                    <div>
                        <span className="SignUpButton">Sign Up</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;