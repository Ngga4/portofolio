export const Footer = () => {
  return (
    <div className="mt-22 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-semibold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda" className="hover:text-blue-500">Beranda</a>
            <a href="#tentang" className="hover:text-blue-500">Tentang</a>
            <a href="#proyek" className="hover:text-blue-500">Proyek</a>
            <a href="#sertif" className="hover:text-blue-500">Sertifikat</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/Ngga4">
                <i className="ri-github-fill ri-2x hover:text-blue-500"></i>
            </a>
            <a href="https://www.linkedin.com/in/angga-saputra-325b352a7/">
                <i className="ri-linkedin-fill ri-2x hover:text-blue-500"></i>
            </a>
            <a href="https://www.instagram.com/anggasaputraa31/">
                <i className="ri-instagram-fill ri-2x hover:text-blue-500"></i>
            </a>
            <a href="https://www.tiktok.com/@gaxxclipper">
                <i className="ri-tiktok-fill ri-2x hover:text-blue-500"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer
