import ProfileLayout from "../../components/layouts/ProfileLayout";
import Logo from "../../assets/images/logo/worldbex.png";
import { Button, theme } from "antd";
import Edit2 from "../../assets/images/icon/edit2.svg";
import Lock from "../../assets/images/icon/lock.svg";
import { useClientStoreAuth } from "../../store/client/useAuth";

const UserProfile = () => {
  const { token } = theme.useToken();
  const { clientData } = useClientStoreAuth();

  return (
    <ProfileLayout>
      <section className="flex items-center lg:mt-4 justify-center">
        <div className="xl:w-1/2 flex flex-col bg-white rounded-lg p-6 gap-5 shadow-sm">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <img src={Logo} alt="WorldBex" className="h-[6rem] w-[6rem] p-2" />
            <h1 className="text-lg font-bold">{clientData?.name}</h1>
            <div className="flex items-center justify-center gap-2">
              <p className="text-gray-500">{clientData?.email}</p>
              <img src={Edit2} alt="Lock" />
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <img src={Lock} alt="Edit" />
              <p className="text-[#F4811F]">Change Password</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center pl-4">
            <div className="flex justify-between">
              <p className="w-1/2 xl:w-2/5">Mobile Number</p>
              <p className="w-1/2 text-gray-500 xl:w-3/5">{clientData?.mobile_number}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2 xl:w-2/5">Company</p>
              <p className="w-1/2 text-gray-500 xl:w-3/5">{clientData?.company}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2 xl:w-2/5">Designation</p>
              <p className="w-1/2 text-gray-500 xl:w-3/5">{clientData?.designation}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2 xl:w-2/5">Age Group</p>
              <p className="w-1/2 text-gray-500 xl:w-3/5">{clientData?.age_group}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/2 xl:w-2/5">Address</p>
              <p className="w-1/2 text-gray-500 xl:w-3/5">{clientData?.address}</p>
            </div>
          </div>

          <Button
            style={{
              color: token.colorPrimary,
              borderColor: token.colorPrimary,
              borderRadius: "4px",
            }}
          >
            Edit Profile
          </Button>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default UserProfile;
