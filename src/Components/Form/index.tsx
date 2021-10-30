/* eslint-disable react/no-unused-state */
import React, {Component, SyntheticEvent} from 'react';

type FormState<State = {}, Data extends object = {}> = State & { form: Data };

abstract class Form<D extends object = {}, P = {}, S = {}> extends Component<P, FormState<S, D>> {
  state: FormState<S, D>;

  update = <Input extends keyof D>(input: Input, value: D[Input]) => {
    const {state: {form}} = this;

    form[input] = value;
    // @ts-ignore - for some reason the ts Pick wasn't working...
    this.setState<'form'>({form});
  };

  abstract submit(e: SyntheticEvent): void;
  abstract renderForm(): unknown;

  render() {
    return (
      <form onSubmit={this.submit}>
        {this.renderForm()}
      </form>
    );
  }
}

export default Form;
