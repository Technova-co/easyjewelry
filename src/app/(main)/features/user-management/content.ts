export const userManagementFaqs = [
  {
    question: 'How many users can I add?',
    answer: 'There is no limit on the number of users. You can add every member of your team across all branches.',
  },
  {
    question: 'Can a user be assigned to more than one branch?',
    answer:
      'Yes. Users can be assigned to multiple branches depending on their role. A manager overseeing several locations can have access to all of them.',
  },
  {
    question: 'Can I change a user\'s role later?',
    answer: 'Yes. You can edit a user at any time and change their branch assignment, role, or password.',
  },
  {
    question: 'What happens if a salesman tries to access a restricted module?',
    answer:
      'Restricted modules are not visible to users who do not have access. Salesmen will not see reports, purchase costs, or other data outside their permitted scope.',
  },
  {
    question: 'Does this work for multiple branches?',
    answer:
      'Yes. Each staff member can be assigned to their branch with the appropriate role, keeping every location organized and secure.',
  },
] as const;
