import React, {ChangeEventHandler, ComponentType, HTMLInputTypeAttribute} from 'react';

export interface InputProps<Value = string> {
  value: Value;
  type: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  label?: React.ReactElement<any, any> | ComponentType<unknown> | string;
  hint?: React.ReactElement<any, any> | ComponentType<unknown> | string;
  help?: React.ReactElement<any, any> | ComponentType<unknown> | string;
  iconLeft?: React.ReactElement<any, any> | ComponentType<unknown>;
  iconRight?: React.ReactElement<any, any> | ComponentType<unknown>;
  className?: string;
}

export default function Input<Prop extends InputProps>(
  {
    value,
    type = 'text',
    onChange,
    label,
    hint,
    help,
    className = '',
    iconLeft,
    iconRight,
  }: Prop,
) {
  return (
    <div className={className}>
      <div className="flex justify-between">
        {label && (
          <label htmlFor="e" className="block text-sm font-medium text-gray-700">
            {typeof label === 'function' ? React.createElement(label) : label}
          </label>
        )}
        {hint && (
          <span className="text-sm text-gray-500" id="email-optional">
            {typeof hint === 'function' ? React.createElement(hint) : hint}
          </span>
        )}
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        {iconLeft && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {typeof iconLeft === 'function' ? React.createElement(iconLeft) : iconLeft}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          name="email"
          id="email"
          className={`input ${iconLeft && 'pl-10'} ${iconRight && 'pr-10'}`}
          placeholder="you@example.com"
        />

        {iconRight && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {typeof iconRight === 'function' ? React.createElement(iconRight) : iconRight}
          </div>
        )}
      </div>

      {help && (
        <p className="mt-1 text-sm text-gray-500" id="email-description">
          {typeof help === 'function' ? React.createElement(help) : help}
        </p>
      )}
    </div>
  );
}
