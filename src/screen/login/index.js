/** @format */
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { LoginStyles } from './loginStyles';
import S_IMAGE from '../../assets/svg/undraw_Hello_re_3evm.svg';
import CustomForm from '../../components/customForm';

const initialSchemaAccountInformation = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string('Password is required')
    .required('Password is required')
    .min(6, 'Cannot be less than 6 characters'),
});
const accountInformation = {
  email: '',
  password: '',
};
const AccountInformationInput = [
  {
    placeholder: 'Email',
    name: 'email',
    inputType: 'text',
  },
  {
    placeholder: 'Password',
    name: 'password',
  },
];

const ForgotPassword = () => (
  <p className="forgot-password">Forgot password?</p>
);

const Login = () => {
  const history = useHistory();
  return (
    <LoginStyles>
      <section className="main-form-body">
        <aside>
          <span>knack employees</span>
          <h1>
            <span>KNACK</span> <br />
            Employee <br />
            Inter-Relation System*
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sequi, saepe unde repellendus aspernatur quaerat quas ipsum minus
            blanditiis aliquid eaque dignissimos dicta ex quidem, repellat
            perferendis, est ipsam reprehenderit?
          </p>
          <img src={S_IMAGE} alt="office image" />
          <h5>
            Return to Home Page <br />
            View Knack Terms of Service / Privacy Policy
          </h5>
        </aside>
        <aside>
          <div className="container">
            <h1>Login</h1>
            <CustomForm
              inputWidth="100%"
              onSubmitFunction={async (fields) => {
                alert(JSON.stringify(fields));
                history.push('/dashboard');
              }}
              initialSchema={initialSchemaAccountInformation}
              initialValues={accountInformation}
              title=""
              infoText=""
              btnText={false ? 'Please wait' : 'Login'}
              otherActions={<ForgotPassword />}
              loading={false}
              formInputs={AccountInformationInput}
            />

            <p className="no-account">
              Don’t have an account?{' '}
              <span>
                <Link to="/signup">Get Started</Link>
              </span>
            </p>
          </div>
        </aside>
      </section>
    </LoginStyles>
  );
};

export default Login;
