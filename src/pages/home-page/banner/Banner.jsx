import BannerImage from '../../../assets/banner-image.jpg';
const Banner = () => {
  return (
    <div
      className="hero min-h-[85vh] rounded-md"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="hero-overlay rounded-md "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Your Dream Residence
          </h1>
          <p className="mb-5">
            Step into a rental that truly feels like home. From snug cottages to
            expansive family houses, we have curated the perfect match for you.
            Your ideal haven awaits, where every detail is a brushstroke in the
            canvas of comfort and style. Begin your next chapter in a space that
            goes beyond living it of your unique story.
          </p>
          <button className="btn ">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
