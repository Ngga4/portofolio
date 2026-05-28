import DataImage, { listSertif } from "./data";
import {listTools, listProyek} from "./data";


function App() {
    
    return (
        <>
            <div className="hero grid md:grid-cols-2 items-center pt-5 xl:gap-0 gap-6 grid-cols-1">
                <div className="animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="flex items-center gap-3 mb-6 bg-slate-800 w-fit p-4 rounded-2xl">
                        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
                        <q>Teruslah Berusaha Sampai Kamu Berhasil.😊</q>
                    </div>
                    <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Angga Saputra</h1>
                    <p className="text-base/loose mb-6 opacity-50">
                        Saya memiliki ketertarikan dalam bidang Programing, Data Analyst dan Designer, terutama pada pembuatan Website, Visualisasi data dan Desain Grafis. Saya selalu berusaha untuk terus belajar dan mengembangkan keterampilan saya dalam bidang ini, serta mencari peluang untuk menerapkan pengetahuan saya dalam proyek-proyek yang menantang.
                    </p>
                    <div className="flex items-center sm:gap-4 gap-2">
                        <a href="https://drive.google.com/file/d/11RM_arhIE_48mXJIrM7LBBg2fGzurhaQ/view?usp=sharing" className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600 ">
                            Download CV <i className="ri-download-line ri-lg"></i>
                        </a>
                        <a href="#proyek" className="bg-slate-700 p-4 rounded-2xl hover:bg-slate-600 ">
                            Lihat Proyek <i className="ri-arrow-down-fill ri-lg"></i>
                        </a>
                    </div>
                </div>
                <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s rounded-2xl" loading="lazy"/>
            </div>

            {/* tentang */}
            <div className="tentang mt-22 py-10" id="tentang">
                <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-slate-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                    <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
                    <p className="text-base/loose mb-10">
                        Hi, perkenalkan saya Angga Saputra, seorang  Web Developer, Designer untuk UI/UX Design maupun Product Digital, Video Editor. Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
                    </p>
                    <div className="flex items-center justify-between">
                        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
                        <div className="flex items-center gap-6">
                            <div>
                                <div>
                                    <h1 className="text-4xl mb-1">
                                        5<span className="text-blue-500">+</span>
                                    </h1>
                                </div>
                                <p>Proyek Selesai</p>
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-4xl mb-1">
                                        0<span className="text-blue-500">+</span>
                                    </h1>
                                </div>
                                <p>Pengalaman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tools */}
           <div className="tools mt-22">
                <h1 className="text-4xl/snug font-bold mb-4"data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
                <p className="xl:w-2/5 lg:3=2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk menghasilkan beberapa project.</p>
                <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listTools.map(tool =>(
                        <div className=" flex item-center gap-2 p-3 border border-slate-600 rounded-md hover:bg-slate-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-slate-800 p-1 group-hover:bg-slate-900" loading="lazy"/>
                            <div>
                                <h4 className="font-bold ">{tool.nama}</h4>
                                <p className="opacity-50 ">
                                    {tool.ket}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
            {/* tentang */}

            {/* proyek */}
            <div className="proyek mt-22 py-10" id="proyek">
                <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
                <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">berikut ini beberapa proyek yang telah saya kerjakan.</p>
                <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {listProyek.map(proyek =>(
                        <div key={proyek.id} className="p-4 bg-slate-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                            <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
                            <div>
                                <h1 className="text2xl font-bold my-4">{proyek.nama}</h1>
                                <p className="text-base/loose mb-4">{proyek.desk}</p>
                                <div className="flex flex-wrap gap-2 ">
                                    {proyek.tools.map((tool, index) => (
                                        <p className="bg-slate-500 border border-slate-600 text-sm py-1 px-3 rounded-md font-semibold" key={index}>{tool}</p>
                                    ))}
                                </div>
                                <div className="mt-8 text-center">
                                    <a href={proyek.link} className="bg-blue-700 border-blue-500 hover:bg-blue-600 text-white block p-3 rounded-lg">
                                        Lihat Proyek
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* proyek */}
            
            {/* sertif */}
            <div className="sertif mt-22" id="sertif">
                <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000"> Sertifikat </h1>
                <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut adalah beberapa sertifikat yang telah saya peroleh.</p>
                <div className="sertif-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listSertif.map(sertif =>(
                        <div key={sertif.id} className="p-4 bg-slate-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertif.dad}>
                            <img src={sertif.gambar} alt="Sertifikat Image" loading="lazy"/>
                        </div>
                    ))}
                </div>
            </div>
            {/* sertif */}


            {/* kontak */}
            <div className="kontak mt-22 sm:p-10 p-0" id="kontak">
                <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
                <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.</p>
                <form action="https://formsubmit.co/anggasholehatun969@gmail.com" method="POST" className="bg-slate-800 p-10 mt-8 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="flex flex-col gap-6"> 
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Nama Lengkap</label>
                            <input type="text" name="nama" placeholder="Maukkan Nama..." className="border border-slate-500 p-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Email</label>
                            <input type="email" name="email" placeholder="Masukkan Email..." className="border border-slate-500 p-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pesan" className="font-semibold">Pesan</label>
                            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukkan Pesan..." className="border border-slate-500 p-2 rounded-md" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className=" bg-blue-700 border-blue-500 hover:bg-blue-600 text-white w-full cursor-pointer p-3 rounded-lg ">
                                Kirim Pesan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* kontak */}
        </>
    )
}

export default App
