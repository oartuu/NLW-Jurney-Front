import { X, User } from 'lucide-react'
import { FormEvent } from 'react'


interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (e : FormEvent<HTMLFormElement>) => void


}


  function ConfirmTripModal({closeConfirmTripModal, createTrip, }: ConfirmTripModalProps) {
   return (<div className='fixed inset-0 bg-black/60 flex items-center justify-center '>
    <div className='space-y-2'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5' >
         <div className='flex items-center justify-between'>
           <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2> 
           <button type='button' onClick={closeConfirmTripModal}><X className='size-5 text-zinc-400'/></button>
         </div>
         <p className='text-zinc-400 text-sm'>Para concluir a criação da viagem para <span className='font-bold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-bold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

         
         <form onSubmit={createTrip} className='space-y-3'>
           <div className=' h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
             <User className='size-5 text-zinc-400'/>
             <input 
             className='bg-transparent w-full focus:outline-none placeholder-zinc-400' 
             type="text"
             name='name'
             placeholder='Seu nome completo' 

             />
           </div>

           <div className=' h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
             <User className='size-5 text-zinc-400'/>
             <input 
             className='bg-transparent w-full focus:outline-none placeholder-zinc-400' 
             type="email"
             name='email'
             placeholder='Seu e-mail pessoal' 

             />
           </div>

           <button  type='submit' className='bg-lime-300 text-lime-900 w-full justify-center px-5 h-11 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400'>
           Confirmar criação da viagem
          </button>
         </form>
       </div>
     </div>
   </div>
   )
 }
 export default ConfirmTripModal