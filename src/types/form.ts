import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

// Common properties
interface IBaseFormField {
  label: string;
  link?: string;
  name: string;
  required: boolean;
  onChange?: (value: string | boolean) => void;
  value?: string | boolean;
  className?: string;
  error?: string;
}

// Input-specific properties
export interface IInputField extends IBaseFormField {
  description?: string;
  type: 'input';
  icon?: LucideIcon;
  inputType: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date' | 'checkbox';
  placeholder?: string;
}

// Select-specific properties
export interface ISelectField extends IBaseFormField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
}

export type IFormField = IInputField | ISelectField;

export interface IFormData {
  [key: string]: string | boolean;
}
