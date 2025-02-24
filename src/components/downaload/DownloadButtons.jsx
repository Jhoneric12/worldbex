import Apple from "../../assets/images/logo/appstore.svg";
import Google from "../../assets/images/logo/playstore.svg";
import Huawei from "../../assets/images/logo/huawei.svg";

const DownloadButtons = ({ styles }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-2 px-2 pr-3 border-r border-gray-300 mx-2 my-2 ${styles}`}
    >
      <div className="flex-row xl:gap-2 lg:gap-2 flex justify-center items-center gap-3">
        <button className="h-12 border border-gray-300 rounded-xl hover:scale-102 duration-300">
          <img src={Google} className="h-9" alt="Download in Google Play" />
        </button>
        <button className="h-12 border border-gray-300 rounded-xl hover:scale-102 duration-300">
          <img src={Apple} className="h-9" alt="Download in App Store" />
        </button>
        <button className="h-12 border border-gray-300 rounded-xl hover:scale-102 duration-300">
          <img src={Huawei} className="h-9" alt="" />
        </button>
      </div>
    </div>
  );
};

export default DownloadButtons;
