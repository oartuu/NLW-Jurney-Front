import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"


interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}
function DestinationAndDateStep(
    {closeGuestsInput,
    isGuestsInputOpen,
    openGuestsInput}
    :DestinationAndDateStepProps) {
    return (
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
    )
}
export default DestinationAndDateStep