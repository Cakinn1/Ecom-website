import React, { useEffect, useState } from "react";
import ContactContacts from "../components/contactComponents/ContactContacts";
import ContactInput from "../components/contactComponents/ContactInput";

export default function Contact() {
  const [formComplete, setFormComplete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
    

  return (
    <div className="mt-[80px] mx-auto max-w-[1200px] p-6 min-h-screen">
      <div className="flex flex-col space-y-4">
        <h1 className="text-6xl font-bold">Contacts</h1>
        <p>Get in touch with us by completing the below form or call us now.</p>
      </div>

      <div className="flex flex-wrap mt-10 gap-x-8">
        <ContactContacts
          directions={true}
          adddressTrue={true}
          address="514 Magnolia St. Orlando, FL 32806"
          title="Address"
          paragraph={false}
        />
        <ContactContacts
          directions={false}
          title="Phone"
          paragraph={true}
          h1Title="Main Office"
          p1Paragraph="+1 (786) 322 560 33"
          h2Title="Reception room"
          p2Paragraph="+1 (786) 300 560 44"
        />
        <ContactContacts
          directions={false}
          title="Sehedule"
          paragraph={true}
          h1Title="Mon - Thu"
          p1Paragraph="10.00 - 22.00"
          h2Title="Fri - Sat"
          p2Paragraph="10.00 - 20.00"
        />
        <ContactContacts
          directions={false}
          title="Address"
          h1Title="Main office"
          p1Paragraph="office@example.com"
          h2Title="Reception room"
          p2Paragraph="reception@example.com"
          paragraph={true}
        />
      </div>

      {formComplete && loading ? (
        <div className="border my-[100px] md:h-[300px] h-[500px] w-full bg-[#649aaa] p-10 rounded-3xl text-white">
          <div className="flex justify-center text-center py-6 flex-col space-y-4">
            <h1 className="text-4xl font-bold">We appreciate your email</h1>
            <p className="text-[#576071] text-center md:text-left md:pl-10">
              Thanks for contacting us! We will be in touch with you shortly.
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="border md:h-[700px] w-full  bg-[#649aaa] p-10 rounded-3xl text-white my-[100px]"
        >
          <div className="flex justify-center items-center">
            <h1 className=" text-3xl md:text-4xl font-semibold tracking-wide">
              Get a free consultation
            </h1>
          </div>

          <div className="mt-12  px-10 gap-x-4 flex flex-col md:flex-row">
            <div className="flex flex-col md:w-1/2 space-y-4">
              <ContactInput
                placeholder="Your Name"
                title="Name"
                type="text"
                setName={setName}
              />
              <ContactInput
                placeholder="Email"
                title="Email address"
                type="email"
              />
            </div>
            <div className="flex flex-col  md:w-1/2 space-y-4">
              <ContactInput
                placeholder="Company"
                title="Your company name"
                type="text"
              />
              <ContactInput
                placeholder="Phone number"
                title="Phone number"
                type="number"
              />
            </div>
          </div>
          <div className="p-10 space-y-4 ">
            <h1>How can we help?</h1>
            <textarea className="border resize-none w-full min-h-[200px] h-full placeholder:text-white placeholder:opacity-30 border-opacity-30 focus:border-opacity-100 border-white bg-transparent py-3 px-4 rounded-2xl focus:outline-none"></textarea>
            <div className="flex justify-center items-center">
              {loading ? (
                <>
                  <button className="text-[#434a57] bg-opacity-30 bg-white px-10  py-4 rounded-2xl">
                    {name === "" && !formComplete ? (
                      <div className="text-red-500">
                        Please include your name.
                      </div>
                    ) : (
                      "Sending..."
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setLoading(true);
                      if (name === "") {
                        setFormComplete(false);
                        setTimeout(() => {
                          setLoading(false);
                        }, 2000);
                      } else {
                        setTimeout(() => {
                          setFormComplete(true);
                        }, 2000);
                      }
                    }}
                    className="text-[#434a57] bg-white px-10  py-4 rounded-2xl"
                  >
                    Submit a request
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
