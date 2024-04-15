import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    if (captchaToken) {
      console.log('Form data:', data);
      console.log('Captcha token:', captchaToken);

      const emailTemplateParams = {
        user_name: data.name,
        user_email: data.email,
        user_phone: data.phone,
        message: data.message
      };


      emailjs.send('service_74v5vru', 'template_aypxsno', emailTemplateParams, 'tqodn-sEbgpAYqu5M')
        .then((result) => {
          console.log('email sent successfully:', result.text);
        })
        .catch((error) => {
          console.error('error sending email', error.text);
        });
    }
    else {
      alert('Please complete the reCAPTCHA verification.');
    } 
  };

  return (
    <div className="text-center bg-gradient-to-t from-stone-300 via-zinc-300 to-white min-h screen">

      <div className="mb-12">
        <h1 className="text-center font-bold text-4xl mt-4 mb-8 font-sans">Contact Us</h1>
      </div>

      <div className="xl:container mx-auto pb-20 ">
        <div className="max-w-screen-xl mx-auto justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          <div className="max-w-sm bg-transparent md:col-span-2 ml-16">
            <ion-icon name="mail-outline" className="mx-auto"></ion-icon>
            <div className="p-5 bg-transparent">
              <a href="#">
                <h2 className="mb-4 text-m tracking-tight text-black text-center">Email and Phone</h2>
              </a>
              <p className="mt-4 list-disc text-black underline text-center">info@cypresseg.com</p>
              <p className="mt-2 text-black text-center">831-218-1802</p> 
            </div>
          </div>
          <div className="max-w-sm bg-transparent md:col-span-1">
            <ion-icon name="location-outline" className="mx-auto"></ion-icon>
            <div className="p-5 bg-transparent">
              <a href="#">
                <h2 className="mb-4 text-m tracking-tight text-black text-center">Address</h2>
              </a>
              <p className="mt-4 text-black underline text-center">8 Harris Court Suite A8, Monterey, CA 93940, USA</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-xl items-center mb-8">
          <h1 className="text-center font-bold text-3xl mb-2">Send Us a Message</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-full px-4 sm:w-2/3 lg:w-1/2 mx-auto md:ml-0 md:mr-20 mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg bg-white text-left py-10 md:py-12 px-4 md:px-6">
              <form onSubmit={handleSubmit(onSubmit)}>  
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className="p-5 bg-transparent">
                      <span className="mb-4 text-m tracking-tight text-black text-center font-semibold">Full Name</span>
                      <input
                        type="text"
                        placeholder="enter name here..."
                        {...field}
                        className={`block w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.name && <span className="text-red-500">Please enter your name</span>}
                    </div>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, pattern: /^\S+@\S+$/i }}
                  render={({ field }) => (
                    <div className="p-5 bg-transparent">
                      <span className="mb-4 text-m tracking-tight text-black text-center font-semibold">Email</span>
                      <input
                        type="email"
                        placeholder="enter email here..."
                        {...field}
                        className={`block w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <span className="text-red-500">Please enter a valid email</span>}
                    </div>
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true, pattern: /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/ }}
                  render={({ field }) => (
                    <div className="p-5 bg-transparent">
                      <span className="mb-4 text-m tracking-tight text-black text-center font-semibold">Phone Number</span>
                      <input
                        type="tel"
                        placeholder="enter phone number here..."
                        {...field}
                        className={`block w-full p-3 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.phone && <span className="text-red-500">Please enter a valid phone number</span>}
                    </div>
                  )}
                />   

                <Controller
                  name="message"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className="p-5 bg-transparent">
                      <span className="mb-4 text-m tracking-tight text-black text-center font-semibold">Message</span>
                      <textarea
                        placeholder="enter message here..."
                        {...field}
                        className={`block w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      ></textarea>
                      {errors.message && <span className="text-red-500">Please enter a message</span>}
                    </div>
                  )}
                />

                {/* Google reCAPTCHA */}
                <div className="p-5">
                  <ReCAPTCHA
                    sitekey="6Le24n8pAAAAAJP-ldwbtKybwG8gDFT_p3Xrfwsr" // Replace with your reCAPTCHA site key
                    onChange={handleCaptchaChange}
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="w-full md:w-1/4 px-6 py-3 bg-[#003861] rounded-md font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-green-600">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center h-full ">
            <div className="flex justify-center pt-16 items-center h-full">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.886191366926!2d-121.81947299999999!3d36.5809603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de54ed6e2b2cf%3A0xfb5cdcf2bf37bd10!2sCypress%20Engineering%20Group!5e0!3m2!1sen!2sus!4v1708819368630!5m2!1sen!2sus"
                width="650"
                height="500"
                style={{ border: '1px solid #ccc' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;