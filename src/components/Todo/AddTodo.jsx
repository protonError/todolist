// File path: /src/components/AddTodo.jsx

"use client"

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@src/components/ui/label";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Button } from "@src/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@src/components/ui/radio-group";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTrigger } from "../ui/drawer";
import { PlusCircleIcon } from "lucide-react";
import { toast } from "@src/components/ui/use-toast";
import { generateKey } from "@src/lib/functions";
import { addTodo, updateTodo } from "@src/slices/todoSlice";
import { useDispatch } from "react-redux";

// Task schema with Zod validation
const taskSchema = z.object({
    name: z.string().min(1, "Task name is required"),
    description: z.string().min(1, "Task description is required"),
    tags: z.array(z.string()),
    status: z.enum(["todo", "in-progress", "done"]),
});

export default function AddTodo({ task, isEdit, open, setOpen, setEdit }) {

    const form = useForm({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            name: task?.name || "",
            description: task?.description || "",
            tags: task?.tags || [],
            status: task?.status || "todo"
        }
    });
    const dispatch = useDispatch()
    const watchTags = form.watch("tags");

    const handleTagChange = (tag) => {
        const currentTags = watchTags;
        const updatedTags = currentTags.includes(tag) ? currentTags.filter((t) => t !== tag) : [...currentTags, tag];
        form.setValue("tags", updatedTags);
    };

    const handleAddTask = (data) => {
        const formatdata = {
            ...data,
            tags: watchTags,
            id: generateKey(),
            status: "todo"
        }
        dispatch(addTodo(formatdata));
        form.reset();
        setOpen(false);
        toast({
            title: "Task added successfully",
        });
    };

    const handleEditTask = (data) => {
        const formatdata = {
            ...data,
            tags: watchTags,
            id: task.id
        }
        dispatch(updateTodo(formatdata));
        form.reset();
        setOpen(false);
        toast({
            title: "Task updated successfully",
        });
    };


    useEffect(() => {
        if (isEdit) {
            form.setValue("name", task.name);
            form.setValue("description", task.description);
            form.setValue("tags", task.tags);
            form.setValue("status", task.status);
        } else {
            form.reset();
        }
    }, [isEdit, task, form]);
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button size="sm" variant="outline" icon={<PlusCircleIcon className="h-4 w-4" />} className="ml-auto gap-1" onClick={() => setEdit(false)}>
                    Add Todo
                </Button>
            </DrawerTrigger>
            <DrawerContent className="">
                <div className="flex flex-col items-center justify-center my-10">
                    <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-4 text-card-foreground">{isEdit ? "Edit To-Do List" : "To-Do List"}</h1>
                        <form onSubmit={isEdit ? form.handleSubmit(handleEditTask) : form.handleSubmit(handleAddTask)} className="flex flex-col items-start mb-4 gap-4">
                            <div className="flex flex-col w-full gap-3">
                                <Label htmlFor="name" className="text-card-foreground">
                                    Task Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Add a new task..."
                                    {...form.register("name")}
                                    className="rounded-md border border-input w-full px-3 py-2 text-card-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                {form.formState.errors.name && <p className="text-red-500">{form.formState.errors.name.message}</p>}
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <Label htmlFor="description" className="text-card-foreground">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Add a description..."
                                    {...form.register("description")}
                                    className="rounded-md border  border-input px-3 py-2 text-card-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                {form.formState.errors.description && <p className="text-red-500">{form.formState.errors.description.message}</p>}
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <Label className="text-card-foreground">Tags</Label>
                                <div className="flex flex-wrap gap-2">
                                    {["work", "personal", "shopping", "errands"].map((tag) => (
                                        <Button
                                            key={tag}
                                            type="button"
                                            variant={watchTags.includes(tag) ? "outline" : "solid"}
                                            onClick={() => handleTagChange(tag)}
                                            className="text-card-foreground"
                                        >
                                            {tag}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            {!isEdit && <div className="flex flex-col w-full gap-3">
                                <Label className="text-card-foreground">Status</Label>
                                <RadioGroup
                                    onValueChange={(value) => form.setValue("status", value)}
                                    defaultValue={form.getValues("status")}
                                    className="flex gap-4"
                                >
                                    <RadioGroupItem id="todo" value="todo" />
                                    <Label htmlFor="todo" className="text-card-foreground">To Do</Label>
                                </RadioGroup>
                                {form.formState.errors.status && <p className="text-red-500">{form.formState.errors.status.message}</p>}
                            </div>}
                            {isEdit && <div className="flex flex-col w-full gap-3">
                                <Label className="text-card-foreground">Status</Label>
                                <RadioGroup
                                    onValueChange={(value) => form.setValue("status", value)}
                                    defaultValue={form.getValues("status")}
                                    className="flex gap-4"
                                >
                                    <RadioGroupItem id="todo" value="todo" />
                                    <Label htmlFor="todo" className="text-card-foreground">To Do</Label>
                                    <RadioGroupItem id="in-progress" value="in-progress" />
                                    <Label htmlFor="in-progress" className="text-card-foreground">In Progress</Label>
                                    <RadioGroupItem id="done" value="done" />
                                    <Label htmlFor="done" className="text-card-foreground">Done</Label>
                                </RadioGroup>
                                {form.formState.errors.status && <p className="text-red-500">{form.formState.errors.status.message}</p>}
                            </div>}
                            <div className="flex flex-row gap-4">
                                <DrawerClose asChild>
                                    <Button onClick={() => setEdit(false)} variant="outline" size="lg" className="W-[14rem] max-w-[40rem] mx-auto">
                                        Cancel
                                    </Button>
                                </DrawerClose>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-primary text-primary-foreground rounded-md px-3 py-2 hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
                                >
                                    {isEdit ? "Update Task" : "Add Task"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

