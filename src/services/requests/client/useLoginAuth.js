import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/client/auth";
import { useClientStoreAuth } from "../../../store/client/useAuth";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setClientData } = useClientStoreAuth();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      setClientData({
        id: 1,
        name: "Christopher Dungaran",
        mobile_number: "639158007411",
        email: "chrismhoi17@gmail.com",
        password: "password@password.com",
        company: "Dynamic Global Soft Inc",
        designation: "Programmer",
        age_group: "Below 18",
        address: "123, CAINTA, RIZAL, REGION IV-A (CALABARZON)",
      });
      navigate("/visitor/events");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
