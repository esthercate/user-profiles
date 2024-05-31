import Image from 'next/image'
import Link from 'next/link'
import { MdAdd, MdOutlineEdit, MdOutlineDeleteOutline,} from 'react-icons/md'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-4 md:p-12 gap-5 text-slate-300'>
      <h1 className='text-3xl text-emerald-400 font-bold'>User Profiles</h1>
      <div className=' flex flex-col h-auto w-full rounded-lg border border-emerald-400 p-3 md:p-8 gap-4'>
        <div className='flex flex-col md:flex-row justify-between gap-3'>
          <div className='flex flex-col md:flex-row gap-4 md:items-center'>
            <div>
              <Image src='/woman.png' alt='User Profile' height={70} width={70} className='border-2 border-slate-400 rounded-full p-2' />
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between'>
                <h1 className='font-bold text-xl'>Jane Doe</h1>
                <div className='flex gap-3 justify-center md:hidden'>
                  <Link href='/add' className='hover:text-emerald-400'>
                    <MdAdd size={28} />
                  </Link>
                  <Link href='/edit' className='hover:text-emerald-400'>
                    <MdOutlineEdit size={28} />
                  </Link>
                  <Link href='/delete' className='hover:text-emerald-400'>
                    <MdOutlineDeleteOutline size={28} />
                  </Link>
                </div>
              </div>
              <p>Software Developer</p>
              <p>catherine@gmail.com</p>
            </div>
          </div>
          <div className='hidden md:flex gap-3 justify-center'>
            <Link href='/add' className='hover:text-emerald-400'>
              <MdAdd size={28} />
            </Link>
            <Link href='/edit' className='hover:text-emerald-400'>
              <MdOutlineEdit size={28} />
            </Link>
            <Link href='/delete' className='hover:text-emerald-400'>
              <MdOutlineDeleteOutline size={28} />
            </Link>
          </div>
        </div>
        <div>
          <p className='text-sm text-slate-400'>
            Elit voluptate dolore qui commodo est aliquip non duis magna laborum minim. Aliquip in ex minim eu amet ea qui non non voluptate. Reprehenderit duis esse excepteur quis amet velit labore deserunt do. In anim officia do ea consequat
            pariatur dolor. Anim commodo sunt voluptate ea nulla laboris elit mollit. Amet nostrud sit ad eiusmod. Eiusmod excepteur qui dolore nisi do deserunt officia officia qui do.
          </p>
        </div>
        <div className='flex gap-4'>
          <Link href='/facebook' className='hover:text-emerald-400 hover:skew-y-6'>
           <FaFacebookSquare size={32} />
          </Link>
          <Link href='/twitter' className='hover:text-emerald-400 hover:skew-y-6'>
            <FaXTwitter size={32} />
          </Link>
          <Link href='/linkedin' className='hover:text-emerald-400 hover:skew-y-6'>
            <FaLinkedin size={32} />
          </Link>
          <Link href='/website.com' className='hover:text-emerald-400 hover:skew-y-6'>
            <TbWorldWww size={32} />
          </Link>
        </div>
      </div>
    </main>
  )
}
