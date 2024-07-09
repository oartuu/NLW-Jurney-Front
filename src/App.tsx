
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
function App() {
const [isGuestsInputOpen, setIsGuestsInputOpen ] = useState(false)
const [isGuesttsModalOpen, setIsGuestsModalOpen] = useState(false)
const [emailsToInvite, setEmailsToInvite] = useState([
  "artu.donascimento@gmail.com"
])
function openGuestsInput() {
  setIsGuestsInputOpen(true)
}

function closeGuestsInput() {
  setIsGuestsInputOpen(false)
}

function openGuestsModal() {
  setIsGuestsModalOpen(true)
}

function closeGuestsModal() {
  setIsGuestsModalOpen(false)
}

function addNewEmailToInvite(e : FormEvent<HTMLFormElement>) {
  e.preventDefault()
  
  const data = new FormData(e.currentTarget)
  const email = data.get("email") as string
  
  if(!email) {
    return
  }

  if(emailsToInvite.includes(email)) {
    return
  }

  setEmailsToInvite([...emailsToInvite, email])
  

  e.currentTarget.reset()
}

function removeEmailFromInvites(emailToRemove: string) {
  const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

  setEmailsToInvite(newEmailList)
}

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full  px-6 text-center space-y-10">

        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

     <div className='space-y-4'>
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className='flex items-center gap-2 flex-1'>
          <MapPin className='size-5 text-zinc-400'/>
          <input className="bg-transparent text-lg text-zinc-400 outline-none flex-1" type="text" placeholder="Para onde você vai?" disabled={isGuestsInputOpen} />
          </div>
          <div className='flex items-center gap-2'>
          <Calendar className='size-5 text-zinc-400'/>
          <input className="bg-transparent text-lg text-zinc-400 w-40 outline-none" type="text" placeholder="Quando?" disabled={isGuestsInputOpen} />
          </div>

          <div className='w-px h-6 bg-zinc-800'></div>

         {isGuestsInputOpen ? (
          <button onClick={closeGuestsInput} className='bg-zinc-900 text-zinc-200 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700'>Alterar local/data
          <Settings2 className='size-5 text-zinc-200' />
          </button>

         ) : (
          <button onClick={openGuestsInput} className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400'>
          continuar 
          <ArrowRight className='size-5 text-lime-900' />
       </button>
         )}
        </div>

          {isGuestsInputOpen &&( 
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">
              <button onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                <UserRoundPlus className='size-5 text-zinc-400'/>
                <span className="text-lg text-zinc-400 flex-1">Quem está na viagem</span>
               
              </button>
              
              <div className='w-px h-6 bg-zinc-800'></div>
    
              <button className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar viagem
                <ArrowRight className='size-5 text-lime-900' />
               </button>
          </div>
          ) }

        </div>    

        <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a>  e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>

      {isGuesttsModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center '>
         <div className='space-y-2'>
           <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5' >
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecionar convidado</h2> 
                <button type='button' onClick={closeGuestsModal}><X className='size-5 text-zinc-400'/></button>
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


    </div>
  )

}

export default App
