// import { useId } from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Plus } from "lucide-react"

// export default function RegisterModal() {
//   const id = useId()
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button size="sm"> <Plus /> Add User</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <div className="flex flex-col items-center gap-2">
//           <DialogHeader>
//             <DialogTitle className="sm:text-center">
//               Add New User
//             </DialogTitle>
//             <DialogDescription className="sm:text-center">
//               We just need a few details to get you started.
//             </DialogDescription>
//           </DialogHeader>
//         </div>

//         <form className="space-y-5">
//           <div className="space-y-4">
//             <div className="*:not-first:mt-2">
//               <Label htmlFor={`${id}-name`}>Full name</Label>
//               <Input
//                 id={`${id}-name`}
//                 placeholder="Matt Welsh"
//                 type="text"
//                 required
//               />
//             </div>
//             <div className="*:not-first:mt-2">
//               <Label htmlFor={`${id}-email`}>Email</Label>
//               <Input
//                 id={`${id}-email`}
//                 placeholder="hi@yourcompany.com"
//                 type="email"
//                 required
//               />
//             </div>
//             <div className="*:not-first:mt-2">
//               <Label htmlFor={`${id}-password`}>Password</Label>
//               <Input
//                 id={`${id}-password`}
//                 placeholder="Enter your password"
//                 type="password"
//                 required
//               />
//             </div>
//           </div>
//           <Button type="button" className="w-full">
//             Create User
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }


"use client";

import { useId, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/user/user.api";


const registerSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterValues = z.infer<typeof registerSchema>;


export default function RegisterModal() {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [register, { isLoading }] = useRegisterMutation()


  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

const onSubmit = async (data: RegisterValues) => {
  try {
    const res = await register(data).unwrap();

    if (res.success) {
      toast.success("User created successfully!");
      form.reset();
      setOpen(false);
    }
  } catch (error) {
    toast.error("Failed to create user");
    console.log(error);
  }
};



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className=" h-4 w-4" />
          Add User
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4">
        <div className="flex flex-col items-center gap-2">
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Add New User
            </DialogTitle>
            <p className="text-sm text-muted-foreground sm:text-center">
              We just need a few details to get you started.
            </p>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel htmlFor={`${id}-name`}>Full name</FormLabel>
                  <FormControl>
                    <Input
                      id={`${id}-name`}
                      placeholder="Matt Welsh"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel htmlFor={`${id}-email`}>Email</FormLabel>
                  <FormControl>
                    <Input
                      id={`${id}-email`}
                      placeholder="hi@yourcompany.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel htmlFor={`${id}-password`}>Password</FormLabel>
                  <FormControl>
                    <Input
                      id={`${id}-password`}
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Create User
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
