import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns";
import InfoCards from "../components/InfoCards";
import Map from "../components/Map";

function Search({ searchResults }) {

    const router = useRouter();

    const { location, startDate, endDate, guest } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`


    return (
        <div>
            <Header placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${guest} Guest`} />
            <main className="flex mt-8">
                <section className="flex-grow pt-14 px-6 ">
                    <p className="text-xs"> 300+ Stays -{range}- for {guest} Guests</p>
                    <h1 className="font-semibold text-3xl mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex space-x-4 mb-5">
                        <p className="button">Cancellation Policy</p>
                        <p className="button" >Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filter</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCards
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>

                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px] my-20">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then((res) => res.json())

    return {
        props: {
            searchResults
        }
    }
}
