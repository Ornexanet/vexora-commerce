export interface CompanyFeature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export const companyFeaturesData: CompanyFeature[] = [
    {
        id: 1,
        icon: "/images/companyFeatures/icon-1.png",
        title: "Personanpassa dina produkter kostnadsfritt.",
        description: "Gravera din produkt med initialer eller favoritemoji utan extra kostnad."
    },
    {
        id: 2,
        icon: "/images/companyFeatures/icon-2.png",
        title: "Få flexibel leverans och enkel upphämtning.",
        description: "Välj mellan snabb leverans, fri frakt eller smidiga upphämtningsalternativ."
    },
    {
        id: 3,
        icon: "/images/companyFeatures/icon-3.png",
        title: "Betala över tid utan ränta.",
        description: "Välj delbetalning vid kassan för en flexibel köpupplevelse."
    },
    {
        id: 4,
        icon: "/images/companyFeatures/icon-4.png",
        title: "Handla med hjälp av en specialist.",
        description: "Få personlig vägledning via video och svar på dina frågor."
    },
    {
        id: 5,
        icon: "/images/companyFeatures/icon-5.png",
        title: "Upptäck en shoppingupplevelse anpassad för dig.",
        description: "Använd Ornexa-appen för en mer personlig köpupplevelse."
    }
];