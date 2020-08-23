import React from 'react';
import styled from 'styled-components';
import { Modal, Backdrop, Fade, Button, Typography } from '@material-ui/core';
import { DoneOutline, NotInterested } from '@material-ui/icons';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ModalBody = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  padding: 60px 32px 30px;
  border: 2px solid #f44336;
  background-color: white;
  border-radius: 12px;
  :focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  margin: 20px 30px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
`;

const LogoutModal = ({ open, handleClose }) => (
  <StyledModal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    disableEnforceFocus
    disableAutoFocus
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <ModalBody>
        <Typography variant="h4" component='h3' id="transition-modal-title">
          Estas seguro que deseas desconectarte?
        </Typography>
        <ButtonsContainer>
          <StyledButton
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<DoneOutline />}
            type="submit"
            onClick={() => window.location = "/logout"}
          >
            Si
      </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            fullWidth
            endIcon={<NotInterested />}
            type="submit"
            onClick={handleClose}
          >
            No
      </StyledButton>
        </ButtonsContainer>
      </ModalBody>
    </Fade>
  </StyledModal>
);

export default LogoutModal;