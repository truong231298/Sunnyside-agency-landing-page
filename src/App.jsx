import iconArrow from "/icon-arrow-down.svg"
import iconFacebook from "/icon-facebook.svg"
import iconHambuger from "/icon-hamburger.svg"
import iconInstergam from "/icon-instagram.svg"
import iconPinterest from "/icon-pinterest.svg"
import iconTwitter from "/icon-twitter.svg"
import logo from "/logo.svg"
import { useState } from "react"


export default function App() {

  const images = {
    "desktop": {
      "Cone": "/images/desktop/image-gallery-cone.jpg",
      "milk": "/images/desktop/image-gallery-milkbottles.jpg",
      "orange": "/images/desktop/image-gallery-orange.jpg",
      "sugar": "/images/desktop/image-gallery-sugarcubes.jpg",
      "graphic": "/images/desktop/image-graphic-design.jpg",
      "header": "/images/desktop/image-header.jpg",
      "photo": "/images/desktop/image-photography.jpg",
      "standout": "/images/desktop/image-stand-out.jpg",
      "transform": "/images/desktop/image-transform.jpg",
    },
    "mobile": {
      "Cone": "/images/mobile/image-gallery-cone.jpg",
      "milk": "/images/mobile/image-gallery-milkbottles.jpg",
      "orange": "/images/mobile/image-gallery-orange.jpg",
      "sugar": "/images/mobile/image-gallery-sugar-cubes.jpg",
      "graphic": "/images/mobile/image-graphic-design.jpg",
      "header": "/images/mobile/image-header.jpg",
      "photo": "/images/mobile/image-photography.jpg",
      "standout": "/images/mobile/image-stand-out.jpg",
      "transform": "/images/mobile/image-transform.jpg",
    }
  }
  const [isClick, setIsClick] = useState(false);

  const avatars = [
    { images: "/image-emily.jpg", content: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", name: "Emily R.", job: "Marketing Director" },
    { images: "/image-thomas.jpg", content: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.", name: "Thomas S.", job: "Chief Operating Officer" },
    { images: "/image-jennie.jpg", content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!", name: "Jennie F.", job: "Business Owner" }
  ]


  return (
    <main className="min-h-screen">
      <section className="p-4">
        <div className="relative">
          <img src={images.desktop.header} alt="" className="hidden sm:block" />
          <img src={images.mobile.header} alt="" className="sm:hidden" />
        </div>
        {/* navbar desktop*/}
        <nav className="navbar absolute top-0 left-0 right-0 p-4 text-white">
          <div className="container p-4 mx-auto flex flex-col sm:gap-16 gap-8">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Logo" />
              <img src={iconHambuger} alt="" className="sm:hidden cursor-pointer" onClick={() => {
                console.log("Hamburger icon clicked");
                setIsClick(!isClick);
              }} />

              <div className="hidden sm:flex items-center space-x-8">
                <button className="p-2 px-4 rounded-full hover:bg-blue-300">About</button>
                <button className="p-2 px-4 rounded-full hover:bg-blue-300">Service</button>
                <button className="p-2 px-4 rounded-full hover:bg-blue-300">Projects</button>
                <button className="p-2 px-4 rounded-full hover:bg-blue-300">Contact</button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center sm:gap-16">
              <h1 className="sm:text-4xl text-normal uppercase font-extrabold text-center">We are creatives</h1>
              <img src={iconArrow} alt="Arrow Icon" className="w-6 sm:w-8" />

            </div>
          </div>
          {/* navbar mobile */}
          {isClick &&
            <div className="absolute container p-16 top-6 text-Darkgrayishblue  sm:hidden">
              <div className="flex flex-col justify-center items-center bg-white">
                <button className="p-2 px-4 rounded-full hover:bg-Yellow">About</button>
                <button className="p-2 px-4 rounded-full hover:bg-Yellow">Service</button>
                <button className="p-2 px-4 rounded-full hover:bg-Yellow">Projects</button>
                <button className="p-2 px-4 rounded-full hover:bg-Yellow">Contact</button>
              </div>

            </div>}

        </nav>

        {/* part 2 */}
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col-reverse bg-White w-full">
            <div className="flex flex-col justify-center gap-4 md:w-1/2">
              <h1 className="text-black text-4xl font-semibold text-center p-2">Transform your brand</h1>
              <p className="mx-20 p-4 text-gray-500">We are a full-service creative agency specializing in helping brands grow fast.
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
              <a href="#" className="text-black font-semibold text-start ml-24 hover:underline decoration-Yellow decoration-8 underline-offset-4">Learn more</a>
            </div>
            <img src={images.desktop.transform} alt="" className="w-1/2 hidden md:block" />
            <img src={images.mobile.transform} alt="" className="w-full md:hidden" />

          </div>

          <div className="flex flex-col md:flex-row bg-White w-full">
            <img src={images.desktop.standout} alt="" className="w-1/2 hidden md:block" />
            <img src={images.mobile.standout} alt="" className="w-full md:hidden" />

            <div className="flex flex-col justify-center gap-4 md:w-1/2">
              <h1 className="text-black text-4xl font-semibold text-center p-2">Stand out to the right audience</h1>
              <p className="mx-20 p-4 text-gray-500">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
              <a href="#" className="text-black font-semibold text-start ml-24 hover:underline decoration-Softred decoration-8 underline-offset-4">Learn more</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-White">
            <div className="relative md:w-1/2">
              <img src={images.desktop.graphic} alt="" className="w-full hidden md:block" />
              <img src={images.mobile.graphic} alt="" className="w-full md:hidden" />
              <span className="absolute md:bottom-12 bottom-24 p-2 text-center">
                <h1 className="text-2xl font-medium text-Darkblue mb-4">Graphic design</h1>
                <p className="text-Darkgrayishblue mx-8 p-4">  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                </p>
              </span>
            </div>
            <div className="relative md:w-1/2">
              <img src={images.desktop.photo} alt="" className="w-full hidden md:block" />
              <img src={images.mobile.photo} alt="" className="w-full md:hidden" />
              <span className="absolute md:bottom-12 bottom-24 text-center">
                <h1 className="text-2xl font-medium text-Darkblue mb-4">Photography</h1>
                <p className="text-Darkgrayishblue mx-8 p-4">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
              </span>
            </div>

          </div>

        </div>
        {/* part 3: client */}
        <div className="bg-white p-10 flex flex-col gap-8">
          <h1 className="text-Darkgrayishblue font-semibold text-xl text-center">Client testimonials</h1>

          <div className="flex flex-col md:flex-row md:justify-center items-center mx-16">
            {avatars.map((avatar) => (
              <div className="flex flex-col text-center items-center mr-4 gap-6 mb-4">
                <img src={avatar.images} alt="" className="w-14 h-14 rounded-full" />
                <p className="text-Darkblue">{avatar.content}</p>
                <span>
                  <h1 className="font-semibold">{avatar.name}</h1>
                  <p className="text-Darkgrayishblue">{avatar.job}</p>
                </span>
              </div>

            ))}
          </div>
        </div>
        {/* part 4: images */}
        <div className="hidden md:flex flex-row">
          <img src={images.desktop.milk} alt="" className="w-1/4" />
          <img src={images.desktop.orange} alt="" className="w-1/4" />
          <img src={images.desktop.Cone} alt="" className="w-1/4" />
          <img src={images.desktop.sugar} alt="" className="w-1/4" />
        </div>
        <div className="flex flex-col md:hidden">
          <div className="flex flex-row">
            <img src={images.mobile.milk} alt="" className="w-1/2" />
            <img src={images.mobile.orange} alt="" className="w-1/2" />
          </div>
          <div className="flex flex-row">
            <img src={images.mobile.Cone} alt="" className="w-1/2" />
            <img src={images.mobile.sugar} alt="" className="w-1/2" />
          </div>

        </div>
        {/* part 5: footer */}
        <div className="flex flex-col gap-4 items-center bg-blue-400 p-8">
          <h1 className="text-xl text-Darkdesaturatedcyan font-semibold">sunnyside</h1>
          <div className="text-Darkmoderatecyan">
            {["About", 'Service', 'Project'].map((link)=>(
              <a href="#" className="hover:text-White cursor-pointer mx-4">{link}</a>
            ))}
          
          </div>
          <div className="flex flex-row gap-4">
            {[iconFacebook, iconInstergam, iconTwitter, iconPinterest].map((icon) => (
              <img src={icon} alt="" className="cursor-pointer hover:stroke-white"/>
            ))}

          </div>
        </div>
      </section>
    </main>
  )
}