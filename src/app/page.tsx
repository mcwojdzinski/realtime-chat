import {db} from "@/lib/db";

const Home = async () => {

  await db.set('123', 'hello')
  return (
   <h1 className="text-red-600">Hello world</h1>
  )
}

export default Home
