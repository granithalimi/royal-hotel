import image from "../../assets/images/hotel_2.jpg"
import { useInView } from 'react-intersection-observer'

function OurQuality() {
    const [ refAboutUs, inViewAboutUs ]= useInView({
        threshold: .5,
        triggerOnce: true,
    })
  return (
        <div className="w-full h-full overflow-hidden">
            <div className="h-[15%] w-full flex items-center justify-center">
            <h1 className="text-black text-5xl font-extrabold text-center cormorant-upright-light">OurQuality</h1>
      </div>
            <div className="w-full h-[85%] flex" ref={refAboutUs}>
                <div className="w-1/2 flex justify-center items-center">
                    <img src={image} className={`w-[70%] rounded-xl duration-500 ${inViewAboutUs ? "show-image" : "hide-image"}`} />
      </div>
                <div className="w-1/2 flex justify-center items-center">
                    <p className={`text-center text-2xl pe-10 duration-500 ${inViewAboutUs ? "show-text" : "hide-text"}`}>At Azure Sands Resort, luxury is measured in meticulous details. Our oceanfront suites showcase handcrafted Hawaiian décor, premium organic linens, and cutting-edge smart technology. Every meal is a masterpiece, prepared with locally sourced ingredients by world-renowned chefs. The spa features exclusive treatments using indigenous botanicals, while our infinity pools blend seamlessly with the Pacific horizon. Impeccable service—anticipating your every need—elevates each moment. Here, quality isn’t just a standard; it’s our legacy.
<br />
🌺Where perfection meets paradise. ✨</p>
      </div>
      </div>
        </div>
  )
}

export default OurQuality
