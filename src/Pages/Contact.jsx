import { LuMail, LuLinkedin } from "react-icons/lu"
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen w-full py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 bg-white dark:bg-zinc-950" id="contact">
      <div className="max-w-2xl md:max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-zinc-900 dark:text-white">
          Get in Touch
        </h1>
        <div className="flex flex-col md:flex-row md:gap-12 items-center justify-center">
          {/* Contact Icons - left on desktop */}
          <div className="flex flex-1 justify-center items-center min-h-[350px] w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex gap-6 justify-center items-center">
                <a href="mailto:mekapavan99@gmail.com" aria-label="Email" className='group p-3 sm:p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all shadow-sm'>
                  <LuMail size={24} className="text-black dark:text-white group-hover:text-zinc-900 group-focus:text-zinc-900 dark:group-hover:text-zinc-100 dark:group-focus:text-zinc-100 sm:w-[28px] sm:h-[28px] transition-colors"/>
                </a>
                <a href="https://www.linkedin.com/in/pavanmeka99" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn" className='group p-3 sm:p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all shadow-sm'>
                  <LuLinkedin size={24} className="text-[#0077B5] dark:text-[#0077B5] group-hover:text-[#005983] group-focus:text-[#005983] sm:w-[28px] sm:h-[28px] transition-colors"/>
                </a>
              </div>
            </div>
          </div>
          {/* Divider for desktop */}
          <div className="hidden md:flex h-[250px] w-px bg-zinc-200 dark:bg-zinc-800 mx-8" />
          {/* Message Form - right on desktop */}
          <div className="flex flex-1 justify-center items-center min-h-[350px] w-full">
            <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-8 flex flex-col gap-6 w-full max-w-md" style={{minWidth:0}}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-zinc-700 dark:text-zinc-200 font-medium">Name</label>
                <input type="text" id="name" name="name" className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition dark:text-white" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-zinc-700 dark:text-zinc-200 font-medium">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition dark:text-white" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-zinc-700 dark:text-zinc-200 font-medium">Message <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" rows={5} className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition resize-none dark:text-white" required />
              </div>
              <button type="submit" className="mt-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-semibold py-3 rounded-lg transition text-lg border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:text-white dark:hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 