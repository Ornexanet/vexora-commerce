import React, { useState, useEffect, useRef } from "react";
import Title from "@/components/ui/title";
import { MapPin, Menu } from "lucide-react";
import {
  storeLocations,
  StoreLocation,
} from "@/components/sections/contact/storeLocations";

const StoreMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation>(
    storeLocations[0]
  );
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
let map: any;


    const loadMap = async () => {
      const maplibregl = (await import(/* webpackChunkName: "maplibre" */ "maplibre-gl")).default;

      await import("maplibre-gl/dist/maplibre-gl.css");

      if (!mapContainer.current) return;

      map = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: [selectedLocation.longitude, selectedLocation.latitude],
        zoom: 11,
      });

      new maplibregl.Marker()
        .setLngLat([selectedLocation.longitude, selectedLocation.latitude])
        .addTo(map);
    };

    loadMap();

    return () => map?.remove();
  }, [selectedLocation]);

  return (
    <section className="w-full lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div ref={mapContainer} className="relative rounded-2xl overflow-hidden lg:h-[612px] h-[400px]" />
      </div>
    </section>
  );
};

export default StoreMap;
