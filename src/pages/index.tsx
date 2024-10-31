// import Card, {Card2} from '../pages/card';
import Link from 'next/link';

function Home () {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Hello World</h1>
      <Link className='mr-5 hover:text-red-600' href="/about">About Us</Link>
      <Link className='hover:text-yellow-600' href="/contactus">Contact Us</Link>
      <Link className='hover:text-blue-600' href="/privacypolicy"> Privacy Policy</Link>

      {/* <Card/>
      <Card2/> */}
    </div>
  )
}

export default Home;