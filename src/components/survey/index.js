/** @format */

import React, { useState } from 'react';
import * as Survey from 'survey-react';
// import "./styles.css";
import 'survey-react/survey.css';
import { surveyJSON } from './surveyJSON';

const SurveyComponent = (props) => {
  const [isCompleted, setIsComplete] = useState(false);

  const onCompletedComponent = () => {
    setIsComplete(true);
  };

  let json = {
    questions: [
      {
        type: 'checkbox',
        name: 'car',
        title: 'What car are you driving?',
        isRequired: true,
        hasSelectAll: true,
        hasNone: true,
        noneText: 'None of the above',
        colCount: 4,
        choicesOrder: 'asc',
        choices: [
          'Ford',
          'Tesla',
          'Vauxhall',
          'Volkswagen',
          'Nissan',
          'Audi',
          'Mercedes-Benz',
          'BMW',
          'Peugeot',
          'Toyota',
          'Citroen',
        ],
      },
    ],
  };
  const surveyRender = !isCompleted ? (
    <Survey.Survey
      json={surveyJSON}
      showCompletedPage={false}
      onComplete={onCompletedComponent}
    />
  ) : null;

  return (
    <div>
      {surveyRender}
      {isCompleted ? <div>The component after onComplete event</div> : null}
    </div>
  );
};

export default SurveyComponent;
