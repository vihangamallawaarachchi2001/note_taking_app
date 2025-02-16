import Image from "next/image";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Login from "./_components/Login";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div>
        <div className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-full bg-[#0d3b4b] opacity-40 blur-3xl"></div>
        <header>
          <Image src="/twc.svg" alt="" width={100} height={30} />
        </header>
        <section>
          <Login />
        </section>
      </div>
    </HydrateClient>
  );
}
