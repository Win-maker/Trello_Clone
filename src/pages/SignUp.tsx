"use client";
import { auth } from "@/services/firebaseConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Toast } from "@/components/ui/toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid Email.",
  }),
  password: z.string().min(6, {
    message: "Password must have at least 6 characters.",
  }),
});

export function SignUp() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 const signup = async(values: z.infer<typeof formSchema>) => {
   try{
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    // Toast({
    //     title: "Successfully Sign Up",
    //   });
    console.log(values.email, values.password);
    return userCredential.user;
   }
   catch(e){
    console.error("Sign Up Error", e);
    return e;
   }
 }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-[400px] h-auto p-6 rounded-md bg-white shadow-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signup)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="email ..." {...field} />
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
                    <Input placeholder="password ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Sign Up</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
