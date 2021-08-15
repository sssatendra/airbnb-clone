import { getCenter } from 'geolib';
import * as React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Image from "next/image"

function Map({ searchResults }) {


    const [selectedLocation, setSelectedLocation] = React.useState({});
    //Transform the Search results into Objects 
    const data = searchResults.map(item => ({
        longitude: item.long,
        latitude: item.lat
    }))
    // Find the center of all Coordinates using geoLib function
    const center = getCenter(data)

    // setting default coordinates as per results
    const [viewport, setViewport] = React.useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })


    return (
        <ReactMapGL
            mapStyle="mapbox://styles/sssatendra51/cks4g7en665as18nni52hn9hr"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map((item) => (
                <div key={item.long} className="relative z-10">
                    <Marker longitude={item.long}
                        latitude={item.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p onClick={() => setSelectedLocation(item)} className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                            role="img"
                        ><svg xmlns="http://www.w3.org/2000/svg" className="z-10 h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg></p>
                    </Marker>
                    {selectedLocation.long === item.long && (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={item.lat}
                            longitude={item.long}
                            className="z-50"
                        >
                            <div className="bg-gradient-to-t from-gray-800 to-transparent rounded-2xl w-80 h-40">
                                <Image loading="lazy" className=" rounded-2xl bg-cover bg-gradient-to-t from-gray-800 to-transparent bottom-0 z-100" src={item.img} layout="fill" objectFit="cover" />
                                <div className="absolute  bg-gradient-to-t from-black to-transparent bottom-0 px-6 py-3">
                                    <h5 className="text-white font-semibold">{item.title}</h5>
                                    <h4 className="text-white font-semibold">{item.price} </h4>
                                </div>

                            </div>

                        </Popup>
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
