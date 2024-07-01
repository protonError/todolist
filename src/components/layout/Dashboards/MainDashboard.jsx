
"use client"
import { Badge } from "@src/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@src/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@src/components/ui/table";
import AddTodo from "@src/components/Todo/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@src/components/ui/button";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTodo } from "@src/slices/todoSlice";

const MainDashboard = () => {
    const { list } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="">
                    <Card className="xl:col-span-2">
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Todo List</CardTitle>
                                <CardDescription></CardDescription>
                            </div>
                            <AddTodo />
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="!text-foreground text-lg">Task name</TableHead>
                                        <TableHead className="!text-foreground text-lg">Task description</TableHead>
                                        <TableHead className="!text-foreground text-lg">Status</TableHead>
                                        <TableHead className="!text-foreground text-lg">Tags</TableHead>
                                        <TableHead className="!text-foreground text-lg">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {list.map((todo) => (
                                        <TableRow key={todo.id}>
                                            <TableCell>
                                                <div className="font-medium text-foreground">{todo?.name || ""}</div>
                                            </TableCell>
                                            <TableCell className="text-foreground">
                                                <div className="hidden text-sm text-muted-foreground md:inline">{todo?.description || ""}</div>
                                            </TableCell>
                                            <TableCell className="text-foreground">{todo?.status || ""}</TableCell>
                                            <TableCell className="text-foreground">
                                                <div className="flex flex-wrap gap-4 items-center my-auto">
                                                    {todo?.tags.map((tag, index) => (
                                                        <Badge key={index} className="text-xs" variant="outline">{tag}</Badge>
                                                    ))}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-foreground">
                                                <div className="flex flex-grow gap-2 items-center">
                                                    <Button size="icons" className="" icon={<MdEdit className="text-2xl m-2 " />}></Button>
                                                    <Button
                                                        size="icons"
                                                        className="!bg-red-900"
                                                        icon={<MdDelete className="text-2xl m-2 " />}
                                                        onClick={() => handleDelete(todo.id)}
                                                    ></Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default MainDashboard;
