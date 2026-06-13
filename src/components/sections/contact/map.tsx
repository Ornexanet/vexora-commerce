"use client";
import Title from "@/components/ui/title";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  storeLocations,
  StoreLocation,
} from "@/components/sections/contact/storeLocations";
import { MapPin, Menu } from "lucide-react";

const StoreMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation>(
    storeLocations[0],
  );
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 20,
    zoom: 1.5,
  });
  const [showLocations, setShowLocations] = useState(false);

  const handleLocationClick = (location: StoreLocation) => {
    setSelectedLocation(location);
    setViewState({
      longitude: location.longitude,
      latitude: location.latitude,
      zoom: 12,
    });
  };

  const getDirections = (location: StoreLocation) => {
    const destination = `${location.latitude},${location.longitude}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className="w-full lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="text-center space-y-4 mb-15">
          <Title size="60" className="font-bold">
            Find a Vexora Store Near You
          </Title>
          <p className="text-light-dark text-xl">
            Experience our cutting-edge tech firsthand at one of our global
            locations.
          </p>
        </div>

        <div className="grid lg:h-[612px] h-[400px] relative">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden">
            <Map
              {...viewState}
              onMove={(evt) => setViewState(evt.viewState)}
              mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
              style={{ width: "100%", height: "100%" }}
              attributionControl={false}
            >
              {/* <NavigationControl position="top-right" /> */}

              {storeLocations.map((location) => (
                <Marker
                  key={location.id}
                  longitude={location.longitude}
                  latitude={location.latitude}
                  anchor="bottom"
                >
                  <MapPin
                    onClick={() => handleLocationClick(location)}
                    size={30}
                    className="text-blue hover:scale-110 transition-all duration-300"
                  />
                </Marker>
              ))}
            </Map>

            {/* Directions Overlay */}
            <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-lg sm:px-8 px-3 sm:py-5 py-3 ">
              <div className="flex items-start sm:gap-5">
                <div className="flex-1">
                  <p className="font-bold text-light-dark mb-1">
                    {selectedLocation.address}
                  </p>
                  <p className="text-sm text-light-dark">
                    {selectedLocation.city}, {selectedLocation.country}
                  </p>
                </div>
                <button
                  onClick={() => getDirections(selectedLocation)}
                  className="text-sm font-bold text-blue hover:underline flex flex-col items-center gap-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M22.6094 11.7656L13.2344 2.39062C12.8281 1.98438 12.1667 1.98438 11.7656 2.39062L2.39063 11.7656C1.98437 12.1719 1.98437 12.8333 2.39063 13.2396L11.7656 22.6094V22.6146C12.1719 23.0208 12.8333 23.0208 13.2396 22.6146L22.6146 13.2396C23.0208 12.8281 23.0208 12.1719 22.6094 11.7656ZM14.5833 15.1042V12.5H10.4167V15.625H8.33333V11.4583C8.33333 10.8802 8.79688 10.4167 9.375 10.4167H14.5833V7.8125L18.2292 11.4583L14.5833 15.1042Z"
                      fill="#1279F2"
                    />
                  </svg>
                  <span className="sm:block hidden">Directions</span>
                </button>
              </div>
            </div>
          </div>

          {/* Store Locations Sidebar */}
          <button
            onClick={() => setShowLocations(!showLocations)}
            className="absolute sm:right-7.5 right-3 top-7.5 z-10 bg-white rounded-full p-2.5 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Menu />
          </button>
          {showLocations && (
            <div className="overflow-y-auto absolute sm:right-7.5 right-3 top-7.5 lg:h-[552px] h-[350px] max-w-[400px] bg-background rounded-[15px] pt-7.5 px-2.5 shadow-lg">
              <Title asChild size="28" className="font-bold mb-7.5">
                <h4>Store Locations</h4>
              </Title>
              <div className="space-y-1">
                {storeLocations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => handleLocationClick(location)}
                    className={`w-full text-left px-5 py-2.5 rounded-[15px] transition-all duration-300 cursor-pointer ${
                      selectedLocation.id === location.id
                        ? "bg-[#F5F5F7]"
                        : "hover:bg-[#F5F5F7]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-17 bg-background rounded-full border border-light-gray transition-colors flex items-center justify-center`}
                      >
                        <MapPin
                          size={32}
                          strokeWidth={1.5}
                          className="text-blue"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">
                          {location.name}
                        </h4>
                        <p className="text-light-dark text-sm leading-relaxed">
                          {location.address}, {location.city},{" "}
                          {location.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreMap;
