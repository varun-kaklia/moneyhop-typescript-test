import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { FooterLinks } from '../lib/Constant'

const Footer = () => {
  return (
    <footer  className='flex justify-center items-center lg:p-4 md:p-3.5 sm:p-3 p-2'>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-1 lg:w-4/5 md:w-4/5 sm:w-full w-full'>
      <div className='flex flex-col justify-start'>
        <div className='flex flex-wrap items-center justify-start'>
        <img src="/assets/images/Vector.png" className="bg-primary rounded-2xl p-2 py-2.5 mx-4" alt="logo" />
        <h2 className='text-2xl font-bold'>Educrat</h2>
        </div>
        <div className='py-2 flex flex-col items-start px-4'>
          <p className='text-2xl font-medium'>Call Us</p>
          <p className='text-2xl font-medium text-primary'>800 388 80 90</p>
        </div>
        <div className='py-2 flex flex-col items-start px-4'>
          <p className='text-left text-textColor font-medium'>329 Queensberry Street, North Melbourne VIC 3051, Australia.
hi@educrat.com</p>
        </div>
        <div className='flex justify-start items-center px-4 py-2'>
          <div>
            <FaFacebookF className='footerSocialIcons'/>
          </div>
          <div>
            <FaTwitter className='footerSocialIcons'/>
          </div>
          <div>
            <FaInstagram className='footerSocialIcons'/>
          </div>
          <div>
            <FaLinkedin className='footerSocialIcons'/>
          </div>
        </div>
      </div>
      {
        FooterLinks?.map((x,index)=>(
      <div className='py-1 px-4 text-left' key={index}>
        <h2 className='text-2xl font-semibold'>{x.heading?x?.heading:'\u00A0'}</h2>
        {x?.links?.length>0&&
        x?.links?.map((x,index)=>(
        <div className='pt-3' key={index}>
        <a className='hover:text-primary cursor-pointer'>{x}</a>
        </div>
        ))
        }
      </div>
        ))
      }
      </div>
    </footer>
  )
}

export default Footer