import React from 'react'

function header() {
const menuList =[
    {
        id:1,
        title: 'Home'
    },
    {
        id:1,
        title: 'Sobre'
    },
    {
        id:1,
        title: 'Serviços'
    },
    {
        id:1,
        title: 'Portfolio'
    },
    {
        id:1,
        title: 'Contatos'
    }

]

  return (
    <div>
        <div>
            <h2 className='text-[30px] font-bold text-white '>Arthur 
            <span className='text-red-600'> Bueno</span></h2>
        </div>
        <div>
            {menuList.map((item)=>(
                <div>
                    <h2 className='text-blue-100'>{item.title}</h2>
                </div>

            
            
            
            
            ))}
        </div>
    </div>
  )
}

export default header