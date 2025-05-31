import { BrainCircuit, MoveRight } from "lucide-react"


const HowItWorks = () => {
    return (
        <section className='lg:max-w-6xl mx-auto flex flex-col z-0 items-center py-28 sm:pt-32 transition-all animate-in'>
        <div>
            <div className="flex items-center justify-center w-full pb-6">
                <h2 className="font-bold text-xl uppercase mb-8 text-emerald-600">How it works</h2>
            </div>
            <h3 className="fle items-center justify-center mb-24 text-center font-bold">Turn any content into search-friendly blog posts in seconds</h3>
            <div className=" flex items-center justify-center gp-4 lg:gap-24">
                <div className="flex flex-col gap-4">
                    <p className="text-7xl text-center">🎥</p>
                    <p>Upload a video</p>
                </div>
                <MoveRight size={64} strokeWidth={0.5} className="text-emerald-500" />
                <div className="flex flex-col gap-4">
                    <p className="flex items-center justify-center">:

                        <BrainCircuit size={64} strokeWidth={0.5} /></p>
                    <p className="text-center font-medium">Let AI work ✨</p>
                </div>
                <MoveRight size={64} strokeWidth={0.5} className="text-emerald-500" />
                <div className="flex flex-col gap-4">
                    <p className="text-7xl text-center">📝</p>
                    <p>Get your blog</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default HowItWorks