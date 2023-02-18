import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/header'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // define state variables
  const [product, setProduct] = useState()
  const [productDescription, setProductDescription] = useState()
  const [targetAudience, setTargetAudience] = useState()
  const [audienceInterests, setAudienceInterests] = useState()
  const [generatedCopy, setGeneratedCopy] = useState()
  const [formhide, setFormHide] = useState(false)

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault()



    const data = { product, productDescription, targetAudience, audienceInterests }


    await fetch('/api/gencopy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setGeneratedCopy(data.result)
        setProduct('')
        setProductDescription('')
        setTargetAudience('')
        setAudienceInterests('')
        setFormHide(true)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  // handle change

  const handleChange = (e) => {
    if (e.target.name == 'product') {
      setProduct(e.target.value)
    } else if (e.target.name == 'productDescription') {
      setProductDescription(e.target.value)
    } else if (e.target.name == 'targetAudience') {
      setTargetAudience(e.target.value)
    } else if (e.target.name == 'audienceInterests') {
      setAudienceInterests(e.target.value)
    }
  }


  return (
    <>
      <Head>
        <title>Ad Prose - Create Effective ad copies with AI</title>
        <meta name="description" content="Discover how you can leverage the power of AI to generate compelling and effective ad copies for your marketing campaigns. Try our web app to create high-quality, engaging Facebook ad copies that resonate with your audience and drive conversions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className='flex justify-center my-5 flex-col mx-auto bg-cyan-100'>
        <section className='flex flex-col w-80vw  mx-auto '>
          <h2 className='sm:text-3xl text-2xl title-font font-medium text-grey-200 mt-4 mb-4 py-5 text-center '>Unlock the Power of Persuasion with AdMonster -<br /> Your Ultimate Facebook Ad Copy Generator!</h2>
        </section>


        <section className="text-gray-600 body-font relative bg-cyan-800">
          <div className="container px-5 py-24 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap  -m-2">
                  <div className="p-2 md:w-1/3">
                    <div className="relative">
                      <label htmlFor="product" className="leading-7 text-base text-blue-50">Product</label>
                      <input type="text" id="product" name="product" onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/3">
                    <div className="relative">
                      <label htmlFor="productDescription" className="leading-7 text-base text-blue-50">Product Description</label>
                      <input type="text" id="productDescription" name="productDescription" onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 md:w-1/3">
                    <div className="relative">
                      <label htmlFor="targetAudience" className="leading-7 text-base text-blue-50">Target Audience</label>
                      <input type="text" id="targetAudience" name="targetAudience" onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="audienceInterests" className="leading-7 text-base text-blue-50">Audience Interests</label>
                      <textarea id="audienceInterests" name="audienceInterests" onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-pink-900 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg">Create Copy 🔥</button>
                    
                  </div>

                </div>
              </div>

            </form>
          </div>
        </section>
        <div className="flex flex-col text-center w-80vw mx-auto mb-12 mt-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Your Generated Copy
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-2xl">
            {generatedCopy}
          </p>
        </div>

       
      </main>
    </>
  )
}
