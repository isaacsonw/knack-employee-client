/** @format */
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { MainStyle } from './mainStyles';
import { generateData } from '../../../dummyData';
import Card from '../../../components/card/index';
import { Modal } from '../../../components/Modal';
import CustomForm from '../../../components/customForm/index';
import { useSelector } from 'react-redux';

const initialSchemaAccountInformation = Yup.object().shape({
  subject: Yup.string()
    .required('Please enter meeting subject')
    .min(2, 'Cannot be less than 2 characters'),
  date: Yup.string()
    .required('Please enter the date for the meeting')
    .min(2, 'Cannot be less than 2 characters'),
  location: Yup.string()
    .required('Please enter your  location')
    .min(1, 'Cannot be less than 1 characters'),
});
const accountInformation = {
  subject: '',
  date: '',
  location: '',
};
const AccountInformationInput = [
  {
    placeholder: 'Meeting subject',
    name: 'subject',
    inputType: 'text',
  },
  {
    placeholder: 'Date',
    name: 'date',
    inputType: 'date',
  },
  {
    placeholder: 'Location',
    name: 'location',
    inputType: 'text', // const products = useSelector((state) => state.products);
    // console.log(products);
  },
];

const MainDashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const employees = useSelector((state) => state.employee);

  useEffect(() => {
    // const employeeArr = generateData();
    setEmployeeData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return () => {
      setEmployeeData([]);
    };
  }, []);

  const BookMeeting = () => {
    return (
      <div className="book-meeting">
        <div className="header-section">
          <h1>Book Meeting</h1>
        </div>
        <div className="meeting">
          <CustomForm
            inputWidth="100%"
            onSubmitFunction={async (fields) => {
              alert(JSON.stringify(fields));
              setOpenModal(!openModal);
            }}
            initialSchema={initialSchemaAccountInformation}
            initialValues={accountInformation}
            title=""
            infoText=""
            btnText={false ? 'Please wait' : 'Signup'}
            loading={false}
            formInputs={AccountInformationInput}
          />
        </div>
      </div>
    );
  };

  return (
    <MainStyle>
      <h1 className="page-title">Employees</h1>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <BookMeeting />
      </Modal>
      <div className="data-wrapper">
        <div className="data">
          {employees.length ? (
            employees.map((employee) => (
              <Card
                key={employee.id}
                data={employee}
                disabled={employee.isAvailabe}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))
          ) : (
            <h1> Opps no employee record found</h1>
          )}
        </div>
      </div>
    </MainStyle>
  );
};

export default MainDashboard;
