import { getUser } from "@/lib/utils/supabase/server";
import Image from "next/image";

type Props = {
  searchParams: Promise<{[key: string]: string | string[] | null}>
}

export default async function Home({searchParams}: Props) {
  const notesIdParam = (await searchParams).notesId;
  const user = await getUser();
  const notesId = Array.isArray(notesIdParam) ? notesIdParam[0] : notesIdParam || "";

  return (
   <div className="flex h-full w-full flex-col items-center">
    <div className="flex w-full max-w-4xl justify-end gap-2">
      
      
    </div>
   </div> 
  );
}
