import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-[#1EA69A]">
        Terms of Service
      </h1>

      <p className="mb-4">
        Welcome to [Your Website Name]. By using our Lost & Found website, you agree
        to these Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our services, you confirm that you accept these
        Terms and agree to comply with them. If you do not agree, you must not
        use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Services Provided</h2>
      <p className="mb-4">
        Our platform allows users to post, search, and connect over lost and
        found items. We act only as a facilitator and are not responsible for
        the accuracy of user submissions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide truthful and accurate information when submitting a post.</li>
        <li>Do not post false claims or attempt to mislead others.</li>
        <li>Respect the privacy of other users and do not misuse their contact information.</li>
        <li>Do not post illegal, offensive, or harmful content.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer</h2>
      <p className="mb-4">
        We do not guarantee the recovery of any lost item. All arrangements
        between users happen at their own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        We are not responsible for any direct or indirect damages arising from
        your use of our platform, including but not limited to loss of property
        or disputes between users.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account if you
        violate these Terms or engage in harmful activities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Any changes will be posted
        on this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        If you have any questions about these Terms, contact us at{" "}
        <a href="mailto:your-email@example.com" className="text-sky-600">
          your-email@example.com
        </a>.
      </p>

      <p className="text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsOfService;
