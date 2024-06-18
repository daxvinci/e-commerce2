
import { useState } from 'react'
import './App.css'
import Content from './Content'
import Navbar from './Navbar'

interface Obj {
  id: number,
  picture: string,
  name: string,
  price: string,
  amount: number,
  total: string,
}

function App() {
  const [form,setForm] = useState<Obj[]>([])

  const handleDelete = (id:number)=>{
    setForm(form!.filter((cart)=>cart.id != id))
}

  return (
    <div className='flex justify-center'>
    <div className="container h-screen md:px-[100px]">
      < Navbar update = {form} trash= {handleDelete} />
      < Content add={setForm}/>
    </div>
    </div>
  )
}

export default App
