import { useState} from "react";
import createTodo from "./store/todo.js";
import {Button, Modal} from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    const {todo,addTodo} = createTodo()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        addTask()
        console.log(addTask)
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const addTask = () => {
        const newTodo = {
            id: Date.now(),
            name,
            email,
            phoneNumber,
        }
        if(newTodo.name.trim().length){
            toast.success("contact added successfully")
            addTodo(newTodo)
            setName("")
            setEmail("")
            setPhoneNumber("")
        }else  {
            toast.info("Fill in input")
        }
    }


  return (
      <>
         <div className='py-5'>
             <div className="container mt-5 p-5 shadow-lg w-[50%] mx-auto  border rounded-md bg-violet-500">
                 <ToastContainer />
                 <Button  className='bg-green-400 text-white border-none mx-auto mt-3 ' onClick={showModal}>
                     Add Contact
                 </Button>
                 <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} okText='Save Contact'   onCancel={handleCancel}>
                     <label htmlFor="username">Name</label>
                     <input value={name} onChange={(e) => setName(e.target.value)} className='block rounded-md border-slate-400 w-full mt-2 mb-2' type="text" placeholder='Enter your  name'/>
                     <label htmlFor="username">Email</label>
                     <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} className='block rounded-md border-slate-400 w-full mt-2 mb-2'  placeholder='Enter your  email'/>
                     <label htmlFor="username">Phone number</label>
                     <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='block rounded-md border-slate-400 w-full mt-2' type="number" placeholder='Enter your  phone number'/>
                 </Modal>

                 <ul className='py-5'>
                     {
                         todo.length ? todo.map((el,index) => {
                             return(
                                 <div key={index} className='mt-5 bg-white shadow-2xl p-3 rounded-md '>
                                     <li className=' text-2xl'><b>User name: </b>{el?.name}</li>
                                     <div className='w-full border-t-2 border-black mt-2 mb-2'></div>
                                     <li className=' text-2xl'><b>User email: </b> {el?.email}</li>
                                     <div className='w-full border-t-2 border-black mt-2 mb-2'></div>
                                     <li className=' text-2xl'><b>User phone number: </b> {el?.phoneNumber}</li>
                                 </div>
                             )
                         }): <div className='p-2 bg-white shadow-2xl rounded-md mt-3'>
                             <h3>Todo empty</h3>
                         </div>
                     }
                 </ul>
             </div>
         </div>
      </>
  );
};

export default App;