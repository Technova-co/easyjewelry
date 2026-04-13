export type AddOneStatus = 'yes' | 'no' | 'partial';

export interface AddOneItem {
  id: number;
  name: string;
  tooltip?: string;
  status: AddOneStatus;
}

export interface AddOneGroup {
  id: number;
  groupName: string;
  features: AddOneItem[];
}

export const addOnesTableData: AddOneGroup[] = [
 {
  id: 1,
  groupName: 'Loan Management',
  features: [
    { id: 901, name: 'Enter & Track Gold or Silver Loans', tooltip: 'Record loans given against jewelry items as collateral.', status: 'yes' },
    { id: 902, name: 'Collateral Item Tracking — Purity, Gross & Pure Weight', status: 'yes' },
    { id: 903, name: 'Loan Duration & Monthly Instalment Rate (MIR)', tooltip: 'Set loan period in months and apply a monthly interest rate.', status: 'yes' },
    { id: 905, name: 'Payment Method & Bank Selection', status: 'yes' },
    { id: 906, name: 'Loan Reference & In Depth Reports', status: 'yes' },
  ],
},
{
  id: 2,
  groupName: 'Layaway Management',
  features: [
    { id: 1001, name: 'Enter Layaway Against a Customer', status: 'yes' },
    { id: 1002, name: 'Select Items by Barcode Scan', tooltip: 'Scan the item barcode directly into the layaway entry.', status: 'yes' },
    { id: 1003, name: 'Set Total Layaway Amount with Currency', status: 'yes' },
    { id: 1004, name: 'View & Manage All Active Layaways', status: 'yes' },
    { id: 1005, name: 'Party / Customer Assignment', status: 'yes' },
  ],
},
{
  id: 3,
  groupName: 'Scheme Management',
  features: [
    { id: 1101, name: 'Create & Manage Customer  Schemes', tooltip: 'Set up gold or money  schemes for customers to join.', status: 'yes' },
    { id: 1102, name: 'Scheme Name, Start Date & Max Participants', status: 'yes' },
    { id: 1103, name: 'Set Period in Months & Amount Per Period', status: 'yes' },
    { id: 1105, name: 'Track Participants Per Scheme', status: 'yes' },
    { id: 1106, name: 'Auto Scheme Number Generation', status: 'yes' },
  ],
},
];