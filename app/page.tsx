import React from 'react';
import Image from 'next/image';
import { MapPin, Wifi, Coffee, Car, ShowerHead, Star, Phone, Award, WavesLadder, Pin, PinIcon, Mic2, Mic, Mic2Icon, BedIcon, UserLock, Leaf } from 'lucide-react';

// Definisi Warna & Gaya Statis untuk Kemudahan Maintenance
const colors = {
  gold: "text-[#D4AF37]",
  bgGold: "bg-[#D4AF37]",
  borderGold: "border-[#D4AF37]",
  gradientGold: "from-[#F9F295] via-[#D4AF37] to-[#B38B39]", // Gradasi Gold Mewah
};

const fasilitas = [
  { icon: <BedIcon size={28} />, title: "Kamar Nyaman dan Bersih", desc:"Ruang privat bersih dan tertata untuk kualitas tidur terbaik.", image: "/ruang-kamar.jpg" },
  { icon: <Mic2Icon size={28} />, title: "Ruang Bersantai & Karaoke", desc:"Tempat asyik untuk melepas penat dan menyalurkan hobi menyanyi.", image: "/karaoke.jpg" },
  { icon: <Car size={28} />, title: "Parkir Aman & Luas", desc:"Kapasitas parkir besar, aman untuk kendaraan roda dua maupun roda empat.", image: "/parkiran.jpg" },
  { icon: <WavesLadder size={28} />, title: "Kolam Renang", desc:"Area renang outdoor yang luas dan dirawat secara rutin.", image: "/kolam-renang.jpg" },
];

const ulasan = [
  { name: "Andini Putri", rating: 5, text: "Gak nyangka nemu homestay se-estetik ini di Jember. Pelayanan juara, kamarnya mewah banget!", date: "10 Feb 2026" },
  { name: "Budi Santoso", rating: 5, text: "Fasilitas lengkap, parkir luas, dan sarapannya enak. Sangat direkomendasikan untuk keluarga.", date: "05 Feb 2026" },
  { name: "Citra Dewi", rating: 4, text: "Desain interiornya modern, konsep gold white-nya dapet banget kemewahannya. Dekat pusat kota pula.", date: "01 Feb 2026" },
];

