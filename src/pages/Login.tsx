"use client";

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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Invalid Email.",
  }),
  password: z.string().min(6, {
    message: "Password must have at least 6 characters.",
  }),
});

export function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (values: z.infer<typeof formSchema>) => {
  try{
    const userCredential=  await signInWithEmailAndPassword(auth, values.email, values.password);
    return userCredential.user;
  }
  catch(e){
    console.log(e);
    return e;
  }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-[400px] h-auto p-6 rounded-md bg-orange-300">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(login)} className="space-y-8">
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

            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;