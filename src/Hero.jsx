function Hero() {
  return (
    <section className="py-8 mx-16">
      <div className="grid grid-cols-2 rounded-lg min-h-[60vh] bg-[#f4f8f9]">
        <div className="flex flex-col justify-center p-16 gap-4">
          <span className="inline-block rounded-full px-2 py-1 text-xs bg-[#febc26] w-fit">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-6xl font-semibold">
            Premium Product Online Shop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a
            href="/shop"
            className="px-4 py-2 text-white font-medium bg-black rounded-md w-fit inline-block">
            Shop Now
          </a>
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
