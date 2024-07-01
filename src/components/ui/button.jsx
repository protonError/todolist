import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-[#3576DF] focus-visible:ring-offset-0 focus-visible:ring-0 !outline-none text-background hover:bg-[#3576DF]/90 dark:bg-[#3576DF]  dark:hover:bg-[#3576DF]/90",
        destructive:
          "bg-[#FF5722] text-white hover:bg-[#E64A19] dark:bg-[#FF5722] dark:text-white dark:hover:bg-[#E64A19]",
        outline:
          "border border-[#3576DF] border-2 !bg-inherit text-[#3576DF] hover:bg-[#E8F5E9] dark:border-[#3576DF] dark:text-[#3576DF] ",
        secondary:
          "bg-[#FFC107] text-black hover:bg-[#FFB300] dark:bg-[#FFC107] dark:text-black dark:hover:bg-[#FFB300]",
        ghost:
          "hover:bg-gray-100 !text-foreground focus-visible:!ring-0 ",
        link:
          "text-[#3576DF] underline-offset-4 hover:underline dark:text-[#3576DF]",
        loading:
          "bg-[#3576DF] text-background cursor-not-allowed opacity-70 dark:bg-[#3576DF] dark:text-[#020817]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ variant, icon, className, size, asChild = false, isLoading = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const buttonVariant = isLoading ? 'loading' : variant;
  return (
    <Comp
      className={cn(buttonVariants({ variant: buttonVariant, size, className }))}
      ref={ref}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      ) : null}
      {icon && icon}
      {props.children}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
