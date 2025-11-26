"use client";

import React from "react";
import { Globe, Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSiteInfoQuery } from "@/redux/features/siteInfo/siteInfo.api";
import Image from "next/image";
import Link from "next/link";
import UpdateSiteInfoModal from "@/components/modules/dashboard/siteInfo/UpdateSiteInfoModal";

export default function SiteInfoViewPage() {
  const { data, isLoading } = useGetSiteInfoQuery();
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

  const socialIcons: Record<string, { icon: React.ElementType; color: string }> = {
    facebook: { icon: Facebook, color: "text-blue-600" },
    instagram: { icon: Instagram, color: "text-pink-600" },
    youtube: { icon: Youtube, color: "text-red-600" },
    twitter: { icon: Twitter, color: "text-sky-500" },
    linkedin: { icon: Linkedin, color: "text-blue-700" },
    whatsapp: { icon: MessageCircle, color: "text-green-500" },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Globe className="w-9 h-9" />
            Site Information
          </h1>
          <p className="text-muted-foreground mt-1">Global website settings & contact details</p>
        </div>
        <UpdateSiteInfoModal defaultValues={siteInfo} />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Branding */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5" /> Branding</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            {siteInfo.logoUrl ? (
              <Image src={siteInfo.logoUrl} alt="Logo" width={300} height={120} className="mx-auto max-h-32 object-contain rounded-lg border p-4 shadow-sm" />
            ) : <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-32 mx-auto flex items-center justify-center">No Logo</div>}
            <h3 className="text-2xl font-bold">{siteInfo.siteTitle || "—"}</h3>
            {siteInfo.siteTagline && <p className="text-muted-foreground italic">{siteInfo.siteTagline}</p>}
            {siteInfo.faviconUrl && <Image src={siteInfo.faviconUrl} alt="Favicon" width={50} height={50} className="mx-auto rounded border" />}
          </CardContent>
        </Card>

        {/* Contact & Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Info */}
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5"/> Contact Information</CardTitle></CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              {siteInfo.adminEmail && <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-500" /><div><p className="text-sm text-muted-foreground">Admin Email</p><p className="font-medium">{siteInfo.adminEmail}</p></div></div>}
              {siteInfo.supportEmail && <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-500" /><div><p className="text-sm text-muted-foreground">Support Email</p><p className="font-medium">{siteInfo.supportEmail}</p></div></div>}
              {siteInfo.phone && <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-500" /><div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">{siteInfo.phone}</p></div></div>}
              {siteInfo.supportPhone && <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-500" /><div><p className="text-sm text-muted-foreground">Support Phone</p><p className="font-medium">{siteInfo.supportPhone}</p></div></div>}
              {siteInfo.address && <div className="flex items-start gap-3 md:col-span-2"><MapPin className="w-5 h-5 text-gray-500 mt-1"/><div><p className="text-sm text-muted-foreground">Address</p><p className="font-medium">{siteInfo.address}</p></div></div>}
            </CardContent>
          </Card>

          {/* Business Hours */}
          {siteInfo.businessHours && <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Clock className="w-5 h-5"/> Business Hours</CardTitle></CardHeader>
            <CardContent><p>{siteInfo.businessHours.days?.join(", ") || "Every day"} {siteInfo.businessHours.start} – {siteInfo.businessHours.end}</p></CardContent>
          </Card>}

          {/* Map */}
          {siteInfo.mapEmbedUrl && <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="w-5 h-5"/> Location</CardTitle></CardHeader>
            <CardContent><iframe src={siteInfo.mapEmbedUrl} width="100%" height="300" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></CardContent>
          </Card>}

          {/* Social */}
          {siteInfo.social && Object.values(siteInfo.social).some(Boolean) && <Card>
            <CardHeader><CardTitle>Social Media</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {Object.entries(siteInfo.social).map(([platform, url]) => url && (
                <Link key={platform} href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-xl">
                  {React.createElement(socialIcons[platform]?.icon || Globe, { className: `w-10 h-10 ${socialIcons[platform]?.color || "text-gray-600"}` })}
                  <span className="mt-2 text-sm font-medium capitalize">{platform}</span>
                </Link>
              ))}
            </CardContent>
          </Card>}
        </div>
      </div>
    </div>
  );
}
