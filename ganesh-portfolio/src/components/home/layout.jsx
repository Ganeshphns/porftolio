import { Outlet } from "react-router-dom";
import Header from "./header";

export default function LayOut(){
   return(
    <div className="flex-col bg-white overflow-hidden">
        {/* common header */}
        <Header/>
          <main className="flex flex-col w-full">
            <Outlet/>
          </main>
    </div>
   )
}