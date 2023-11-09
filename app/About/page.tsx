import React from "react";

const page = () => {
  return (
    <div className="container min-h-screen mx-auto card">
      <div className="bg-white md:p-10 p-2 mx-2 shadow-md md:mx-10 mt-5">
        <div className="md:grid md:grid-cols-2 gap-8 flex flex-col max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src="img/logo.png"
              className="w-96 h-96 rounded-lg object-cover"
              alt="gambarabout"
            />
          </div>

          <div className="text-left pb-4">
            Bolpan CDR adalah website yang menyediakan berbagai macam bolu yang
            lezat dan berkualitas. Anda bisa memesan bolu secara online dan
            menikmati rasa yang nikmat dan manis. Bolpan CDR menawarkan bolu
            dengan berbagai varian, seperti bolu pandan mini, bolu brownies mini
            yang tersedia setiap harinya, serta bolu pandan, bolu mocca, bolu
            keju, bolu karamel, bolu sukade, bolu pisang, bolu ulang tahun, bolu
            rainbow. Semua bolu dibuat dengan bahan-bahan pilihan dan tanpa
            pengawet. Bolpan CDR juga memberikan layanan antar dan kemasan yang
            menarik. Anda bisa mengunjungi website Bolpan CDR di sini untuk
            melihat katalog bolu dan cara pemesanan. Bolpan CDR, bolu yang bikin
            ketagihan!
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
