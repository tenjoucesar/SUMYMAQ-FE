import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, StepConnector, withStyles } from '@material-ui/core';
import ColorlibStepIcon from './ColorLibStepIcon';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const steps =[
  'Datos del cliente', 'Datos del equipo', 'Inspeccion Preliminar', 'Datos Electricos Preliminares', 'Datos Electricos Finales', 'Guardar Datos'
];

export default function CustomizedSteppers({page}) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return setActiveStep(page);
  }, [page])

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
