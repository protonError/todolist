import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@src/components/ui/badge"
import { Button } from "@src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu"
import { Input } from "@src/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@src/components/ui/sheet"
import TaskList from "@src/components/Todo/TodoList"

function HomePage() {
  return (
    <TaskList />
  )
}
export default HomePage;
