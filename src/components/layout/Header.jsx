"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { CircleUser, } from 'lucide-react'
import ThemeToggler from './ThemeToggler'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove('authToken');
        router.push('/login');
    };

    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between w-full gap-4 border-b bg-background px-4 md:px-6">
                <h3 className='w-full font-bold text-lg'>Todo List</h3>
            <div className="flex w-full  justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Header
