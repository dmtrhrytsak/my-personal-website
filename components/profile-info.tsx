import Image from 'next/image';

import { IUserInfo } from '../types/user-info';

type ProfileInfoProps = {} & IUserInfo;

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  avatar_url,
  name,
  public_repos,
  followers,
}) => {
  return (
    <article className="p-10 mb-16 border-2 border-transparent rounded-md bg-white text-center dark:border-neutral-600 dark:bg-neutral-700">
      <div className="relative mx-auto mb-4 w-48 h-48 border-2 border-transparent dark:border-neutral-600 rounded-md overflow-hidden">
        <Image src={avatar_url} layout="fill" alt="Software Engineer" />
      </div>

      <div>
        <p className="text-2xl dark:text-white">{name}</p>
        <p className="mb-8 text-sm text-gray-400">Software Engineer</p>

        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <span
              title="Repositories"
              className="inline-block py-1 px-6 rounded-md bg-gray-200 text-lg"
            >
              {public_repos}
            </span>
            <span className="mb-2 text-lg text-gray-400">Repositories</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span
              title="Followers"
              className="inline-block py-1 px-6 rounded-md bg-gray-200 text-lg"
            >
              {followers}
            </span>
            <span className="mb-2 text-lg text-gray-400">Followers</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileInfo;
