export const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-violet-500">My</span>
        Portfolio
      </h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Yovvii">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/yofjrrrr?igsh=bDFqaHdnaW9uaHI0">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://wa.me/6287767762252?text=Halo%20saya%20tertarik%20dengan%20portofolio%20Anda">
          <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
        <a href="https://www.facebook.com/sea.halberd.165?mibextid=ZbWKwL">
          <i className="ri-facebook-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};
