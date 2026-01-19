"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#002047]">Terms & Conditions</h1>
            <ScrollArea className="h-[80vh]">
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Agreement</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            These Terms & Conditions govern your use of the website
                            <strong><a href="https://saa-accounting-client.vercel.app">saa-accounting-client.vercel.app</a></strong> and the provision of services by
                            SAA Accounting Services Limited. By accessing the website or using our services,
                            you agree to be bound by these terms.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Scope of Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            SAA provides accounting, tax compliance, bookkeeping, advisory, payroll, and related
                            services tailored for New Zealand businesses. Detailed service descriptions are
                            available on the Services page.
                        </p>
                    </CardContent>
                </Card>


                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Fees & Payment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Fees for services are specified in client engagement agreements or invoices. All
                            payments must be made according to the terms indicated in the invoice.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Your Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Provide accurate and complete information</li>
                            <li>Respond promptly to requests for additional data</li>
                            <li>Pay all fees as agreed</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Confidentiality</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            We will keep your information confidential except where disclosure is required by
                            law, auditing requirements, or regulatory compliance (e.g., IRD).
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Limitation of Liability</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            To the maximum extent permitted by law, SAA is not liable for any indirect,
                            consequential, or special losses arising from the use of the website or services.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Governing Law</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            These Terms are governed by the laws of **New Zealand** and any disputes will be
                            resolved under New Zealand jurisdiction.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Email: <a href="mailto:info@saaaccounting.co.nz" className="text-blue-600">info@saaaccounting.co.nz</a></p>
                        <p>Phone: +64 123 456 789</p>
                    </CardContent>
                </Card>
            </ScrollArea>
        </div>
    );
}
