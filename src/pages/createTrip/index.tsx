
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GuestsModal from './guests- invite-modal'
import ConfirmTripModal from './confirm-trip-modal'
import DestinationAndDateStep from './steps/destination-and-date-step'
import InviteGuestsStep from './steps/invite-guests-step'
function CreateTripPage() {
const navigate = useNavigate()
const [isGuestsInputOpen, setIsGuestsInputOpen ] = useState(false)
const [isGuesttsModalOpen, setIsGuestsModalOpen] = useState(false)
const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

const [emailsToInvite, setEmailsToInvite] = useState(  [] as string[])

function createTrip (e : FormEvent<HTMLFormElement>){
  e.preventDefault
  navigate("/trips/1")
}

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

function openConfirmTripModal() {
  setIsConfirmTripModalOpen(true)
}

function closeConfirmTripModal() {
  setIsConfirmTripModalOpen(false)
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
        <DestinationAndDateStep 
        closeGuestsInput={closeGuestsInput}
        isGuestsInputOpen={isGuestsInputOpen}
        openGuestsInput={openGuestsInput}
        />

        {isGuestsInputOpen &&( 
          <InviteGuestsStep
          emailsToInvite={emailsToInvite}
          openConfirmTripModal={openConfirmTripModal}
          openGuestsModal={openGuestsModal}
          />

        ) }

        </div>    

        <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a>  e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>

      {isGuesttsModalOpen && (
        <GuestsModal
        addNewEmailToInvite={addNewEmailToInvite}
        closeGuestsModal={closeGuestsModal}
        emailsToInvite={emailsToInvite}
        removeEmailFromInvites={removeEmailFromInvites}
        />
      )
        }

        {isConfirmTripModalOpen && (
          <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          />
        )}

    </div>
  )

}

export default CreateTripPage