import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 item-center'>
      <div className='mb-10'>
          <p className='text-white text-[13px]'>Seja bem vindo ao meu site</p>
          <p className='text-white text-[40px] font-bold'>Me chamo Arthur Bueno</p>
          <p className='text-red-500 text-[40px] font-bold'>Sou Analista de dados python </p>
          <p className='text-white text-[40px] font-bold'>& backend dev</p>
      
          <div className='mt-4 flex gap-4'>
            <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white'>Veja o portfolio</button>
            <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white'>Entre em contato</button>
          </div>
        </div>

        <div className='flex justify-center'>

          <div className='h-[320px] w-[250px] p-2 bg=gradient-to-br from-[#FF004D] to-[#2A26B8]'>
            
            <img src="https://mail.google.com/mail/u/0?ui=2&ik=48741e7373&attid=0.1&permmsgid=msg-a:r3141499963746042261&th=19263c40600dc9c3&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9JVN-ZgxQK1D94yFPX1-NHsy4qkVCXeJSo0ZnKWc6_Ua5Tv9Vo6ZjM10AislJbORw7XwRC-5RzQyYVYvxCLcggARiHHTeusUF-XdcJYdFRmYgyvSvQp6J3RIo&disp=emb&realattid=9D73C305-1C1D-47CB-BE86-3653C34D7488" alt="Foto de Arthur Bueno" 
            
            className='h-full w-[250px] object-cover rounded-[20px]'
            />

          </div>  
        </div>






    </div>
  )
}

export default Hero