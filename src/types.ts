export type SolutionType = 'all' | 'it' | 'hardware';

export type IndustryType = 'textile' | 'retail' | 'bank' | 'transport' | 'gov';

export interface Solution {
  id: string;
  title: string;
  version: string;
  type: 'it' | 'hardware';
  typeLabel: string;
  industry: IndustryType;
  industryLabel: string;
  coFinancingBadge: string;
  sla: string;
  targetLoss: string;
  provenEffect: string;
  paybackPeriod: string;
  packageComposition: string;
  vendor: string;
  vendorDetails: string;
  ministrySupport: string;
  keywords: string[];
  specs: {
    deploymentTime: string;
    hosting: string;
    compliance: string;
    hardwareNeeded: string;
    integration: string;
    supportChannel: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface MacroScenario {
  count: number;
  label: string;
  inv: string;
  invRaw: number;
  it: string;
  itRaw: number;
  people: string;
  peopleRaw: number;
  ebitda: string;
  ebitdaRaw: number;
  description: string;
}

export interface ApplicationFormData {
  companyName: string;
  inn: string;
  industry: IndustryType;
  contactName: string;
  phone: string;
  email: string;
  selectedSolutionId: string;
  estimatedEmployees: string;
  annualRevenue: string;
  notes: string;
}

export interface MeetingFormData {
  fullName: string;
  organization: string;
  position: string;
  email: string;
  phone: string;
  preferredDate: string;
  topic: string;
}
