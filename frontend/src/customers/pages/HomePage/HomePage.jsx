import "./HomePage.css"
import MultipleBooksCarousel from "./MultipleBooksCarousel"

const HomePage = () => {
  return (
    <>
        <section className='-z-50 banner relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-gray-200 text-4xl lg:text-7xl font-bold z-10 py-5'>Ink & Paper</p>
                <p className='italic z-10 text-gray-300 text-xl lg:text-4xl'>Browse, Read, and Engage into the world of Literature!</p>
            </div>

            <div className='cover absolute top-0 left-0 right-0'></div>
            <div className='fadeout'></div>
        </section>

        

        <section className='p-10 lg:py-10 lg-px-20'>
            <div className="">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">BestSellers</p>
            </div>
            <MultipleBooksCarousel key={""}/>
            
        </section>

    </>
    
  )
}

export default HomePage