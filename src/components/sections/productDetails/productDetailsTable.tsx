import Title from "@/components/ui/title";
import React from "react";

interface TableType {
  label: string;
  value: string | string[];
}
const technicalDetails = [
  {
    label: "Utförande",
    value: "Trådlösa over-ear-hörlurar med Bluetooth",
  },
  {
    label: "Tekniska funktioner",
    value: [
      "Hybridbrusreducering",
      "Medhörningsläge",
      "Sensor som känner av när hörlurarna används",
      "Bluetooth®-ljud – Bluetooth 5.2 med aptX™ Adaptive",
      "Laddning och ljudanslutning via USB-C",
    ],
  },
  {
    label: "Bluetooth-kodekar",
    value: ["aptX™ Adaptive", "aptX™ HD", "aptX™", "AAC", "SBC"],
  },
  {
    label: "Bluetooth-profiler",
    value: [
      "A2DP",
      "AVRCP",
      "HFP",
      "HSP",
      "BLE GATT (Generic Attribute Profile)",
    ],
  },
  {
    label: "Högtalarelement",
    value: "2 × 40mm dynamiska fullregisterelement i kolfiber",
  },
  {
    label: "Mikrofoner",
    value: ["4× mikrofoner för ANC", "2× mikrofoner för samtal"],
  },
  {
    label: "Batterityp",
    value: "Uppladdningsbart litiumjonbatteri",
  },
  {
    label: "Batteritid och laddning",
    value: ["30 timmars uppspelning", "15 minuters laddning ger 7 timmars uppspelning"],
  },
];

const sizeAndWeight = [
  {
    label: "Nettovikt",
    value: "320g utan förvaringsfodral",
  },
  {
    label: "Mått på förvaringsfodralet",
    value: "189mm (b) × 63mm (d) × 233mm (h)",
  },
];

const ProductDetailsTable = () => {
  return (
    <section className="mt-25 mb-25">
      <div className="container">
        <div className="grid lg:grid-cols-[679fr_921fr] gap-x-5 gap-y-12 items-start">
          <div className="lg:sticky top-0">
            <Title asChild size="52">
              <h4 className="">
                Detaljer och <br /> specifikationer
              </h4>
            </Title>
          </div>
          <div className="min-w-0">
            <SpecsTable title="Tekniska detaljer" data={technicalDetails} />
            <div className="mt-12.5">
              <SpecsTable title="Mått och vikt" data={sizeAndWeight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTable;

const SpecsTable = ({ title, data }: { title: string; data: TableType[] }) => {
  return (
    <div>
      <Title asChild size="28">
        <h6>{title}</h6>
      </Title>
      <div className="overflow-x-auto w-full max-w-fit">
        <table className="mt-5 w-full border-collapse min-w-150">
          <tbody className="[&_tr]:border-b [&_tr]:border-b-light-gray [&_tr]:flex [&_td]:w-1/2 [&_tr]:py-5">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="font-medium text-lg">{item.label}</td>
                <td className="text-lg text-light-dark">
                  {Array.isArray(item.value) ? (
                    <ul className="">
                      {item.value.map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                    </ul>
                  ) : (
                    item.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
