"use client";

import { useEffect, useState } from "react";

export default function GrowthDashboard() {
const [data, setData] = useState<any>(null);
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
        </main>
    );
}
