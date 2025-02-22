
import Link from "next/link";


export default function Home() {

  return (
    <main className="flex flex-col justify-between items-center min-h-screen p-24 bg-black dark">
      <h1>hello from home route</h1>
      <Link href={'/dashboard'}>Click here to go to Dashboard section</Link>
    </main>
  );
}
 