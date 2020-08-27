import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import StepsIndicator from 'components/StepsIndicator';
import { Form } from 'react-final-form';
import { Button } from '@material-ui/core';
import { CloudUpload, NavigateBefore, NavigateNext } from '@material-ui/icons';

const WizardButton = styled(Button)`
  margin: 20px;
  width: 130px;
  padding: 0;
  height: 40px;
`;

const StyledForm = styled.form`
  border-radius: 6px;
  margin: 10px auto 20px;
  padding: 0 30px 5px;
`

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  static Page = ({ children }) => children;

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {}
    }
  }
  next = values => this.setState(state => ({
    page: Math.min(state.page + 1, this.props.children.length - 1),
    values
  }))


  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }))

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = values => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    } else {
      // debugger;
      this.next(values)
    }
  }

  render() {
    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <div>
        <StepsIndicator page={page} />
      `  <Form
          initialValues={values}
          validate={this.validate}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, submitting, values }) => (
            <StyledForm onSubmit={handleSubmit}>
              {activePage}
              <div className="buttons">
                {page > 0 && (
                  <WizardButton
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<NavigateBefore/>}
                    type="button"
                    onClick={this.previous}
                  >
                    Previous
                  </WizardButton>
                )}
                {!isLastPage &&
                  <WizardButton
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<NavigateNext/>}
                    type="submit"
                  >
                    Next
                  </WizardButton>
                }
                {isLastPage && (
                  <WizardButton
                    type="submit"
                    disabled={submitting}
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<CloudUpload/>}
                  >
                    Submit
                  </WizardButton>
                )}
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </StyledForm>
          )}
        </Form>`
      </div>
    )
  }
}
