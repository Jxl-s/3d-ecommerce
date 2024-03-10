export default function Checkout() {
    return (
        <section>
            <h1 className="text-2xl font-semibold mt-4">Shipping Address</h1>
            <p className="opacity-50">
                This is a fake checkout, please don&apos;t give your address
            </p>

            <h1 className="text-2xl font-semibold mt-4">Payment Method</h1>
            <p className="opacity-50">
                This is a fake checkout, please don&apos;t provide your card
                information
            </p>

            <div className="grid grid-cols-2 gap-6">
                <section className="col-span-2 xl:col-span-1">
                    <h1 className="text-2xl font-semibold mt-4">
                        Review Items
                    </h1>
                    <div className="bg-white rounded-lg p-2 drop-shadow-md mt-2 dark:bg-neutral-900/70"></div>
                </section>
                <section className="col-span-2 xl:col-span-1">
                    <h1 className="text-2xl font-semibold mt-4">
                        Order Summary
                    </h1>
                    <div className="bg-white rounded-lg p-2 drop-shadow-md mt-2 dark:bg-neutral-900/70"></div>
                </section>
            </div>
        </section>
    );
}
