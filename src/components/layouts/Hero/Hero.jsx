const Hero = () => {
    return (
        <>
            <div className="flex bg-bg-kumanime justify-evenly items-center m-auto h-[80vh] font-poppins">
                <div className="hero-text max-w-[80%] text-white">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">Selamat Datang di <span className="text-kumanime"> <br />DoyAnime</span></h3>
                    <p className="text-xs md:text-sm mt-3 mb-6 text-center md:text-left">Tempatnya streaming anime gratis subtitle Indonesia! Nikmati serunya menonton anime favoritmu kapan saja, di mana saja. Dengan koleksi terbaru dan klasik, DoyAnime siap menyajikan hiburan tanpa henti. 😋💦 </p>
                    
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">
                    <span className="text-kumanime">
                    <p>Created By</p>
                    <a href="https://alhafis.my.id" className="flex items-center justify-center md:justify-start">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-5 h-5 mr-3" />
                    alhafis.id
                   <img src="https://jasalogocepat.com/wp-content/uploads/2024/02/Logo-Centang-Biru-PNG-Jasalogocepat-768x768.png" alt="Verified" className="w-4 h-4 ml-1" />
    </a>
  </span>
</h3>



                </div>
                <img src="anime.gif" alt="" className="w-[400px] h-[400px] hidden md:block rounded-full" />
            </div>
        </>
    )
}

export default Hero;