import React from 'react';
import styled from 'styled-components';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormTextField } from 'components/Form/Input';
import Copyright from 'components/Copyright';
import Auth from 'services/AuthService';

import { Redirect } from "react-router-dom";
import { Form, Field } from 'react-final-form';
import { Avatar, Button, FormControlLabel, Checkbox, Link, Grid, Typography, Container, FormHelperText } from '@material-ui/core'

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

const ErrorMessage = styled(FormHelperText)`
  font-size: 18px;
  margin-bottom: 30px;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function Login({ subscription, location }) {

  const onSubmit = async (values) => {
    await sleep(300)
    try {
      await Auth.login(values.mail.toLowerCase(), values.password);
      const { state } = location;
      window.location = state ? state.from.pathname : "/clients";
    } catch (err) {
      return  'Correo o Contraseña Invalidos';
    }
  }

  if (Auth.getCurrentUser()) return <Redirect to="/clients" />;

  return (
    <Container component="main" maxWidth="sm">
      <Form
        onSubmit={onSubmit}
        subscription={subscription}
        // validate={() => FORM_ERROR}
        render={({ handleSubmit, submitting, pristine, submitErrors }) => (
          <CenteredContainer onSubmit={handleSubmit}>
            <StyledAvatar >
              <LockOutlinedIcon />
            </StyledAvatar>
            <Typography component="h1" variant="h5">Conectate</Typography>
            <Field name="mail" component={FormTextField} label='Correo' type='text' required />
            <Field name="password" component={FormTextField} label='Contraseña' type='password' required errors={submitErrors}/>

            {submitErrors && <ErrorMessage error>{submitErrors}</ErrorMessage>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={pristine || submitting}
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