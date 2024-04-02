import React, { useState } from 'react'
import Logoico from '../assets/images/logo-icon.png'
import Post2 from '../assets/images/post/img-2.jpg'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { verifyUserEmail } from '../API/userApi'

const VerifyEmail = () => {
  const [token, setToken] = useState(null)
  const navigate = useNavigate()
  console.log(token)
  const handleVerifyEmail = async e => {
    try {
      e.preventDefault()
      const formData = new FormData()
      formData.append('token', token)
      const response = await verifyUserEmail(formData)

      console.log(response.data)
      toast.success('Email Verified Successfully')
      navigate('/')
    } catch (error) {
      console.error('Email verification failed:', error)
      toast.error('Email verification failed. Please try again.')
    }
  }

  return (
    <div class='sm:flex'>
      {/* dark:bg-slate-900 */}
      <div class='relative lg:w-[580px] md:w-96 w-full p-10 min-h-screen bg-white shadow-xl flex pt-10 z-10'>
        <div
          class='w-full lg:max-w-sm mx-auto space-y-10'
          uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
        >
          {/* <!-- logo icon optional --> */}
          <div class='hidden'>
            <img
              class='w-12'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600'
              alt='Socialite html template'
            ></img>
          </div>

          {/* <!-- title --> */}
          <div>
            <p className='text-3xl text-gray-700 font-bold mt-4 mb-2'>
              Email Verification
            </p>
          </div>

          {/* <!-- form --> */}
          <form
            class='space-y-7 text-sm text-black font-medium dark:text-black'
            uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
          >
            {/* <!-- email --> */}

            <div className=' text-left'>
              <div class='mt-2'>
                <input
                  type='text'
                  name='token'
                  placeholder='Enter the verification code'
                  required
                  class='block w-full bg-white rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                  onChange={e => setToken(e.target.value)}
                  value={token}
                />
              </div>
            </div>

            {/* <!-- submit button --> */}
            <div>
              <button
                type='submit'
                onClick={handleVerifyEmail}
                class='button bg-black text-white w-full'
              >
                Verify Email
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- image slider --> */}
      <div class='flex-1 relative bg-primary max-md:hidden'>
        <div
          class='relative w-full h-full'
          tabindex='-1'
          uk-slideshow='animation: slide; autoplay: true'
        >
          <ul class='uk-slideshow-items w-full h-full'>
            <li class='w-full'>
              <img
                src={Post2}
                alt=''
                class='w-full h-full object-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left'
              ></img>
              <div class='absolute bottom-0 w-full uk-tr ansition-slide-bottom-small z-10'>
                <div
                  class='max-w-xl w-full mx-auto pb-32 px-5 z-30 relative'
                  uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                >
                  <img
                    class='w-12'
                    src={Logoico}
                    alt='Socialite html template'
                  ></img>
                  <h4
                    class='!text-white text-2xl font-semibold mt-7'
                    uk-slideshow-parallax='y: 600,0,0'
                  >
                    {' '}
                    Connect With Friends{' '}
                  </h4>
                  <p
                    class='!text-white text-lg mt-7 leading-8'
                    uk-slideshow-parallax='y: 800,0,0;'
                  >
                    {' '}
                    At Futuristic! We are committed to serving our customers
                    better.{' '}
                  </p>
                </div>
              </div>
              <div class='w-full h-96 bg-gradient-to-t from-black absolute bottom-0 left-0'></div>
            </li>
            <li class='w-full'>
              <img
                src={Post2}
                alt=''
                class='w-full h-full object-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left'
              ></img>
              <div class='absolute bottom-0 w-full uk-tr ansition-slide-bottom-small z-10'>
                <div
                  class='max-w-xl w-full mx-auto pb-32 px-5 z-30 relative'
                  uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                >
                  <img
                    class='w-12'
                    src={Logoico}
                    alt='Socialite html template'
                  ></img>
                  <h4
                    class='!text-white text-2xl font-semibold mt-7'
                    uk-slideshow-parallax='y: 800,0,0'
                  >
                    {' '}
                    Connect With Friends{' '}
                  </h4>
                  <p
                    class='!text-white text-lg mt-7 leading-8'
                    uk-slideshow-parallax='y: 800,0,0;'
                  >
                    {' '}
                    At Futuristic! We are committed to serving our customers
                    better.{' '}
                  </p>
                </div>
              </div>
              <div class='w-full h-96 bg-gradient-to-t from-black absolute bottom-0 left-0'></div>
            </li>
          </ul>

          {/* <!-- slide nav --> */}
          <div class='flex justify-center'>
            <ul class='inline-flex flex-wrap justify-center  absolute bottom-8 gap-1.5 uk-dotnav uk-slideshow-nav'>
              {' '}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
