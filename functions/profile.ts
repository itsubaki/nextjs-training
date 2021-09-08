import { Profile } from "models/profile";

export async function getProfile(login: string): Promise<Profile> {
  const profile: Profile = await fetch(
    `https://api.github.com/users/${encodeURI(login)}`
  ).then((res) => {
    return res.json();
  });

  profile.twitter_url = `https://twitter.com/${encodeURI(
    profile.twitter_username
  )}`;

  return profile;
}
