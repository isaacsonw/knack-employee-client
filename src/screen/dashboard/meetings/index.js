/** @format */

import React from 'react';

import ResponsiveTable from '../../../components/Table/index';
import { MeetingStyles } from './meetingStyle';

const columns = {
  subject: 'Subject',
  date: 'Date',
  location: 'Location',
  action: 'Action',
  status: 'Status',
};
const rows = [
  {
    subject: 'Meeting subject',
    date: '20-15-23-2021',
    location: 'New york city',
    status: 'pending',
    action: (
      <div>
        <button>Cancel</button>
      </div>
    ),
  },
  {
    subject: 'Meeting subject',
    date: '20-15-23-2021',
    location: 'New york city',
    status: 'cancelled',
    action: (
      <div>
        <button>Cancel</button>
      </div>
    ),
  },
  {
    subject: 'Meeting subject',
    date: '20-15-23-2021',
    location: 'New york city',
    status: 'done',
    action: (
      <div>
        <button>Cancel</button>
      </div>
    ),
  },
  {
    subject: 'Meeting subject',
    date: '20-15-23-2021',
    location: 'New york city',
    status: 'pending',
    action: (
      <div>
        <button>Cancel</button>
      </div>
    ),
  },
];

const TableHead = () => (
  <div className="table-head">
    <h1>Meetings</h1>
  </div>
);

const Meetings = () => {
  return (
    <MeetingStyles>
      <ResponsiveTable
        headerSection={<TableHead />}
        columns={columns}
        rows={rows}
      />
    </MeetingStyles>
  );
};

export default Meetings;
