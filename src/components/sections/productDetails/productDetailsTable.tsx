import Title from "@/components/ui/title";
import React from "react";

interface TableType {
  label: string;
  value: string | string[];
}
const technicalDetails = [
  {
    label: "Wearing style",
    value: "Bluetooth Wireless Over-Ear Headphones",
  },
  {
    label: "Technical features",
    value: [
      "Hybrid Noise Cancellation",
      "Ambient Pass-Through",
      "Wear-Detection Sensor",
      "Bluetooth® audio – Bluetooth 5.2 with aptX™ Adaptive",
      "USB-C charging & audio interface",
    ],
  },
  {
    label: "Bluetooth codecs",
    value: ["aptX™ Adaptive", "aptX™ HD", "aptX™", "AAC", "SBC"],
  },
  {
    label: "Bluetooth profiles",
    value: [
      "A2DP",
      "AVRCP",
      "HFP",
      "HSP",
      "BLE GATT (Generic Attribute Profile)",
    ],
  },
  {
    label: "Drive units",
    value: "2 × 40mm dynamic full-range carbon driver",
  },
  {
    label: "Microphones",
    value: ["4× mics for ANC", "2× mics for telephony"],
  },
  {
    label: "Battery type",
    value: "Rechargeable Lithium-Ion",
  },
  {
    label: "Battery life & charging",
    value: ["30 hours playback", "15-minute charge for 7 hours playback"],
  },
];

const sizeAndWeight = [
  {
    label: "Net weight",
    value: "320g (without carry case)",
  },
  {
    label: "Dimensions (Carry Case)",
    value: "189mm (w) × 63mm (d) × 233mm (h)",
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
                Details & <br /> Specifications
              </h4>
            </Title>
          </div>
          <div className="min-w-0">
            <SpecsTable title="Technical Details" data={technicalDetails} />
            <div className="mt-12.5">
              <SpecsTable title="Size & weight" data={sizeAndWeight} />
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
