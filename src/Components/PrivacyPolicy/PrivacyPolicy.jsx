import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-[#292A35]">
        Privacy Policy
      </h1>

      <p className="mb-4">
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our Lost & Found website. By using our
        services, you agree to the terms outlined here.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal details such as your name and email when you submit an item or contact us.</li>
        <li>Information about lost or found items that you post.</li>
        <li>Technical information like your IP address, browser type, and usage data.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To display lost and found listings.</li>
        <li>To respond to inquiries and connect item owners with finders.</li>
        <li>To improve our website’s features and security.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share your contact
        details with another user only if it is necessary to help you recover
        your lost item or return a found one.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from
        unauthorized access, disclosure, or misuse. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You can request to update or delete your personal information by
        contacting us at <a href="mailto:your-email@example.com" className="text-sky-600">your-email@example.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated date.
      </p>

      <p className="text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
