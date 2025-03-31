
import Form from '../components/Form'

const Careers = () => {
  return (
    <div className='flex flex-col h-full justify-between items-center'>
        <div className='flex flex-col justify-center items-center text-center mt-10 shadow-2xl te'>
            <h1 className='font-bold text-[10vh] text-white pb-10'>Careers</h1>
            <p className='text-[2.3vh] text-neutral-300 md:flex justify-center items-center hidden md:display'>At Stockbox, you can take your career to new height. At Stockbox, we believe in providing top tier products and outstanding customer service. We appreciate and comprehend how our relationship works, so we give our authorized person the independence and equality that their partner is due. Aside from that, we offer unmatched expertise and superior market analysis to keep you ahead of the curve, to the benefit of your client. Along with the support of a top financial services provider, a partnership also benefits from the mentorship and guidance of a friend.

       </p>
       <p className='text-[2.3vh] text-neutral-300 flex justify-center items-center pb-10'>
        At Stockbox, we empower careers with top-tier products 
        and outstanding service. Our partnerships ensure independence, 
        equality, and expert market insights to keep you ahead. With our
         support, you gain mentorship and the backing of a leading financial services provider.
        </p>

       

        </div>

        <div className=''>
            <Form title="Careers"/>

        </div>

      
    </div>
  )
}

export default Careers
