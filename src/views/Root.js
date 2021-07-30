import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import ErrorMessge from '../components/molecules/ErrorMessge/ErrorMessge';
import { useError } from '../hooks/useError';

const Authenticated = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const Unauthenticated = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
      onSubmit={handleSubmit(auth.signIn)}
    >
      <FormField
        label="login"
        name="login"
        id="login"
        {...register('login', { required: true })}
      />
      <FormField
        label="password"
        name="password"
        id="password"
        {...register('password', { required: true })}
      />
      <Button>Sign in</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessge message={error} /> : null}
      {auth.user ? <Authenticated /> : <Unauthenticated />}
    </>
  );
};

export default Root;
