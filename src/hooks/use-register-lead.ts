import React, { useState, useEffect, FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import { LeadData } from '@/types';
import { sendVerificationEmail } from '@/lib/google/gmail';
import { storeUnverifiedLead } from '@/lib/google/sheets';
import { validateEmail, validatePhone } from '@/lib/utils';

export function useRegisterLeads() {
  const [leadData, setLeadData] = useState(getInitialLeadData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const locale = useLocale();

  const success = useTranslations('success');
  const errors = useTranslations('errors');

  useEffect(() => {
    const savedData = localStorage.getItem("leadData");
    if (savedData) {
      setLeadData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    const hasValue = Object.values(leadData).some(value =>
      typeof value === 'string' ? value.trim() !== '' : value === true
    );

    if (hasValue) {
      localStorage.setItem("leadData", JSON.stringify(leadData));
    }
  }, [leadData]);

  const handleInputChange = (name: keyof LeadData, value: string | boolean) => {
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const registerLead = async (leadData: LeadData) => {
    try {
      if (!validateEmail(leadData.email)) {
        throw new Error('INVALID_EMAIL');
      }

      else if (leadData.phone && !validatePhone(leadData.phone)) {
        throw new Error('INVALID_PHONE');
      }

      const token = await storeUnverifiedLead({
        ...leadData,
        locale
      });

      await sendVerificationEmail(leadData.email, locale, token);

      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await registerLead(leadData);

      toast.success(success("LEAD_REGISTERED"));
      setLeadData(getInitialLeadData());
      localStorage.removeItem("leadData");
    } catch (error) {
      const message = error instanceof Error ? error.message : "DEFAULT";
      toast.error(errors.has(message) ? errors(message) : errors("DEFAULT"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return { leadData, isSubmitting, handleInputChange, handleSubmit };
}

function getInitialLeadData(): LeadData {
  return {
    name: '',
    surname: '',
    email: '',
    phone: '',
    referralSource: '',
    interestInBeta: false,
    privacyPolicy: false,
  };
}