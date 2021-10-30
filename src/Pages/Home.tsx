import React from 'react';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Form from '../Components/Form';
import Input from '../Components/Form/Input';

export default class Home extends Form<{ test?: string }, unknown, {}> {
  state = {
    form: {
      test: '',
    },
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  renderForm() {
    const {test} = this.state.form;

    return (
      <div className="text-xl max-w-xl mx-auto my-5">
        Home

        <Input
          className="mt-4"
          type="email"
          value={test}
          onChange={(e) => this.update('test', e.target.value)}
          label="Email"
          hint={(<div className="underline">Helpful text</div>)}
          iconLeft={() => (<FontAwesomeIcon icon={faEnvelope} color="black" />)}
          iconRight={<FontAwesomeIcon icon={faExclamationCircle} color="red" />}
          help="Some very useful information about the input"
        />
      </div>
    );
  }
}
