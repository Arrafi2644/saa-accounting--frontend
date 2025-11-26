"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Shield, 
  Calendar,
} from "lucide-react";
import { IUser } from "@/types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


interface UserDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: IUser & {
    name?: string;
    email?: string;
    role?: string;
    isActive?: boolean | string;
    picture?: string;
    joinedAt?: string;
    location?: string;
  };
}

export default function UserDetailsModal({
  open,
  onOpenChange,
  user,
}: UserDetailsModalProps) {
  if (!user) return null;


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
          {/* Hidden title required for accessibility */}
  <VisuallyHidden>
    <DialogHeader>
      <DialogTitle>User Details</DialogTitle>
      <DialogDescription>
        Detailed information about the selected user.
      </DialogDescription>
    </DialogHeader>
  </VisuallyHidden>
        {/* Gradient Header */}
        <div className="relative h-32 bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500">
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <DialogHeader className="px-6 pt-2 pb-4 -mt-16 relative">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-28 w-28 ring-8 ring-white shadow-2xl border-4 border-white">
              <AvatarImage className="object-cover" src={user?.picture} alt={user.name} />
              <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                {user.name?.[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="mt-4">
              <p className="text-muted-foreground mt-1">@{user.name?.toLowerCase().replace(/\s/g, "") || "user"}</p>
            </div>
          </div>
        </DialogHeader>

        {/* Info Cards */}
        <div className="px-6 pb-6 space-y-4">
          <Card className="border-0 shadow-sm bg-gray-50/70">
            <div className="p-5 space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-600">Email</span>
                </div>
                <span className="text-right max-w-[180px] break-all font-medium text-gray-900">
                  {user.email || "Not provided"}
                </span>
              </div>
              <Separator />

              {/* Role */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-600">Role</span>
                </div>
                <Badge 
                  variant={user.role === "ADMIN" ? "destructive" : "secondary"}
                  className={user.role === "ADMIN" ? "bg-red-500" : "bg-emerald-100 text-emerald-700"}
                >
                  {user.role || "User"}
                </Badge>
              </div>
              <Separator />

              {user.createdAt && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Calendar className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="font-medium text-gray-600">Joined</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric"
                      })}
                    </span>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <DialogFooter className="border-t bg-gray-50/80 px-6 py-4">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto font-medium"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}