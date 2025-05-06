import image from "../../assets/images/hotel.jpg"
function AboutUs() {
  return (
        <div className="w-full h-full ">
            <div className="h-[15%] w-full flex items-center justify-center">
            <h1 className="text-black text-5xl font-extrabold text-center ">About Us</h1>
      </div>
            <div className="w-full h-[85%] flex">
                <div className="w-1/2 flex justify-center items-center">
                    <img src={image} className="w-[70%] rounded-xl " />
      </div>
                <div className="w-1/2 flex justify-center items-center">
                    <p className="text-center text-2xl pe-10">
                    Perched on the golden shores of Maui, Azure Sands Resort offers an unrivaled blend of Hawaiian elegance and five-star sophistication. Each oceanfront villa features expansive lanais, private infinity pools, and breathtaking Pacific views. Savor farm-to-table cuisine at our award-winning restaurants, rejuvenate at the cliffside spa, or embark on exclusive island adventures. Impeccable service and bespoke experiences ensure every moment is extraordinary.

Where luxury meets aloha spirit, your dream retreat begins.
<br />
🌺 100 words of paradise. 🌊
      </p>
      </div>
      </div>

        </div>
  )
}

export default AboutUs
