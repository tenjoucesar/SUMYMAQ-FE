import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { MiniFormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';

const formFields = [
  <Field name="type" component={MiniFormTextField} label='Tipo de Equipo' type='text' required validate={required} />,
  <Field name="marca" component={MiniFormTextField} label='Marca' type='text' required validate={required} />,
  <Field name="model" component={MiniFormTextField} label='Modelo' type='number' required validate={composeValidators(required, mustBeNumber, validPhoneNumber)} />,
  <Field name="typo" component={MiniFormTextField} label='Typo' type='text' required validate={required} />,
  <Field name="serie" component={MiniFormTextField} label='Serie' type='text' required validate={required} />,
  <Field name="class" component={MiniFormTextField} label='Clase' type='text' required validate={required} />,
  <Field name="letterDesign" component={MiniFormTextField} label='Letra Diseño' type='text' required validate={required} />,
  <Field name="power" component={MiniFormTextField} label='Potencia' type='text' required validate={required} />,
  <Field name="voltage" component={MiniFormTextField} label='Voltaje' type='text' required validate={required} />,
  <Field name="amperage" component={MiniFormTextField} label='Amperaje' type='text' required validate={required} />,
  <Field name="r.p.m" component={MiniFormTextField} label='R.P.M' type='text' required validate={required} />,
  <Field name="frame" component={MiniFormTextField} label='Frame' type='text' required validate={required} />,
  <Field name="frecuence" component={MiniFormTextField} label='Frecuencia' type='text' required validate={required} />,
  <Field name="serviceFact" component={MiniFormTextField} label='Factor de Servicio' type='text' required validate={required} />,
  <Field name="codeLetter" component={MiniFormTextField} label='Codigo Letra' type='text' required validate={required} />,
  <Field name="serialNumber" component={MiniFormTextField} label='Numero Serie' type='text' required validate={required} />,
  <Field name="other" component={MiniFormTextField} label='Otros Datos' multiline rows={3} type='text' required validate={required} />
];

const EquipmentDataForm = () => (
  <BoxContainer title='Ingresa los datos del Equipo'>
    <ScrollableFormContainer>
      <InputsContainer>
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
      </InputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default EquipmentDataForm;