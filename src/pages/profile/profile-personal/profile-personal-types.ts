import { ProfileData } from "..";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type PersonalInfoProps = {
  data: ProfileData;
  isLogged: boolean;
};

export type PersonalInfo = {
  title: string;
  labels?: any[];
  icon: IconProp;
  href?: string;
  rightNodes?: React.ReactNode;
};
