import React from "react";

const page = () => {
  return (
    <div className="container min-h-screen mx-auto card">
      <div className="bg-white md:p-10 p-2 mx-2 shadow-md md:mx-10 mt-5">
        <div className="md:grid md:grid-cols-2 gap-8 flex flex-col max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src="img/landing.jpeg"
              className="w-96 h-96 rounded-lg object-cover"
              alt="gambarabout"
            />
          </div>

          <div className="text-left pb-4">
            Dewi Bolu Binjai adalah sebuah usaha bakery yang berlokasi di Binjai
            Barat, Kota Binjai. Dewi Bolu Binjai menawarkan berbagai macam bolu
            dengan rasa dan topping yang lezat, seperti bolu mocca, bolu pandan,
            bolu coklat, dan bolu keju. Dewi Bolu Binjai juga menerima pesanan
            kue ulang tahun, kue pernikahan, dan kue kering untuk berbagai
            acara. Dewi Bolu Binjai berkomitmen untuk memberikan produk
            berkualitas dengan harga terjangkau dan pelayanan yang ramah. Dewi
            Bolu Binjai dapat dihubungi melalui GoFood atau Google Maps.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
