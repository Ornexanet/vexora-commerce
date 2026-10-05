"use client";

import { useEffect, useState } from "react";

type GrowthData = {
    productViews: number;
    addToCarts: number;
    checkoutsStarted: number;
    addToCartRate: number;
    checkoutStartRate: number;
    viewToCheckoutRate: number;
};


export default function GrowthDashboard() {
const [data, setData] = useState<GrowthData | null>(null);
useEffect(() => {
    fetch("/api/growth-analytics")
        .then((response) => response.json())
        .then((result) => setData(result));
}, []);

    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-900">
                    Growth Analytics
                </h1>

                <p className="mt-2 text-gray-600">
                    Ornexa Shop performance dashboard
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                
                <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
             <p className="text-sm text-gray-500">Product Views</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
            {data ? data.productViews : "—"}
           </p>
          </div>
          <div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
    <p className="text-sm text-gray-500">Add to Cart</p>

    <p className="mt-2 text-3xl font-bold text-gray-900">
        {data ? data.addToCarts : "—"}
    </p>
</div>
<div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
    <p className="text-sm text-gray-500">Checkout Started</p>

    <p className="mt-2 text-3xl font-bold text-gray-900">
        {data ? data.checkoutsStarted : "—"}
    </p>
</div>

<div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
    <p className="text-sm text-gray-500">Add to Cart Rate</p>

    <p className="mt-2 text-3xl font-bold text-gray-900">
        {data ? `${data.addToCartRate}%` : "—"}
    </p>
</div>
<div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
    <p className="text-sm text-gray-500">Checkout Start Rate</p>

    <p className="mt-2 text-3xl font-bold text-gray-900">
        {data ? `${data.checkoutStartRate}%` : "—"}
    </p>
</div>
<div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
    <p className="text-sm text-gray-500">View to Checkout Rate</p>

    <p className="mt-2 text-3xl font-bold text-gray-900">
        {data ? `${data.viewToCheckoutRate}%` : "—"}
    </p>
</div>

            </div>
            <h2 className="mt-10 text-xl font-bold text-gray-900">
    Conversion Funnel
</h2>
<div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
        <span className="font-medium text-gray-700">Product Views</span>
        <span className="text-xl font-bold text-gray-900">
            {data ? data.productViews : "—"}
        </span>
    </div>
</div>
<div className="mt-4 flex items-center justify-between">
    <span className="font-medium text-gray-700">Add to Cart</span>
    <span className="text-xl font-bold text-gray-900">
        {data ? data.addToCarts : "—"}
    </span>
</div>
<div className="mt-4 flex items-center justify-between">
    <span className="font-medium text-gray-700">Checkout Started</span>
    <span className="text-xl font-bold text-gray-900">
        {data ? data.checkoutsStarted : "—"}
    </span>
</div>

            </div>
        </main>
    );
}
