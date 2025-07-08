// import {
//   BriefcaseBusiness,
//   HousePlug,
//   LogOut,
//   Menu,
//   ShoppingCart,
//   UserCog,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetHeader,
//   SheetClose,
//   SheetTitle,
// } from "../ui/sheet";
// import { Button } from "../ui/button";
// import { portfolioHeaderMenuItems } from "../../config/index";

// function MenuItems() {
//   return (
//     <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
//       {portfolioHeaderMenuItems.map((menuItem) => (
//         <Link
//           className="text-lg pt-5 hover:underline cursor-pointer text-white font-medium"
//           key={menuItem.id}
//           to={menuItem.path}
//         >
//           {menuItem.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }

// function HeaderRightContent() {
//   const navigate = useNavigate();

//   // Placeholder logout handler
//   const handleLogout = () => {
//     // Add your logout logic here
//     navigate("/home");
//   };

//   return (
//     <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild></DropdownMenuTrigger>
//         <DropdownMenuContent
//           side="right"
//           className="w-56 bg-white rounded-md shadow-md space-y-1 py-2"
//         >
//           <DropdownMenuLabel className="text-sm text-muted-foreground px-2 pb-1">
//             Logged in as Guest
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem
//             onClick={() => navigate("/shop/account")}
//             className="flex items-center gap-2 px-2 py-2"
//           >
//             {/* <UserCog className="h-4 w-4" />
//             <span>Account</span> */}
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-2 py-2"
//           >
//             <LogOut className="h-4 w-4" />
//             <span>Logout</span>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="sticky top-0 z-0 w-full  bg-background text-white bg-[#181c23] overflow-hidden">
//       {/* <header className="sticky top-0 z-50 w-full border-b bg-gray-200"> */}
//       <div className="flex h-16 items-center justify-between px-4 md:px-6">
//         <Link to="/home" className="flex h-16 items-center gap-2">
//           <BriefcaseBusiness className="h-6 w-6" />
//           <span className="font-bold">Portfolio</span>
//         </Link>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" size="icon" className="lg:hidden">
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle header menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent
//             side="left"
//             className="w-full max-w-xs px-5 py-7 pb-0  bg-[#181c23] overflow-hidden"
//           >
//             <SheetClose className="text-white" />
//             <MenuItems />
//             <HeaderRightContent />
//           </SheetContent>
          
//         </Sheet>
//         <div className="hidden lg:block">
//           <MenuItems />
//         </div>
//         <div className="hidden lg:block">
//           <HeaderRightContent />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { NavLink, useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  LogOut,
  Menu
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { portfolioHeaderMenuItems } from "../../config/index";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MenuItems() {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {portfolioHeaderMenuItems.map((menuItem) => (
        <Link
          className="text-lg pt-5 hover:text-[#ff5e5e] cursor-pointer text-slate-800 font-medium transition"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}








function HeaderRightContent() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild></DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          className="w-56 bg-white rounded-md shadow-md space-y-1 py-2"
        >
          <DropdownMenuLabel className="text-sm text-slate-600 px-2 pb-1">
            Logged in as Guest
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => navigate("/shop/account")}
            className="flex items-center gap-2 px-2 py-2"
          ></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className="flex items-center gap-2 px-2 py-2"
          >
            <LogOut className="h-4 w-4 text-red-500" />
            <span className="text-slate-700">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-white text-slate-800 ">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/home" className="flex h-16 items-center gap-2">
          <BriefcaseBusiness className="h-6 w-6 text-[#ff5e5e]" />
          <span className="font-bold">ganesh</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full max-w-xs px-5 py-7 pb-0 bg-white text-slate-800 overflow-hidden"
          >
            <SheetClose className="text-slate-800" />
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>
        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default Header;
