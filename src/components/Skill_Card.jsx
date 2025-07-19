 
const Skill_Card = (props) => {
   return (
    <div className='flex flex-col w-full mt-4  items-start'>
        <h3 className='font-semibold text-[15px] w-full flex items-start pb-2'>{props.skill} <p className='text-[#898989] font-light pl-2'>{props.percentage}</p></h3>
        <div className='rounded-full w-full h-[8px] flex items-center bg-[#383838]'>
            <div style={{width:`${props.percentage}`,transition:"width 10s cubic-bezier(0.4, 0, 0.2, 1)"}} className={`rounded-full h-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]`}></div>

        </div>
      
    </div>
  )
}

export default Skill_Card
