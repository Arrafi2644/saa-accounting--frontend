"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { ProfileAvatar } from "@/components/modules/dashboard/ProfileAvatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function ProfilePage() {

  const { data, isLoading } = useUserInfoQuery(undefined)

  console.log(data?.data);

  return (
    <div className="w-full mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>

      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-xl">Personal Information</CardTitle>
        </CardHeader>
        <Separator />

        <CardContent className="mt-4 space-y-4">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <Avatar className=" h-20 w-20">
              <AvatarImage className="object-cover" src={data?.data.email ? data?.data.picture : `https://github.com/shadcn.png`} alt="@shadcn" />
              <AvatarFallback><User /></AvatarFallback>
            </Avatar>
          </div>
          <p>Name: {data?.data.name}</p>
          <p>Email: {data?.data.email}</p>
          <p>Role: {data?.data.role}</p>
        </CardContent>
      </Card>
    </div>
  );
}
