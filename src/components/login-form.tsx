
"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/loginUser";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ISiteInfo } from "@/types";
import config from "@/config";

const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema)
  });
  const router = useRouter();
  const [siteInfo, setSiteInfo] = useState<ISiteInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingSiteInfo, setLoadingSiteInfo] = useState(true);

  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        const res = await fetch(`${config.baseUrl}/site-info`);
        if (!res.ok) throw new Error("Failed to fetch site info");
        const data = await res.json();
        setSiteInfo(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingSiteInfo(false);
      }
    };

    fetchSiteInfo();
  }, []);

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    setLoading(true)
    const res = await loginUser(data);

    if (res.success) {
      toast.success("Login successful!");
      router.push("/dashboard");
      setLoading(false)
    } else {
      toast.error(res.message || "Login failed!");
      setLoading(false)
    }

  };

  if (loadingSiteInfo) {
    return <p className="text-center mt-10">Loading login page...</p>;
  }

  return (
    <div className={cn("flex justify-center items-center min-h-screen", className)} {...props}>
      <Card className="w-full max-w-md shadow-lg border border-gray-200">
        <CardHeader>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={siteInfo?.mainLogo ? siteInfo?.mainLogo : "https://res.cloudinary.com/dog2ins5h/image/upload/v1766768290/Saa-Logo-Final-v2-c_owooet.png"}
                alt="SAA Accounting Logo"
                width={80}
                height={80}
                priority
              />
            </Link>
          </div>
          <CardTitle className="text-center text-3xl font-bold text-[#002047]">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-[#65758B]">
            Enter your credentials to log in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={loading} type="submit" className="w-full cursor-pointer">
                {
                  loading ? "Logging..." : "Login"
                }
                
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
