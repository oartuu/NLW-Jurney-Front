import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'


interface GuestsModalProps {
    closeGuestsModal: () => void
    addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
    removeEmailFromInvites: (email: string) => void
    emailsToInvite: string[]
}

const GuestsModal = ({addNewEmailToInvite, removeEmailFromInvites, closeGuestsModal, emailsToInvite}: GuestsModalProps) => {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center '>
    <div className='space-y-2'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5' >
         <div className='flex items-center justify-between'>
           <h2 className='text-lg font-semibold'>Selecionar convidado</h2> 
           <button type='button' onClick={closeGuestsModal}><X  className='size-5 text-zinc-400'/></button>
         </div>
         <p className='text-zinc-400 text-sm'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>

         <div className='flex flex-wrap gap-2'>
           {emailsToInvite.map(email => {
             return (
               <div key={email} className='py-1.5 px-2.5 bg-zinc-800 rounded-md flex items-center gap-2'>
                 <span className='zinc-300'>{email}</span>
                 <button type='button' ><X className='size-4 text-zinc-400' onClick={() => removeEmailFromInvites(email)}/> </button> 
               </div>    
             )
           })}

              
         </div>
         <div className='w-full h-px bg-zinc-800'></div>
         <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
           <div className='px-2 flex items-center gap-2 flex-1'>
             <AtSign className='size-5 text-zinc-400'/>
             <input 
             className='bg-transparent w-full focus:outline-none placeholder-zinc-400' 
             type="email"
             name='email'
             placeholder='Digite o email do convidado' 

             />
           </div>
           <button type='submit' className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400'>
           Convidar
           <Plus className='size-5 text-lime-900' />
          </button>
         </form>
       </div>
     </div>
   </div>
  )
}

export default GuestsModal