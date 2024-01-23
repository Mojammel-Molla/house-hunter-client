import BannerImage from '../../../assets/banner-image.jpg';
const Banner = ({ handleSearch }) => {
  return (
    <div
      className="hero min-h-[85vh] rounded-md"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="hero-overlay rounded-md "></div>
      <div className="hero-content text-center text-neutral-content">
        <form onSubmit={handleSearch} className="w-96 flex gap-3">
          <input
            type="text"
            name="search"
            placeholder="Search here"
            className="input input-bordered input-info w-full text-black"
          />
          <button
            type="submit"
            className="btn bg-blue-600 text-white hover:bg-blue-900"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
