import React from "react";
import GmailCopy from "../GmailCopy";
import { BsFillSendFill } from "react-icons/bs";
import CopyRight from "../CopyRight";
function Contact() {
  return (
    <div id="contact" className="mx-auto container my-12">
      <div className="p-2">
        <h1 className="w-72  px-4mb-4 inline border-b-4 border-[#C23B22] tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full">
          Contact Me
        </h1>
        <p className="my-4 cursor-pointer">
          You can contact me at
          <GmailCopy />
        </p>
      </div>
      <div className="flex justify-center">
        <form className="flex flex-col gap-4 tm:w-full sm:w-full lg:w-[88%] ">
          <label>Name</label>
          <input
            className="p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]"
            placeholder="Name"
            type="text"
            name="user_name"
            required
          />

          <label>Email</label>
          <input
            className="p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]"
            placeholder="Email"
            type="email"
            name="user_email"
            required
          />

          <label>Your Message</label>
          <textarea
            className="p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[198px] "
            placeholder="Your message"
            type="text"
            name="message"
            required
          />

          <div className="flex justify-start mt-5 mb-8">
            <button
              type="submit"
              className="px-[1.6em] py-[.8em] bg-[#ec6e59] coursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#ec6e59] border-2 lg:text-[.8rem] sm:text-[.8rem] hover:text-white"
            >
              <BsFillSendFill></BsFillSendFill> Send
            </button>
          </div>
        </form>
      </div>

      <CopyRight />
    </div>
  );
}

export default Contact;
