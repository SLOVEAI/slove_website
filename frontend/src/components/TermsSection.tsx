import React from 'react'

function TermsSection() {
  return (
    <>
    <div className='font-manrope flex flex-col items-center gap-10 text-white mt-5 mb-[10rem]'>
        <section className='flex flex-col px-[15rem]'>
            <h1 className='font-clashDisplay text-[4rem] text-primaryColor_lightBlue mb-[4rem] self-center'>Terms & Conditions</h1>
            <p>Welcome to Slove.ai. These terms and conditions govern your use of our website. By using our website and app, you agree to be bound by these terms and conditions.</p>
        </section>

        <section className='flex flex-col px-[15rem]'>
            <h2 className='font-clashDisplay text-[2rem] mb-[4rem] self-center'>Use of the website</h2>
            <span>You may use our website for lawful purposes only. You may not use our website:</span>
            <ul className='list-disc ml-8 flex flex-col gap-2'>
                <li>In any way that breaches any applicable local, national or international law or regulation;</li>
                <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;</li>
                <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam);</li>
                <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
            </ul>
        </section>

        <section className='flex flex-col px-[15rem]'>
            <h2 className='font-clashDisplay text-[2rem] mb-[4rem] self-center'>Intellectual Property</h2>
            <p>The content on our website, including but not limited to text, graphics, logos, images, audio clips, and software, is owned or licensed by us and is protected by copyright, trademark, and other intellectual property laws. You may not use any content on our website without our express written permission.</p>
        </section>
        <section className='flex flex-col px-[15rem]'>
            <h2 className='font-clashDisplay text-[2rem] mb-[4rem] self-center'>Disclamer of Warranties</h2>
            <p>We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
        </section>
    </div>
    </>
  )
}

export default TermsSection