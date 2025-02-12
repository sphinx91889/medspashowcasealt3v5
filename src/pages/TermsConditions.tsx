import React from 'react';
import PolicyPage from './PolicyPage';

const TermsConditions = () => {
  const content = [
    "By accessing and using the Examplus Medical Spa website, you agree to these Terms and Conditions.",
    "All content on this website is the property of Examplus Medical Spa and is protected by copyright laws.",
    "We reserve the right to modify our services, pricing, and website content at any time without prior notice.",
    "Users are responsible for maintaining the confidentiality of their account information and all activities under their account."
  ];

  return <PolicyPage title="Terms & Conditions" content={content} />;
};

export default TermsConditions;
