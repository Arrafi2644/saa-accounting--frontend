import { serverFetch } from "@/lib/server-fetch";

export default async function Home() {


const response = await serverFetch.get("/user/me")
const result = await response.json()

 console.log("User in home page ", result)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    Home page
    </div>
  );
}
