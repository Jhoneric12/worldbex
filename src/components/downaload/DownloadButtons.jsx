import Apple from "../../assets/images/logo/appstore.png";
import Google from "../../assets/images/logo/googleplay.webp";
import Huawei from "../../assets/images/logo/huawei.png";

const DownloadButtons = ({ styles }) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 mb-4 px-2 pb-4 ${styles}`}>
      <h1 className="md:text-sm xl:text-sm lg:text-sm font-bold text-xl whitespace-nowrap">
        AVAILABLE IN MOBILE APP
      </h1>
      <div className="md:flex-col md:gap-2 xl:flex-col xl:gap-2 lg:flex-col lg:gap-2 flex justify-center items-center gap-3">
        <button className="hover:scale-110 duration-200 whitespace-nowrap">
          <img
            src={Google}
            className="w-70 h-12 xl:w-40 xl:h-12 lg:w-40 lg:h-12 md:w-40 md:h-12"
            alt="Download in Google Play"
          />
        </button>
        <button className="hover:scale-110 duration-200">
          <img
            src={Apple}
            className="w-70 h-12 xl:w-40 xl:h-12 lg:w-40 lg:h-12 md:w-40 md:h-12"
            alt="Download in App Store"
          />
        </button>
        <button className="hover:scale-110 duration-200">
          <img
            src={Huawei}
            className="w-70 h-14 xl:w-40 xl:h-12 lg:w-40 lg:h-12 md:w-40 md:h-12"
            alt="Download in App Gallery"
          />
        </button>
      </div>
    </div>
  );
};

export default DownloadButtons;
