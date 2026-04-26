"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Wifi, Coffee, Car, ShowerHead, Star, Phone, Award, WavesLadder, Pin, PinIcon, Mic2, Mic, Mic2Icon, BedIcon, UserLock, Leaf, ChevronLast, ChevronFirst, X, XIcon } from 'lucide-react';
import { useState } from 'react';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

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
  { name: "Bambang Usodo", rating: 5, text: "Homestay nya nyaman banget, bersih, pelayanannya two tumbs up...ramah banget... Lengkap dg mushola, kolam renang, plus toiletnya super duper bersih. Homestay yg sangat recomended...", date: "Feb 2026" },
  { name: "Kristyanti RIni", rating: 5, text: "Homestay yang nyaman , bersih, fasilitas lengkap, owner nya ramah,harga terjangkau,berasa di rumah sendiri 🙏🙏🙏", date: "Jan 2026" },
  { name: "Tri Surya", rating: 5, text: "Tempatnya nyaman, kamar bersih, pemilik ramah dan fasilitas lengkap ada karaoke dan mushola. pokoknya recommended 👍", date: "Feb 2026" },
  { name: "Mas Sungkono", rating: 5, text: "Homestay nyaman untuk liburan, anti kebisingan kendaraan namun akses ke kota sangat dekat dan mudah. Searah dengan wisata kawah ijen, kalibendo, jagir dll. Fasilitas lengkap, karaoke, coffeeshop, kolam renang", date: "Des 2025" },
  { name: "RIF'AN AZMI", rating: 5, text: "Homestay 3 lantai dg beberapa kamar,dg fasilitas kolam renang ,karaoke room , mushola , kamar mandi dalam dan luar dll", date: "Nov 2025" },
  { name: "Dewi Marmiah", rating: 5, text: "Tempat nyaman,bersih,pelayanan ramah,sangat puas menginap di Naila homestay", date: "Jan 2026" },
  { name: "Adelisa Adzkia", rating: 5, text: "Homestay nyaman,adem dn cocok untuk liburan di Banyuwangi..", date: "Jan 2026" },
  { name: "Wahyu Ryan Refany", rating: 5, text: "Homestai yang nyaman untuk istirahat", date: "Des 2025" },
];

