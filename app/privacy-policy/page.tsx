'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Link href="/" className="mb-8 flex items-center text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert">
        <p className="mb-6 text-muted-foreground">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
          <p>
            Tutx (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you use our coaching management platform. Please read this
            privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
          <p>We collect information that you provide directly to us when you:</p>
          <ul className="mb-4 list-disc pl-6">
            <li>Register for an account</li>
            <li>Create or modify your profile</li>
            <li>Manage courses and batches</li>
            <li>Process student enrollments</li>
            <li>Track attendance</li>
            <li>Process payments</li>
            <li>Use our communication features</li>
          </ul>

          <p>This information may include:</p>
          <ul className="list-disc pl-6">
            <li>Personal identifiers (name, email address, phone number)</li>
            <li>Institute information</li>
            <li>Student records</li>
            <li>Course and curriculum data</li>
            <li>Attendance records</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and manage course enrollments</li>
            <li>Track student attendance</li>
            <li>Process payments and manage financial records</li>
            <li>Send automated reminders about payments and other important notifications</li>
            <li>Generate analytics and reports about your institute&apos;s performance</li>
            <li>Customize your experience with themes and personalization options</li>
            <li>Communicate with you about our services, updates, and promotional offers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However,
            please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Data Retention</h2>
          <p>
            We will retain your information for as long as your account is active or as needed to provide you services. If you wish to
            cancel your account or request that we no longer use your information, please contact us. We will retain and use your
            information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Third-Party Services</h2>
          <p>
            Our platform may integrate with third-party services for specific functionalities such as payment processing and communication
            (WhatsApp/email). These third parties may collect information about you when you use our platform. We encourage you to review
            the privacy policies of these third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6">
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this
            page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            Email: support@tutx.co.in
            <br />
          </p>
        </section>
      </div>
    </div>
  );
}
