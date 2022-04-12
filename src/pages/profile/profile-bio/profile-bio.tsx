import { FC } from "react";
import { Card, CardTitle } from "../../../components";
import aboutIcon from "../../../assets/avatar.svg";
import "./profile-bio.scss";
import { profileConfig } from "..";

type Props = {
  bio: string;
};

export const ProfileBio: FC<Props> = ({ bio }) => {
  let aboutMe = bio;

  // Truncate and add ellipsis if longer than the max length.
  if (bio.length > profileConfig.BIO_MAX_LENGTH) {
    aboutMe = `${bio.slice(0, profileConfig.BIO_MAX_LENGTH)}...`;
  }

  return (
    <Card gap="small" data-theme-inverted>
      <CardTitle src={aboutIcon} size="small">
        About Me
      </CardTitle>
      <p className="text-paragraph">{aboutMe}</p>
    </Card>
  );
};
