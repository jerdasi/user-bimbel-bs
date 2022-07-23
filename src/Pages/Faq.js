import React, {useState} from 'react'
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import faqq from '../Assets/Images/faq.jpg'
import faq from '../Components/json/faq.json'


function Faq() {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i){
            return selected(null)
        }
        setSelected(i)
    }

  return (
    <div className='bg-white  '>
        
        <div className='p-10 py-12 '>
        <h1 className='px-2 mb-[-15px]'>Frequently Asked Question</h1>
            <div className='md:flex justify-between items-center py-16'>
                
                <div className='mr-4'>
                    {faq.map((item,index) => {
                        return(
                            <div key={index}>
                                <div >
                                    <div onClick={() => toggle(index)} className='flex bg-antique p-2 md:p-4 rounded-md justify-between items-center  m-2' >
                                        <h3 className='text-sm md:text-xl'>{item.tanya}</h3>
                                        <p className='p-2'>
                                            {selected === index ? (
                                                <div><BsFillArrowUpSquareFill size={30} color={`gray`}/></div>
                                            ) : (
                                                <div><BsFillArrowDownSquareFill size={30} color={`gray`}/></div>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    
                                        <div className={selected === index ? 'p-2 bg-white rounded-b-xl' : 'hidden max-h-0 mt-5 border-2'}>
                                         <p className='text-sm md:text-md'>{item.jawab}</p>
                                         </div>
                                    
                                   
                                </div>
                            </div>
                        )
                    })}
                </div>
                <img src={faqq} className='w-full md:w-[50%] h-[200px] md:h-[400px]'/>
            </div>
            
        </div>

        
            
    </div>
  )
}


export default Faq