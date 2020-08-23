import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormTextField from 'components/Form/Input';
import Copyright from 'components/Copyright';
import { Form, Field } from 'react-final-form';
import { Avatar, Button, FormControlLabel, Checkbox, Link, Grid, Typography, Container } from '@material-ui/core'
import Auth from 'services/AuthService';

const CenteredContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const StyledButton = styled(Button)`
  margin: 24px 0 16px;
  width: 300px;
`;

const StyledAvatar = styled(Avatar)`
  margin: 12px;
  background-color: #f50057;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function Login({ subscription, location }) {

  const onSubmit = async (values, form) => {
    await sleep(300)
    try {
      debugger;
      await Auth.login(values.mail, values.password);
      debugger;
      const { state } = location;
      window.location = state ? state.from.pathname : "/clients";

    } catch (err) {
      // Display Error Message Received
    }
  }

  if (Auth.getCurrentUser()) return <Redirect to="/" />;

  return (
    <Container component="main" maxWidth="sm">
      {/* <Test/> */}
      <Form
        onSubmit={onSubmit}
        subscription={subscription}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <CenteredContainer onSubmit={handleSubmit}>
            <StyledAvatar >
              <LockOutlinedIcon />
            </StyledAvatar>
            <Typography component="h1" variant="h5">Conectate</Typography>
            <Field name="mail" component={FormTextField} label='Correo' type='text' required />
            <Field name="password" component={FormTextField} label='Contraseña' type='password' required />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={submitting}
            >
              Sign In
          </StyledButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </CenteredContainer>
        )}
      />
      <Copyright />
    </Container>
  );
}