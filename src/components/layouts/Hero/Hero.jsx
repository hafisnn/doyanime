const Hero = () => {
    return (
        <>
            <div className="flex bg-bg-kumanime justify-evenly items-center m-auto h-[80vh] font-poppins">
                <div className="hero-text max-w-[40%] text-white">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">Selamat Datang di <span className="text-kumanime"> <br />Doyan Technology Animelist</span></h3>
                    <p className="text-xs md:text-sm mt-3 mb-6 text-center md:text-left">Tempatnya streaming anime gratis subtitle Indonesia! Nikmati serunya menonton anime favoritmu kapan saja, di mana saja. Dengan koleksi terbaru dan klasik, DoyAnime siap menyajikan hiburan tanpa henti. 🐾🎉 <span className="text-kumanime"> <br /><a href="https://alhafis.my.id"> <br/>Alhafis Web Developer</a></span></p>
                </div>
                <img src="anime.gif" alt="" className="w-[400px] h-[400px] hidden md:block rounded-full" />
            </div>
        </>
    )
}

export default Hero;