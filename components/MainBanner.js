import Image from "next/image"

function MainBanner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
                // src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/3 p-5 mx-28">
                <h1 className="text-white font-bold text-4xl">Olympian & <br />
                    Paralympian <br />
                    Online <br />
                    Experiences</h1>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-250">Explore Now</button>
            </div>
        </div>
    )
}

export default MainBanner
