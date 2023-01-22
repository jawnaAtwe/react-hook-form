import { useAppContext } from './Action/Action';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.scss';
import { FormData } from './Action/Action';

function blurFunction() {
  console.log('u click outside ');
}
export const Register = () => {
  const [{ value }, { printUser }, dispatch] = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(printUser(data));
  };

  return (
    <form className={'first'} onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register('firstName', {
          pattern: /^([A-Z][a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
          required: true,
          onBlur: blurFunction
        })}
      />
      {errors.firstName && <span>firstName field is required</span>}
      <label>Last Name</label>
      <input
        {...register('lastName', {
          pattern: /^[A-Z][a-zA-Z]+$/,
          required: true
        })}
      />

      {errors.lastName && <span>lastName field is required</span>}
      <label>email</label>
      <input
        {...register('email', {
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          required: true
        })}
      />
      {errors.email && <span>email field is required</span>}
      <label>Password</label>
      <input
        {...register('Password', {
          pattern: /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/,
          required: true
        })}
      />
      {errors.Password && <span>Password field is required</span>}
      <label>phone</label>
      <input
        {...register(
          'phone'
          //     {
          //   pattern: /"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gim,
          //   required: true
          // }
        )}
      />

      <label>city</label>
      <input {...register('city')} />
      <label>gender</label>
      <label>
        <input type={'radio'} {...register('gender')} name="gender" id="male" value={'Male'} />
        Male
      </label>
      <label>
        <input type={'radio'} {...register('gender')} name="gender" id="female" value={'Female'} />
        Female
      </label>
      <button type="submit">SignUp</button>
      <h1>hi {value.firstName}</h1>
    </form>
  );
};
