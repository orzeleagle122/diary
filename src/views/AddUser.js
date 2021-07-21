import React, { useContext, useEffect, useReducer, useRef } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UserContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const actionsType = {
  INPUT_CHANGE: 'INPUT CHANGE',
  RESET_FORM: 'RESET FORM',
  CONSENT_TOGGLE: 'CONSENT TOGGLE',
  THROW_ERROR: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionsType.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionsType.RESET_FORM:
      return initialFormState;
    case actionsType.ADD_USER:
      return {
        ...state,
      };
    case actionsType.CONSENT_TOGGLE:
      return { ...state, consent: !state.consent };
    case actionsType.THROW_ERROR:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UserContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    dispatch({
      type: actionsType.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: actionsType.RESET_FORM });
    } else {
      dispatch({
        type: actionsType.THROW_ERROR,
        errorValue: 'You need to give consent',
      });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField
        ref={ref}
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        value={formValues.consent}
        onChange={() => dispatch({ type: actionsType.CONSENT_TOGGLE })}
        type="checkbox"
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
