// components/SignIn.js
"use client"
import React, { useState } from 'react';
import { Button } from '@src/components/ui/button';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@src/components/ui/form';
import { Input } from '@src/components/ui/input';
import { useRouter } from 'next/navigation'
import { useDispatch, } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@src/components/ui/card';
import Head from 'next/head';
import ThemeToggler from '@src/components/layout/ThemeToggler';
import { successHandler } from '@src/lib/functions';
import { toast } from "@src/components/ui/use-toast";
const formSchema = z.object({
    email: z
        .string({
            required_error: "Please enter your email",
        })
        .min(1, {
            message: "Please enter your email",
        })
        .email("This is not a valid email"),
    password: z
        .string({
            required_error: "Please enter your password",
        })
        .min(6, { message: "Password has to be at least 6 characters long." }),
});
const SignIn = () => {
    const credentials = {
        email: "dev@gmail.com",
        password: "dev@1234"
    }
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });

    const router = useRouter();

    async function onSubmit(values) {
        setLoading(true);
        const { email, password } = values;
        console.log(email, password);

        // match credentials 
        if (email === credentials.email && password === credentials.password) {
            setLoading(false);
            // Set cookies after login with expiration of 5 days
            const expiration = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `authtoken=${"sdssdsd"}; path=/; expires=${expiration};`;
            router.push('/');
            successHandler("success", "Login successfully")
        } else {
            setLoading(false);
            toast({
                variant: "destructive",
                title: "Email or password is incorrect"
            })
        }

    }

    return (
        <React.Fragment>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to your account" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <div className='flex justify-start items-center h-screen w-full flex-col'>
                <div className='px-6 py-4 flex justify-between items-center w-full'>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
                        TodoList App
                    </h1>
                    <ThemeToggler />
                </div>
                <Card className="mx-auto min-w-[7rem] max-w-[22rem] sm:max-w-[30rem] sm:min-w-[22rem] md:min-w-[30rem] mt-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your credentials below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="johndoe@whatever.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">


                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="password" type="password" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline text-foreground"
                                    >
                                        Forgot your password?
                                    </Link>
                                    <Button type="submit" isLoading={loading} className="w-full">
                                        Login
                                    </Button>
                                    <Button variant="outline" type="button" className="w-full">
                                        Login with Google
                                    </Button>
                                </div>
                                <div className="mt-4 text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link href="#" className="underline">
                                        Sign up
                                    </Link>
                                </div>


                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default SignIn;
