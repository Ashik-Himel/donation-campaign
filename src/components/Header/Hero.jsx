const Hero = () => {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-6">I Grow By Helping People In Need</h2>
      <form className="flex justify-center w-full max-w-[500px] mx-auto">
        <input className="w-full px-4 border border-gray-400 rounded-lg focus:border-[#FF444A] focus:outline-none rounded-e-none" type="search" name="search" id="search" placeholder="Search here" required />
        <button className="btn bg-[#FF444A] text-white hover:bg-[#FF444A] border border-[#FF444A] hover:border-[#FF444A] rounded-s-none relative -left-1 normal-case text-base">Search</button>
      </form>
    </section>
  );
};

export default Hero;