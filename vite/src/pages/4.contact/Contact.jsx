import { Controller, useForm } from 'react-hook-form';

import FormElement from '../../components/FormElement';
const Contact = () => {
  const onSubmit = data => console.log(data);
  const{control, handleSubmit, formState:{errors}, } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message:'',
    },
  });
  return (
    <div className="text-center bg-gradient-to-t from-stone-300 via-zinc-300 to-white min-h-screen">
      
      <div className="mb-12">
        <h1 className="text-center font-bold text-4xl mt-4 mb-12 font-sans">Contact Us</h1>
      </div>
      <div class="max-w-screen-xl mx-auto justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          <div class= "max-w-sm bg-transparent">
            <ion-icon name="location-outline"></ion-icon>
            <div class="p-5 bg-transparent">
              <a href="#">
                <h2 class="mb-4 text-m tracking-tight text-black text-center">Address</h2>
              </a>
              <p class="mt-4 list-disc pl-5 text-black underline text-center">8 Harris Court Suite A8, Monterey, CA 93940, USA</p>
            </div>
          </div>
          <div class= "max-w-sm bg-transparent">
            <ion-icon name="call-outline"></ion-icon>
            <div class="p-5 bg-transparent">
              <a href="#">
                <h2 class="mb-4 text-m tracking-tight text-black text-center">Phone Number</h2>
              </a>
              <p class="mt-4 list-disc pl-5 text-black underline text-center">+1 831.218.1802</p>
            </div>
          </div>
          <div class= "max-w-sm bg-transparent">
            <ion-icon name="mail-outline"></ion-icon>
            <div class="p-5 bg-transparent">
              <a href="#">
                <h2 class="mb-4 text-m tracking-tight text-black text-center">Email</h2>
              </a>
              <p class="mt-4 list-disc pl-5 text-black underline text-center">info@cypresseg.com</p>
            </div>
          </div>
        </div>

      <div className="xl:container mx-auto " >
        <div className="flex justify-center text-xl items-center" style={{height: '250px'}}>
          <h1>Send Us a Message</h1>
        </div>
        <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto"> 
          <div className="rounded-lg shadow-lg bg-white text-left -mt-24 py-10 md:py-12 px-4 md:px-6">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control = {control}
                  rules={{required: true}}
                  render={({field}) =>(
                    <FormElement 
                      type="text" 
                      Label= "Full Name"
                      placeholder="enter name here..." 
                      fieldRef={field} 
                      hasError={errors.name?.type === 'required'}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control = {control}
                  rules={{required: true}}
                  render={({field}) =>(
                    <FormElement 
                      type="email" 
                      Label="Email"
                      placeholder="enter email here..." 
                      fieldRef={field} 
                      hasError={errors.email?.type === 'required'}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control = {control}
                  rules={{required: true}}
                  render={({field}) =>(
                    <FormElement 
                      type="textarea" 
                      Label="Message"
                      placeholder="enter message here..." 
                      fieldRef={field} 
                      hasError={errors.message?.type === 'required'}
                    />
                  )}
                />
                <button type="submit" className="w-1/4 px-6 py-3 bg-[#003861] rounded-md font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-green-600">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
  export default Contact