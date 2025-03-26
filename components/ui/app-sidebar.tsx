import {
  Sidebar,
  SidebarContent,

  SidebarGroup,
  
  SidebarGroupLabel,
 
} from "@/components/ui/sidebar"
import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/utils/supabase/server"
import { Note } from "@prisma/client";
import Link from "next/link";
import SidebarGroupContent from "../SidebarGroupContent";

 async function AppSidebar() {

    const user = await  getUser();
    let  notes: Note[]= [];

    if(user){
        notes = await prisma.note.findMany({
            where: {
                authorId: user.id
            },
            orderBy: {
                updatedAt: "desc"
            }
        })

    }
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel className="mb-2 mt-8 text-lg">
                {user ? <h1>Your notes</h1> : <p>Please <Link className="underline text-gray-300 " href={"/signin"}>signin</Link> to get notes</p>}
            </SidebarGroupLabel>
            {user ? <SidebarGroupContent notes={notes}/>: ""}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}


export default AppSidebar


