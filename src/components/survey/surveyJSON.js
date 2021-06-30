/** @format */

export const surveyJSON = {
  pages: [
    {
      name: 'page1',
      title: 'Who are you employed by?',
      elements: [
        {
          type: 'matrixdynamic',
          minRowCount: 1,
          rowCount: 1,
          name: 'employer_names',
          valueName: 'employers',
          isRequired: true,
          title: 'Please enter your name',

          columns: [
            {
              name: 'name',
              isRequired: true,
              title: 'Name of employer',
              cellType: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'page2',
      title: 'Tells me about yourself',
      elements: [
        {
          type: 'paneldynamic',
          renderMode: 'list',
          allowAddPanel: false,
          allowRemovePanel: false,
          name: 'arrray_employer_info',
          title: 'Your employers',
          valueName: 'employers',
          templateTitle: 'Employer name: {panel.name}',
          templateElements: [
            {
              type: 'panel',
              name: 'panel_mployer_address',
              title: 'Address',
              elements: [
                {
                  type: 'text',
                  name: 'employer_address',
                  valueName: 'address',
                  title: 'Address',
                },
                {
                  type: 'text',
                  name: 'employer_phone',
                  valueName: 'phone',
                  title: 'Phone number:',
                },
                {
                  type: 'text',
                  name: 'employer_abn',
                  valueName: 'abn',
                  title: 'ABN',
                },
              ],
            },
            {
              type: 'panel',
              name: 'panel_employer_role',
              title: 'What is your role?',
              elements: [
                {
                  type: 'radiogroup',
                  choices: ['Full time', 'Part time', 'Casual', 'Seasonal'],
                  name: 'employer_role',
                  title: 'Your role',
                  valueName: 'role',
                },
              ],
            },
            {
              type: 'panel',
              name: 'panel_employer_hours_work',
              title: 'What hours do you work?',
              elements: [
                {
                  type: 'text',
                  inputType: 'number',
                  name: 'member_hours_worked',
                  valueName: 'hours_worked',
                  title: 'Hours:',
                },
                {
                  type: 'dropdown',
                  name: 'member_hours_worked_frequency',
                  title: 'Worked Frequency:',
                  valueName: 'hours_worked_frequency',
                  startWithNewLine: false,
                  defaultValue: 'Year',
                  choices: ['Day', 'Week', 'Fortnight', 'Month', 'Year'],
                },
              ],
            },
            {
              type: 'panel',
              name: 'panel_employer_income',
              title: 'What income do you receive?',
              elements: [
                {
                  type: 'text',
                  inputType: 'number',
                  name: 'employer_income',
                  valueName: 'income',
                  title: 'Income:',
                },
                {
                  type: 'dropdown',
                  name: 'employer_income_frequency',
                  title: 'Income Frequency',
                  valueName: 'income_frequency',
                  startWithNewLine: false,
                  defaultValue: 'Year',
                  choices: ['Day', 'Week', 'Fortnight', 'Month', 'Year'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  showQuestionNumbers: 'off',
};
