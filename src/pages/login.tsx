import Header from '../components/Header';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please provide your email'),
    password: yup.string().required('Please provide your password'),
  })
  .required();

export default function LoginPage() {
  return (
    <>
      <Header>
        <Layout>
          <div className="flex items-center">
            <Logo />
          </div>
        </Layout>
      </Header>
      <Layout>
        <div className="py-2">
          <div className="mt-10 w-1/2 mx-auto flex flex-col p-4 shadow-sm border border-slate-100">
            <span className="text-slate-700 text-lg">Login</span>
          </div>
        </div>
      </Layout>
    </>
  );
}
