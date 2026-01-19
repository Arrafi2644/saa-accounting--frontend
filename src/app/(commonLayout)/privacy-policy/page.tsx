"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#002047]">Privacy Policy</h1>
      <ScrollArea className="h-[80vh]">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This Privacy Policy applies to the website <strong><a href="https://saa-accounting-client.vercel.app">saa-accounting-client.vercel.app</a></strong> and to the services
              provided by SAA Accounting Services Limited. We are committed to protecting your privacy
              and complying with the New Zealand Privacy Act 2020 when handling personal information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We may collect the following personal data:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Business and financial information required for providing services</li>
              <li>Contact form submissions and newsletter subscriptions</li>
              <li>Usage data via cookies and analytics tools</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We use personal information to provide our accounting and advisory services,
              respond to inquiries, improve our website, and communicate updates or promotions
              (with your consent).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Disclosure of Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We do not sell your personal information. We may share data with trusted service
              providers solely to operate the website or deliver services (e.g., cloud accounting
              platforms like Xero or MYOB). We may also disclose information if required by law.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cookies & Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our website may use cookies and similar tracking technologies for analytics and
              user experience purposes. You can control cookies through your browser settings.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You may request access to your personal information and request corrections if
              the data is inaccurate. Contact us at <strong>info@saaaccounting.co.nz</strong> for assistance.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: <a href="mailto:info@saaaccounting.co.nz" className="text-blue-600">info@saaaccounting.co.nz</a></p>
            <p>Phone: +64 123 456 789</p>
            <p>Auckland CBD, New Zealand</p>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}
