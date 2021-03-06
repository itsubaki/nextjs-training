import Link from "next/link";
import Image from "next/image";
import { Profile as ProfileIF } from "models/profile";
import style from "styles/profile/profile.module.css";

export function Profile({ profile }: { profile: ProfileIF }) {
  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.image}>
          <Image
            className={style.circle}
            priority
            src="/images/profile.png"
            width={280}
            height={280}
            alt={profile.login}
          />
        </div>

        <div>
          <Link href={profile.html_url}>
            <a className={style.link}>
              <h2 className={style.login}>{profile.login}</h2>
            </a>
          </Link>
        </div>
      </div>

      <div>
        <Metadata profile={profile} />
      </div>
    </div>
  );
}

function Metadata({ profile }: { profile: ProfileIF }) {
  return (
    <>
      <p>
        {"βΊοΈ"} {profile.followers} followers. {profile.following} following.{" "}
        {"β"} {"119"}
      </p>
      <div className={style.vcard}>
        <p>
          {"π "} {profile.location}
        </p>
        <p>
          {"π"}{" "}
          <a href={profile.twitter_url} className={style.link}>
            {"@"}
            {profile.twitter_username}
          </a>
        </p>
      </div>
    </>
  );
}
