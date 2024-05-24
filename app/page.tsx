import Image from 'next/image'
import Link from 'next/link'
import { FaUserEdit } from "react-icons/fa"
import { MdAdd, MdOutlineEdit, MdOutlineDeleteOutline } from 'react-icons/md'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-12 gap-5 text-slate-300'>
      <h1 className='text-3xl text-emerald-400 font-bold'>User Profiles</h1>
      <div className=' flex flex-col h-auto w-full rounded-lg border border-emerald-400 p-8 gap-4'>
        <div className='flex justify-between'>
          <div className='flex gap-4 items-center'>
            <div>
              <Image src='/woman.png' alt='User Profile' height={70} width={70} className='border-2 border-emerald-400 rounded-full p-2' />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold text-lg'>Jane Doe</h1>
              <p>Software Developer</p>
              <p>catherine@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-3 justify-center'>
            <Link href='/add'>
              <MdAdd size={28} />
            </Link>
            <Link href='/edit'>
              <MdOutlineEdit size={28} />
            </Link>
            <Link href='/delete'>
              <MdOutlineDeleteOutline size={28} />
            </Link>
          </div>
        </div>
        <div>
          <p className='text-sm'>
            Elit voluptate dolore qui commodo est aliquip non duis magna laborum minim. Aliquip in ex minim eu amet ea qui non non voluptate. Reprehenderit duis esse excepteur quis amet velit labore deserunt do. In anim officia do ea consequat
            pariatur dolor. Anim commodo sunt voluptate ea nulla laboris elit mollit. Amet nostrud sit ad eiusmod. Eiusmod excepteur qui dolore nisi do deserunt officia officia qui do.
          </p>
        </div>
        <div>Social icons, linkedin, twitter, facebook</div>
      </div>
    </main>
  )
}
