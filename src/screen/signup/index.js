/** @format */
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { Signuptyles } from './signupStyles';
import S_IMAGE from '../../assets/svg/undraw_Hello_re_3evm.svg';
import CustomForm from '../../components/customForm';

const initialSchemaAccountInformation = Yup.object().shape({
  email: Yup.string().required().email(),
  name: Yup.string()
    .required('Please enter your full name')
    .min(2, 'Cannot be less than 2 characters'),
  position: Yup.string()
    .required('Please enter your position')
    .min(2, 'Cannot be less than 2 characters'),
  location: Yup.string()
    .required('Please enter your location')
    .min(2, 'Cannot be less than 2 characters'),
  department: Yup.string()
    .required('Please enter your  department')
    .min(1, 'Cannot be less than 1 characters'),
  password: Yup.string('Password is required')
    .required('Password is required')
    .min(6, 'Cannot be less than 6 characters'),
});
const accountInformation = {
  name: '',
  position: '',
  location: '',
  department: '',
  email: '',
  password: '',
};
const AccountInformationInput = [
  {
    placeholder: 'Full name',
    name: 'name',
    inputType: 'text',
  },
  {
    placeholder: 'Department',
    name: 'department',
    inputType: 'text',
  },
  {
    placeholder: 'Position',
    name: 'position',
    inputType: 'text',
  },
  {
    placeholder: 'Location',
    name: 'location',
    inputType: 'text',
  },
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

const Signup = () => {
  const history = useHistory();
  return (
    <Signuptyles>
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
            <h1>Sign up</h1>
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
              btnText={false ? 'Please wait' : 'Signup'}
              loading={false}
              formInputs={AccountInformationInput}
            />

            <p className="no-account">
              Already have an account?{' '}
              <span>
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </aside>
      </section>
    </Signuptyles>
  );
};

export default Signup;