export default function LandingPageLuxury() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. Navigasi - Transparan & Blur (Modern) */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className={`${colors.gold}`} size={30} />
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-950">
              Naila<span className={`${colors.gold}`}>Homestay</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm font-medium text-slate-600">Premium Stay in Banyuwangi</span>
            <a href="https://wa.me/628123456789" className={`${colors.bgGold} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm`}>
              <Phone size={18} /> Booking Now
            </a>
          </div>
        </div>
      </nav>

      <main>
        
        <header className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden">
          <Image 
            src="/banner-hero.jpg" 
            alt="Suasana Mewah Naila Homestay Banyuwangi"
            fill
            priority
            className="object-cover object-center transform scale-105" 
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-[-10vh]">
            <span className={`inline-flex items-center gap-2 ${colors.gold} bg-black/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 md:mb-6 backdrop-blur-sm border border-[#D4AF37]/30`}>
              <Award size={14} /> Experience Luxury Stay
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tighter leading-[0.95] drop-shadow-md">
              Kenyamanan <span className={`bg-gradient-to-r ${colors.gradientGold} bg-clip-text text-transparent`}>Bintang Lima</span> Harga Homestay
            </h2>
            <p className="text-lg md:text-2xl text-slate-100 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-snug">
              Rumah singgah yang nyaman dan asri untuk liburan keluarga Anda. Tempat yang pas untuk beristirahat sejenak dan menikmati waktu berkualitas di Banyuwangi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="#pricelist" className={`${colors.bgGold} text-white border-3 border-amber-50 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-1`}>
                Lihat Paket Harga
              </a>
              <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-full backdrop-blur-md border-3 border-amber-50">
                <MapPin size={20} className="text-red-400" />
                <span className="text-sm font-medium text-white">Lokasi Strategis, Dekat Pusat Wisata</span>
              </div>
            </div>
          </div>
        </header>

        {/* 3. About Section - Split Layout */}
        <section id="about" className="py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white group">
              <Image 
                src="/about-image.jpg"
                alt="Interior Estetik Naila Homestay"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute bottom-6 left-6 ${colors.bgGold} text-white p-5 rounded-2xl shadow-xl border border-white/20`}>
                <p className="text-4xl font-extrabold">8</p>
                <p className="text-sm font-medium opacity-90">Pilihan Kamar Nyaman</p>
              </div>
            </div>
            <div>
              <span className={`${colors.gold} font-bold tracking-widest uppercase text-sm mb-3 block`}>Tentang Kami</span>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-slate-950 leading-tight">
                Pilihan Terbaik untuk <span className={colors.gold}>Kenyamanan</span> Menginap di Banyuwangi
              </h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed font-light">
                Terletak di kawasan Boyolangu yang asri, Naila Homestay menawarkan ketenangan untuk istirahat keluarga Anda. Sejak 2025, kami fokus menghadirkan hunian yang nyaman, luas, dan jauh dari keramaian kota. Sebuah rumah kedua di Banyuwangi yang mengutamakan keasrian dan kehangatan suasana.
              </p>
              <div className="border-t border-slate-100 pt-8 mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-[#D4AF37]/10 ${colors.gold}`}><PinIcon /></div>
                  <p className="font-semibold text-slate-800">Fasilitas Lengkap</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-[#D4AF37]/10 ${colors.gold}`}><MapPin /></div>
                  <p className="font-semibold text-slate-800">Lokasi Strategis</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-[#D4AF37]/10 ${colors.gold}`}><UserLock /></div>
                  <p className="font-semibold text-slate-800">Keamanan 24/7</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-[#D4AF37]/10 ${colors.gold}`}><Leaf /></div>
                  <p className="font-semibold text-slate-800">Lingkungan Asri</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Fasilitas - Card with Images */}
        <section id="fasilitas" className="py-24 px-6 md:px-10 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className={`${colors.gold} font-bold tracking-widest uppercase text-sm mb-3 block`}>Fasilitas</span>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-950">Kenyamanan Tanpa Kompromi</h3>
              <p className="text-lg text-slate-600 font-light">Tempat kumpul yang asyik dengan fasilitas pendukung yang bikin tiap detik liburan jadi makin seru dan berkesan.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {fasilitas.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute bottom-4 left-5 ${colors.gold}`}>{item.icon}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500 mt-1 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Pricelist - 2 Paket Mewah */}
        <section id="pricelist" className="py-24 px-6 md:px-10 bg-white relative overflow-hidden">
          {/* Dekorasi BG Gold tipis */}
          <div className={`absolute -top-24 -right-24 w-96 h-96 ${colors.bgGold} opacity-5 rounded-full blur-3xl`}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className={`${colors.gold} font-bold tracking-widest uppercase text-sm mb-3 block`}>Pricelist</span>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-950">Pilihan Ruang <span className={colors.gold}>Terbaik</span> untuk Anda</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
              
              {/* Paket 1: Standar (Mewah Tetap Ekonomis) */}
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:border-[#D4AF37]/30 transition-all duration-300 group">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-950">Room 2</h4>
                  <span className={`text-xs ${colors.gold} font-bold bg-[#D4AF37]/10 px-3 py-1 rounded-full`}>Populer</span>
                </div>
                <div className="mb-6">
                  {/* Harga Coret */}
                  <p className="text-lg text-red-500 font-bold line-through mb-1">Rp 450.000</p>
                  <p className="text-5xl font-extrabold text-slate-950 tracking-tighter mb-2">
                    Rp 350<span className="text-xl font-medium text-slate-500">.000 / malam</span>
                  </p>
                </div>
                <div className="space-y-4 border-t border-slate-100 pt-8 mb-10 text-slate-700">
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Dapur Lengkap</p>
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Ruang Bersantai</p>
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Kamar Mandi Air Panas & Dingin</p>
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Kolam Renang</p>
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> AC Kamar</p>
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Kipas Angin Tower</p>
                  <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Perlengkapan Mandi & Handuk</p>
                  <p className="flex items-center gap-3 font-black"><Star size={16} className={colors.gold} /> Free Wifi, Air Mineral, Tea & Coffe</p>
                </div>
                <a href="https://wa.me/628123456789?text=Halo%20Naila%20Homestay,%20saya%20mau%20pesan%20Paket%20Deluxe%20Gold" className={`block w-full text-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition`}>
                  Pesan Sekarang!
                </a>
              </div>

              {/* Paket 2: Premium (Luxury Experience) */}
              <div className={`relative p-12 rounded-3xl shadow-2xl transition-all duration-300 transform scale-105 border-4 ${colors.borderGold}`}>
                {/* Background Gradasi Mewah */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientGold} rounded-[20px] opacity-100 z-0`}></div>
                <div className="absolute inset-0 bg-white/95 rounded-[20px] z-1"></div> {/* Overlay Putih Tipis agar teks terbaca */}

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold text-slate-950">Room 1</h4>
                    <span className="text-xs text-white font-bold bg-slate-900 px-3 py-1 rounded-full">Best Value</span>
                  </div>
                  <div className="mb-6">
                  {/* Harga Coret */}
                  <p className="text-lg text-red-500 font-bold line-through mb-1">Rp 500.000</p>
                  <p className="text-5xl font-extrabold text-slate-950 tracking-tighter mb-2">
                    Rp 400<span className="text-xl font-medium text-slate-500">.000 / malam</span>
                  </p>
                </div>
                  <div className="space-y-4 border-t border-slate-200/50 pt-8 mb-10 text-slate-800">
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Dapur Lengkap</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Ruang Makan & Bersantai</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Karaoke</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Kamar Mandi Air Panas & Dingin</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Kolam Renang</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> AC Kamar</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Kipas Angin Tower</p>
                    <p className="flex items-center gap-3"><Star size={16} className={colors.gold} /> Perlengkapan Mandi & Handuk</p>
                    <p className="flex items-center gap-3 font-black"><Star size={16} className={colors.gold} /> Free Wifi, Air Mineral, Tea & Coffe</p>
                  </div>
                  <a href="https://wa.me/628123456789?text=Halo%20Naila%20Homestay,%20saya%20mau%20pesan%20Paket%20Royal%20Platinum" className={`block w-full text-center ${colors.bgGold} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition`}>
                    Pesan Sekarang!
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Rating & Ulasan - Elegant Grid */}
        <section id="ulasan" className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-center">
              <div className="text-center lg:text-left">
                <span className={`${colors.gold} font-bold tracking-widest uppercase text-sm mb-3 block`}>Testimoni</span>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-950">Apa Kata Tamu Kami?</h3>
                <p className="text-lg text-slate-600 font-light mb-8">Kepuasan Anda adalah prioritas kami. Lihat pengalaman nyata dari tamu yang pernah menginap.</p>
                <div className="inline-flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 text-[#FFD700]"> {/* Warna Bintang Emas Terang */}
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#FFD700" size={24} />)}
                  </div>
                  <p className="text-3xl font-extrabold text-slate-950">4.9<span className="text-lg text-slate-500 font-medium">/5.0</span></p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {ulasan.map((item, idx) => (
                  <div key={idx} className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-5 ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.date}</p>
                    </div>
                    <div className="flex gap-0.5 text-[#FFD700]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < item.rating ? "#FFD700" : "none"} className={i < item.rating ? "" : "text-slate-200"} />
                      ))}
                    </div>
                    <p className="text-slate-700 font-light text-sm leading-relaxed italic">"{item.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 7. Footer - Dark & Gold Elegant */}
      <footer className="bg-slate-950 text-white py-20 px-6 mt-16 border-t-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Award className={`${colors.gold}`} size={24} />
              <h4 className="text-xl font-bold tracking-tighter">Naila<span className={`${colors.gold}`}>Homestay</span></h4>
            </div>
            <p className="max-w-xs mx-auto md:mx-0 text-slate-400 italic text-sm font-light">
              "Kenyamanan bintang lima, kehangatan rumah sendiri. Desain estetik dengan sentuhan Gold-White di Banyuwangi."
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-white mb-4 underline decoration-[#D4AF37] decoration-2 underline-offset-4">Navigasi</h5>
            <a href="#about" className="block text-slate-400 hover:text-[#D4AF37] text-sm">Tentang Kami</a>
            <a href="#fasilitas" className="block text-slate-400 hover:text-[#D4AF37] text-sm">Fasilitas</a>
            <a href="#pricelist" className="block text-slate-400 hover:text-[#D4AF37] text-sm">Harga</a>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-white mb-4 underline decoration-[#D4AF37] decoration-2 underline-offset-4">Hubungi Kami</h5>
            <p className="text-slate-400 text-sm flex items-start gap-3 justify-center md:justify-start">
              <MapPin size={18} className={`${colors.gold} mt-0.5`} />
              <span>Jl. Kemuning, Banyuwangi<br />Jawa Timur, Indonesia</span>
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-3 justify-center md:justify-start">
              <Phone size={18} className={`${colors.gold}`} />
              <span>+62 812 3456 789</span>
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-600 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} NAILA HOMESTAY PRESTIGE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}