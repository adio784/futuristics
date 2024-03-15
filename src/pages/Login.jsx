import React, { useContext, useState } from 'react'
import LoginSide from '../components/SideNav/LoginSide'
import Main from '../components/Main/Main'

import Avatar2 from '../assets/images/avatars/avatar-2.jpg'
import Avatar3 from '../assets/images/avatars/avatar-3.jpg'
import Avatar4 from '../assets/images/avatars/avatar-4.jpg'
import Avatar5 from '../assets/images/avatars/avatar-5.jpg'
import Avatar6 from '../assets/images/avatars/avatar-6.jpg'
import Avatar7 from '../assets/images/avatars/avatar-7.jpg'

import AvatarLg1 from '../assets/images/avatars/avatar-lg-1.jpg'
import AvatarLg2 from '../assets/images/avatars/avatar-lg-2.jpg'
import AvatarLg3 from '../assets/images/avatars/avatar-lg-2.jpg'
import AvatarLg4 from '../assets/images/avatars/avatar-lg-4.jpg'
import AvatarLg5 from '../assets/images/avatars/avatar-lg-5.jpg'

import Post2 from '../assets/images/post/img-2.jpg'
import Post3 from '../assets/images/post/img-3.jpg'
import Post4 from '../assets/images/post/img-4.jpg'

import Logos from '../assets/images/logo.png'
import Logol from '../assets/images/logo-light.png'
import Logom from '../assets/images/logo-mobile.png'
import Logoml from '../assets/images/logo-mobile-light.png'
import Logoico from '../assets/images/logo-icon.png'
import { loginUser } from '../API/userApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from '../Contexts/userContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogin = async e => {
    try {
      e.preventDefault()
     const response = await loginUser({
        username,
        password
      })
      setUser(response.data.User)
      toast.success('Login Successful')
      navigate('/user-dashboard')
    } catch (err) {
      console.log(err.message)
      toast.error('Login Failed')
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
              Welcome Back!
            </p>
            <p class='text-sm text-gray-700 font-normal'>
              If you haven’t signed up yet.{' '}
              <a href='register' class='text-gold-600'>
                Register here!
              </a>
            </p>
          </div>

          {/* <!-- form --> */}
          <form
            method='#'
            action='#'
            class='space-y-7 text-sm text-black font-medium dark:text-black'
            uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
          >
            {/* <!-- email --> */}
            <div>
              <label for='email' class=''>
                Email address / Phone Number
              </label>
              <div class='mt-2.5'>
                <input
                  id='email'
                  name='username'
                  type='email'
                  onChange={e => setUsername(e.target.value)}
                  autofocus=''
                  placeholder='Email or phone'
                  required=''
                  class='!w-full !rounded-lg text-black bg-black !shadow-sm !border-slate-200 dark:!border-slate-800'
                />
              </div>
            </div>

            {/* <!-- password --> */}
            <div>
              <label for='email' class=''>
                Password
              </label>
              <div class='mt-2.5'>
                <input
                  id='password'
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  type='password'
                  placeholder='***'
                  class='!w-full !text-gray-70 !rounded-lg !shadow-sm !border-slate-200 dark:!border-slate-800 '
                />
              </div>
            </div>

            <div class='flex items-center justify-between'>
              {/* <div class='flex items-center gap-2.5'>
                <input id='rememberme' name='rememberme' type='checkbox' />
                <label for='rememberme' class='font-normal'>
                  Remember me
                </label> 
              </div> */}
              <a href='#' class='text-gold-600'>
                Forgot password{' '}
              </a>
            </div>

            {/* <!-- submit button --> */}
            <div>
              <button
                onClick={handleLogin}
                type='submit'
                class='button bg-black text-white w-full'
              >
                Sign in
              </button>
              {/* <button type="submit" class="button bg-black text-white w-full mt-4" onClick={'signInWithGoogle'}>Sign in with Google</button> */}
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
                    better.
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
                    better.
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

export default Login
