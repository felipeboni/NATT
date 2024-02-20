import { getSession, useSession } from "next-auth/react"

export default function Home() {
  return (
    <section className="relative flex items-center justify-center px-3 py-20 min-h-[100dvh]">
    </section >
  )
}

export async function getServerSideProps(context: { req: any; }) {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: { destination: "/acesso/entrar" },
    };
  }

  return { props: session }
}