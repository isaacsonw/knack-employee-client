/** @format */

import React, { useEffect } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineLogout,
} from 'react-icons/ai';
import { FaUsers, FaRegAddressCard } from 'react-icons/fa';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Survey from './survey';
import Settings from './settings';
import MainDashboard from './main';
import { DashboardStyle } from './dashboardStyle';
import { Burger } from '../../components/Burger';
import Meetings from './meetings/index';
import { setEmployees } from '../../redux/employees/employee.action';

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    exact: true,
    icon: <AiOutlineDashboard />,
    main: () => <MainDashboard />,
  },
  {
    name: 'Meeting',
    icon: <FaUsers />,
    path: '/dashboard/meetings',
    main: () => <Meetings />,
  },
  {
    name: 'Survey',
    icon: <FaRegAddressCard />,
    path: '/dashboard/survey',
    main: () => <Survey />,
  },
  {
    name: 'Profile',
    icon: <AiOutlineSetting />,
    path: '/dashboard/settings',
    main: () => <Settings />,
  },
];

const DashboardScreen = () => {
  const [open, setOpen] = React.useState(true);
  const [sort, setSort] = React.useState('');
  const dispatch = useDispatch();

  const node = React.useRef();

  useEffect(async () => {
    await axios
      .get(
        `https://knack-employees.herokuapp.com/api/v1/employees?sortBy=${sort}`,
        {
          header: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.data) {
          dispatch(setEmployees(res.data));
        }
      })
      .catch((err) => console.log(err));
  }, [sort]);

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  console.log(sort);

  return (
    <BrowserRouter>
      <DashboardStyle open={open}>
        <section>
          <Burger open={open} setOpen={setOpen} />
          <div ref={node} open={open} className="side-bar">
            <h1 className="logo">KNACK-E</h1>
            <div className="line" />
            <div className="profile">
              <div className="avatar">
                <h1>JD</h1>
              </div>
              <div className="profile-name">
                <h2>John Doe</h2>
                <p>email@mail.com</p>
              </div>
            </div>
            <div className="line" />
            <ul>
              {routes.map((route) => (
                <React.Fragment key={route.path}>
                  <li>
                    <NavLink activeClassName="selected" exact to={route.path}>
                      <div className="bg" />
                      {route.icon}
                      <span>{route.name}</span>
                    </NavLink>
                  </li>
                </React.Fragment>
              ))}
              <li>
                <AiOutlineLogout />
                Logout
              </li>
            </ul>
          </div>

          <div className="main-view">
            <div className="header">
              <select name="" onChange={handleChange}>
                <option value="">Sort By</option>
                <option value="department">Department</option>
                <option value="position">Position</option>
                <option value="location">Location</option>
              </select>
              <div className="avarter">img</div>
            </div>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </section>
      </DashboardStyle>
    </BrowserRouter>
  );
};

export default DashboardScreen;
