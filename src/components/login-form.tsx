/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { role } from "@/constants/role";

const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [login, {isLoading}] = useLoginMutation()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
   

const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
  console.log(data);

  try {
    const res = await login(data).unwrap();
    console.log(res);

    if (res.success === true) {
      toast.success("Login successful.");

      if (res.data.user.role === role.admin) {
        router.push("/dashboard/admin/user-management");
      } else if (res.data.user.role === role.editor) {
        router.push("/dashboard/service-management");
      } else {
        router.push("/"); // default redirect if needed
      }
    }
  } catch (error: any) {
    console.log("login error ", error);
    if(error.status === 401){
      toast.error("Incorrect password");
    }else if(error.status === 404){
      toast.error("User not exist")
    }else{
      toast.error("Login failed! Try again")
    }
  }
};

  return (
    <div className={cn("flex justify-center items-center min-h-screen", className)} {...props}>
      <Card className="w-full max-w-md shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-900">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
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

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
