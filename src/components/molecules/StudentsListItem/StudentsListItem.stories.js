import StudentListItem from './StudentsListItem';

export default {
  title: 'Components/molecules/StudentListItem',
  component: StudentListItem,
};

const Template = (args) => <StudentListItem {...args} />;

export const GoodGrades = Template.bind({});

GoodGrades.args = {
  userData: {
    name: 'Patryk Orłowski',
    attendance: '55%',
    average: '5.0',
  },
};

export const MediumGrades = Template.bind({});

MediumGrades.args = {
  userData: {
    name: 'Patryk Orłowski',
    attendance: '55%',
    average: '3.5',
  },
};

export const BadGrades = Template.bind({});

BadGrades.args = {
  userData: {
    name: 'Patryk Orłowski',
    attendance: '55%',
    average: '2.5',
  },
};

export const VeryBadGrades = Template.bind({});

VeryBadGrades.args = {
  userData: {
    name: 'Patryk Orłowski',
    attendance: '55%',
    average: '1.5',
  },
};
