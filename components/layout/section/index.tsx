const Section = ({ ...Props }) => {
  return (
    <div
      id={Props.charKey}
      className='sm:py-8 w-full h-screen dark:bg-zinc-900 text-gray-900 dark:text-gray-300 py-8'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {Props.children}
      </div>
    </div>
  )
}

export default Section