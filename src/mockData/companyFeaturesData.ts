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
        title: "Personalize your Products for free.",
        description: "Engrave your Gadget with your initials or favorite emoji — free."
    },
    {
        id: 2,
        icon: "/images/companyFeatures/icon-2.png",
        title: "Get flexible delivery and easy pickup.",
        description: "Choose from 2-hour delivery from our Store, free delivery or easy pickup options."
    },
    {
        id: 3,
        icon: "/images/companyFeatures/icon-3.png",
        title: "Pay over time, interest-free.",
        description: "When you choose to check out with Credit Card Monthly Installments."
    },
    {
        id: 4,
        icon: "/images/companyFeatures/icon-4.png",
        title: "Shop live with a Specialist.",
        description: "Let us guide you live over video and answer all of your questions."
    },
    {
        id: 5,
        icon: "/images/companyFeatures/icon-5.png",
        title: "Explore a shopping experience designed around you.",
        description: "Use the Vexora Store app to get a more personal way to shop."
    }
];