export default function LandingPageLuxury() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4; // Menampilkan 4 card per halaman (2 baris di desktop)
  const totalPages = Math.ceil(ulasan.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = ulasan.slice(indexOfFirstReview, indexOfLastReview);


  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      <nav className="fixed top-0 z-[100] w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Award className={`${colors.gold}`} size={30} />
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-950">
              Naila<span className={`${colors.gold}`}>Homestay</span>
            </h1>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-[#D4AF37] transition-colors">Tentang Kami</a>
            <a href="#fasilitas" className="text-sm font-semibold text-slate-600 hover:text-[#D4AF37] transition-colors">Fasilitas</a>
            <a href="#pricelist" className="text-sm font-semibold text-slate-600 hover:text-[#D4AF37] transition-colors">Pricelist</a>
            <a href="#ulasan" className="text-sm font-semibold text-slate-600 hover:text-[#D4AF37] transition-colors">Testimoni</a>
            
            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

            <a 
              href="https://wa.me/+6282142821206?text=Halo%20Naila%20Homestay,%20saya%20ingin%20tanya%20ketersediaan%20kamar." 
              target="_blank"
              className={`${colors.bgGold} text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm`}
            >
              <Phone size={16} /> Booking Now
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-[#D4AF37] transition-colors"
          >
            {isMenuOpen ? <XIcon size={28} /> : (
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-4 h-0.5 bg-current ml-auto"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
          <div className="px-6 flex flex-col items-center justify-center gap-6">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-800">Tentang Kami</a>
            <a href="#fasilitas" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-800">Fasilitas</a>
            <a href="#pricelist" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-800">Pricelist</a>
            <a href="#ulasan" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-800">Testimoni</a>
            <a 
              href="https://wa.me/6282142821206?text=Halo%20Naila%20Homestay,%20saya%20ingin%20tanya%20ketersediaan%20kamar." 
              className={`${colors.bgGold} text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 text-center`}
            >
              <Phone size={20} /> Pesan Kamar Sekarang
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
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
                <a href="https://wa.me/+6282142821206?text=Halo%20Naila%20Homestay,%20saya%20mau%20pesan%20Ruang%202%20" className={`block w-full text-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition`}>
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
                  <a href="https://wa.me/+6282142821206?text=Halo%20Naila%20Homestay,%20saya%20mau%20pesan%20Ruang%201%20" className={`block w-full text-center ${colors.bgGold} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition`}>
                    Pesan Sekarang!
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="ulasan" className="py-24 px-6 md:px-10 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-center">
              
              {/* Bagian Kiri - Kalimat Tetap */}
              <div className="text-center lg:text-left">
                <span className={`${colors.gold} font-bold tracking-widest uppercase text-sm mb-3 block`}>Testimoni</span>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-950">Apa Kata Tamu Kami?</h3>
                <p className="text-lg text-slate-600 font-light mb-8">Kepuasan Anda adalah prioritas kami. Lihat pengalaman nyata dari tamu yang pernah menginap.</p>
                <div className="inline-flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#FFD700" size={24} />)}
                  </div>
                  <p className="text-3xl font-extrabold text-slate-950">5.0<span className="text-lg text-slate-500 font-medium">/5.0</span></p>
                </div>
              </div>
              
              {/* Bagian Kanan - Card & Pagination */}
              <div className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  {currentReviews.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-amber-200"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs uppercase">
                              {item.name.substring(0, 2)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 leading-none">{item.name}</p>
                              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-medium">{item.date}</p>
                            </div>
                          </div>
                          <div className="flex gap-0.5 text-[#FFD700]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill={i < item.rating ? "#FFD700" : "none"} strokeWidth={i < item.rating ? 0 : 2} className={i < item.rating ? "" : "text-slate-200"} />
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 font-light text-sm leading-relaxed">"{item.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kontrol Pagination */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-3 rounded-full border transition-all ${currentPage === 1 ? 'text-slate-300 border-slate-100' : 'text-slate-600 border-slate-200 hover:bg-white hover:shadow-md'}`}
                  >
                    <ChevronFirst size={20} />
                  </button>
                  
                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === i + 1 ? `${colors.bgGold} w-8` : 'bg-slate-200'}`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-3 rounded-full border transition-all ${currentPage === totalPages ? 'text-slate-300 border-slate-100' : 'text-slate-600 border-slate-200 hover:bg-white hover:shadow-md'}`}
                  >
                    <ChevronLast size={20} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 7. Footer - Dark & Gold Elegant */}
      <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 md:px-10 mt-16 border-t-4 border-[#D4AF37] relative overflow-hidden">
        {/* Dekorasi Cahaya Gold Halus di Sudut */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            
            {/* Kolom 1: Branding */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Award className={`${colors.gold}`} size={28} />
                <h4 className="text-2xl font-bold tracking-tighter">Naila<span className={`${colors.gold}`}>Homestay</span></h4>
              </div>
              <p className="text-slate-400 italic text-sm font-light leading-relaxed">
                "Ruang singgah pilihan untuk setiap perjalanan seru. Menghadirkan kenyamanan dan kehangatan di tengah indahnya Banyuwangi."
              </p>
            </div>

            {/* Kolom 2: Navigasi Cepat */}
            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigasi</h5>
              <ul className="space-y-4">
                <li><a href="#about" className="text-slate-400 hover:text-[#D4AF37] text-sm transition-colors">Tentang Kami</a></li>
                <li><a href="#fasilitas" className="text-slate-400 hover:text-[#D4AF37] text-sm transition-colors">Fasilitas Ruang</a></li>
                <li><a href="#pricelist" className="text-slate-400 hover:text-[#D4AF37] text-sm transition-colors">Pilihan Kamar</a></li>
                <li><a href="#ulasan" className="text-slate-400 hover:text-[#D4AF37] text-sm transition-colors">Cerita Tamu</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak Detail */}
            <div className="space-y-6">
              <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Kontak</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-slate-400 group">
                  <MapPin size={20} className={`${colors.gold} shrink-0`} />
                  <span className="text-sm group-hover:text-white transition-colors">Jl. Kemuning, Watubuncul, Boyolangu, Kec. Giri, Kabupaten Banyuwangi, Jawa Timur 68424</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 group">
                  <Phone size={20} className={`${colors.gold} shrink-0`} />
                  <span className="text-sm group-hover:text-white transition-colors">+62 821 4282 1206 </span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 group">
                  <InstagramIcon className={`${colors.gold} shrink-0`}/>
                  <span className="text-sm group-hover:text-white transition-colors">@nailahomestaybwi</span>
                </div>
              </div>
            </div>

            {/* Kolom 4: Google Maps Embed */}
            <div className="space-y-4">
              <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Lokasi Kami</h5>
              <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-slate-800 hover:border-[#D4AF37]/50 transition-all shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126365.97732863355!2d114.21231764908845!3d-8.209111696176087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14500336151cf%3A0xbddbb11628b4abf8!2sNaila%20homestay!5e0!3m2!1sid!2sid!4v1777179241924!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-[10px] text-slate-500 text-center md:text-left italic">
                Klik peta untuk petunjuk arah
              </p>
            </div>

          </div>

          {/* Baris Bawah */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
            <p>&copy; {new Date().getFullYear()} Naila Homestay. Crafted with pride.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}