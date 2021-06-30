/** @format */
import Card from '../../../components/card';
import { SettingsStyle } from './settingsStyle';

const data = {
  id: 1,
  employee_name: 'John Doe',
  employee_salary: '$1600',
  employee_age: 35,
  profile_image: null,
  base_image: null,
  position: 'Senior software developer',
  location: 'Abuja Nigeria',
  department: 'Knack computer department',
  email: 'johnmichaeldoe23@gmail.com',

  isAvailable: true,
};

const Settings = () => {
  const More = () => {
    return (
      <div className="more">
        <div>
          <h1>Position</h1>
          <span>{data.position}</span>
        </div>
        <div>
          <h1>Position</h1>
          <span>{data.position}</span>
        </div>
        <div>
          <h1>Location</h1>
          <span>{data.location}</span>
        </div>
        <div>
          <h1>Age</h1>
          <span>{data.employee_age}</span>
        </div>
        <div>
          <h1>Current Salary</h1>
          <span>{data.employee_salary}</span>
        </div>
      </div>
    );
  };

  return (
    <SettingsStyle>
      <h1 className="page-title">Settings</h1>
      <Card data={data} otherComp={<More />} />
    </SettingsStyle>
  );
};

export default Settings;
