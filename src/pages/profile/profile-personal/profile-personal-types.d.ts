export type PersonalInfoProps = {
  data: ProfileData;
  isLogged: boolean;
};

export type PersonalInfo = {
  title: string;
  labels?: any[];
  icon: IconProp;
  href?: string;
  rightNodes?: ReactNode;
};
