import Image from "next/image";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Signup from "../_components/Signup";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div >
      <div className="absolute -z-10 bottom-0 left-0 h-full w-full rounded-full bg-[#0d3b4b] opacity-40 blur-3xl"></div>
      <header>
        <Image src="/twc.svg" alt="" width={100} height={30} className="m-4" />
      </header>
      <section>
        <Signup />
      </section>
      </div>
    </HydrateClient>
  );
}
