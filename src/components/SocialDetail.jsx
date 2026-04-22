import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";

export default function SocialDetail() {
  const [open, setOpen] = useState(false);

  // 🔥 Load Elfsight Script Safely
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // ✅ SAME HANDLE SUBMIT AS CODE 1
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const message = `New Lead 🚀%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;
    const whatsappNumber = "919993663668";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="social"
      className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed"
    >
      <FadeUp className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT UI */}
        <div className="order-2 lg:order-1 relative h-[400px]">
          <div className="absolute inset-0 bg-brand border-4 border-black rounded-[30px] brutalist-shadow p-8 flex items-center justify-center z-10">
            <div className="w-[60%] h-[90%] bg-white border-4 border-black rounded-[20px] p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b-2 border-zinc-200 pb-3">
                <div className="w-10 h-10 bg-black rounded-full border-2 border-black" />
                <div>
                  <div className="w-20 h-3 bg-zinc-300 rounded mb-1" />
                  <div className="w-12 h-2 bg-zinc-200 rounded" />
                </div>
              </div>
              <div className="flex-1 bg-zinc-100 border-2 border-black rounded-xl flex items-center justify-center relative overflow-hidden">
                <iconify-icon icon="solar:heart-angle-linear" className="text-6xl text-black" />
                <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded border-2 border-black">
                  10.5k Likes
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 bg-black text-white font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
            <iconify-icon icon="solar:smartphone-update-linear" /> Social Media
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Build a loyal community that loves your brand.
          </h2>

          <p className="text-xl text-zinc-700 mb-8">
            We create engaging, shareable content that turns followers into brand advocates.
          </p>

          <ul className="space-y-4 mb-10 font-bold text-lg">
            {[
              "Community Management",
              "Viral Content Strategy",
              "Influencer Partnerships",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="text-2xl text-brand bg-black rounded-full"
                />
                {i}
              </li>
            ))}
          </ul>

          {/* ✅ BUTTON NOW OPENS MODAL */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-white text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-4 border-black hover:bg-brand transition-colors"
          >
            Grow Your Audience
          </button>
        </div>
      </FadeUp>

      {/* 🔥 INSTAGRAM FEED */}
      <div className="mt-10">
        <div className="elfsight-app-189f8f4c-5a21-491a-877a-9c4f4ec41037"></div>
      </div>

      {/* ✅ SAME MODAL FROM CODE 1 */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white border-4 border-black rounded-2xl p-8 w-full max-w-md brutalist-shadow relative">
            
            <h3 className="text-2xl font-black mb-6">Get Started 🚀</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="name" type="text" placeholder="Your Name" required className="border-2 border-black p-3 rounded-lg" />
              <input name="phone" type="tel" placeholder="Your Number" required className="border-2 border-black p-3 rounded-lg" />
              <input name="address" type="text" placeholder="Your Address" required className="border-2 border-black p-3 rounded-lg" />

              <button type="submit" className="bg-black text-white py-3 rounded-lg">
                Submit
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}