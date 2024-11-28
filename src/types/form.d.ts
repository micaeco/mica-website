import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface BaseFormField {
  label: string;
  link?: string;
  name: string;
  required: boolean;
  onChange?: (value: string | boolean) => void;
  value?: string | boolean;
  className?: string;
  error?: string;
}

export interface FormInputField extends BaseFormField {
  description?: string;
  type: 'input';
  icon?: LucideIcon;
  inputType: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date' | 'checkbox';
  placeholder?: string;
}

export interface FormSelectField extends BaseFormField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
}

export type FormField = InputField | SelectField;

export interface LeadData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  referralSource: string;
  interestInBeta: boolean;
  privacyPolicy: boolean;
}
