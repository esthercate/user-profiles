import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-5">
      <h1>User profiles</h1>
      <div className=" flex flex-col h-40 w-full rounded-lg border border-white">
        <div className="flex">
          <div>Image</div>
          <div>
            name, career, website
          </div>
          <div>Edit, add user icons</div>
        </div>
        <div>Description</div>

      </div>
    </main>
  )
}
