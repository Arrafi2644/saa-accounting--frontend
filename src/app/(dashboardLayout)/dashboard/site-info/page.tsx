/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSiteInfoQuery } from "@/redux/features/siteInfo/siteInfo.api";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteInfoViewPage() {
  const { data, isLoading } = useGetSiteInfoQuery(undefined);
  const siteInfo = data?.data;

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <Skeleton className="h-12 w-64" />
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader><Skeleton className="h-6 w-40" /></CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-32 w-full rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!siteInfo) {
    return (
      <div className="max-w-4xl mx-auto p-16 text-center">
        <div className="bg-gray-100 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Globe className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">No Site Information Found</h2>
        <p className="text-muted-foreground">Please create site information from the admin panel.</p>
      </div>
    );
  }

  // Social platform config with icon and color
  const socialPlatforms = [
    { key: "facebook" as const, icon: Facebook, name: "Facebook" },
    { key: "instagram" as const, icon: Instagram, name: "Instagram" },
    { key: "youtube" as const, icon: Youtube, name: "YouTube" },
    { key: "twitter" as const, icon: Twitter, name: "X (Twitter)" },
    { key: "linkedin" as const, icon: Linkedin, name: "LinkedIn" },
    { key: "whatsapp" as const, icon: MessageCircle, name: "WhatsApp" },
    { key: "tiktok" as const, icon: Globe, name: "TikTok" },
    { key: "pinterest" as const, icon: Globe, name: "Pinterest" },
  ];

  // Filter only platforms that have a URL
  const activeSocials = socialPlatforms
    .filter((platform) => siteInfo[platform.key])
    .map((platform) => ({
      ...platform,
      url: siteInfo[platform.key]!,
    }));

  return (
    <div className="container mx-auto p-4 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Globe className="w-9 h-9" />
            Site Information
          </h1>
          <p className="text-muted-foreground mt-1">Global website settings & contact details</p>
        </div>

          <Button>
            <Link href="/dashboard/update-siteinfo">Update Site Info</Link>
          </Button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Branding Section */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Branding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            {/* Main Logo */}
            {siteInfo.mainLogo ? (
              <div className="relative mx-auto w-64 h-40">
                <Image
                  src={siteInfo.mainLogo}
                  alt="Main Logo"
                  fill
                  className="object-contain rounded-lg border p-4 shadow-sm bg-white"
                />
              </div>
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-32 mx-auto flex items-center justify-center">
                <span className="text-gray-500">No Main Logo</span>
              </div>
            )}

            <h3 className="text-2xl font-bold">{siteInfo.siteTitle || "—"}</h3>
            {siteInfo.siteTagline && (
              <p className="text-muted-foreground italic text-lg">{siteInfo.siteTagline}</p>
            )}

            {/* Footer Logo */}
            {siteInfo.footerLogo ? (
              <>
                <p className="text-sm text-muted-foreground mt-6">Footer Logo</p>
                <div className="relative mx-auto w-48 h-24 ">
                  <Image
                    src={siteInfo.footerLogo}
                    alt="Footer Logo"
                    fill
                    className="object-contain rounded border shadow-sm bg-[#002047] "
                  />
                </div>
              </>
            ) : null}

            {/* Favicon */}
            {siteInfo.faviconLogo ? (
              <>
                <p className="text-sm text-muted-foreground mt-6">Favicon</p>
                <Image
                  src={siteInfo.faviconLogo}
                  alt="Favicon"
                  width={64}
                  height={64}
                  className="mx-auto rounded border shadow"
                />
              </>
            ) : null}
          </CardContent>
        </Card>

        {/* Contact & Social Section */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact & Social Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Emails */}
              {siteInfo.mainEmail && (
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Main Email</p>
                    <a href={`mailto:${siteInfo.mainEmail}`} className="font-medium text-primary hover:underline">
                      {siteInfo.mainEmail}
                    </a>
                  </div>
                </div>
              )}

              {siteInfo.supportEmail && (
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Support Email</p>
                    <a href={`mailto:${siteInfo.supportEmail}`} className="font-medium text-primary hover:underline">
                      {siteInfo.supportEmail}
                    </a>
                  </div>
                </div>
              )}

              {/* Phones */}
              {siteInfo.phone && (
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href={`tel:${siteInfo.phone}`} className="font-medium text-primary hover:underline">
                      {siteInfo.phone}
                    </a>
                  </div>
                </div>
              )}

              {siteInfo.supportPhone && (
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Support Phone</p>
                    <a href={`tel:${siteInfo.supportPhone}`} className="font-medium text-primary hover:underline">
                      {siteInfo.supportPhone}
                    </a>
                  </div>
                </div>
              )}

              {/* Address */}
              {siteInfo.address && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">{siteInfo.address}</p>
                  </div>
                </div>
              )}

              {/* Social Links - Same Style */}
              {activeSocials.map(({ key, icon: Icon, name, url }) => (
                <div key={key} className="flex items-center gap-4">
                  <Icon className={`w-5 h-5 text-gray-500`} />
                  <div>
                    <p className="text-sm text-muted-foreground">{name}</p>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      {url.replace(/^https?:\/\//, "").replace(/www\./, "")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Google Map - Separate Card */}
          {siteInfo.mapEmbedUrl && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location on Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 rounded-lg overflow-hidden border">
                  <iframe
                    src={siteInfo.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}