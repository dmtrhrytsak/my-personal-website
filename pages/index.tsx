import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import axios from 'axios';

import ProfileInfo from '../components/profile-info';
import { Skills } from '../components/skills/';
import { Projects } from '../components/projects';

import ScrollTop from '../components/scroll-top';

import { IUserInfo } from '../types/user-info';
import { ISkills } from '../types/skill';
import { IProject } from '../types/project';

type HomeProps = {
  userInfo: IUserInfo;
  skills: ISkills[];
  projects: IProject[];
};

const Home: NextPage<HomeProps> = ({ userInfo, skills, projects }) => {
  const { avatar_url, name, public_repos, followers } = userInfo;

  return (
    <>
      <Head>
        <title>Home | Hrytsak.js</title>
        <meta
          name="description"
          content="Personal website of Software Engineer Dmytro Hrytsak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileInfo
        avatar_url={avatar_url}
        name={name}
        public_repos={public_repos}
        followers={followers}
      />

      <Skills skills={skills} />

      <Projects projects={projects} />
      <ScrollTop />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const BASE_URL =
    process.env.VERCEL_URL === 'http://localhost:3000'
      ? 'http://localhost:3000'
      : `https://${process.env.VERCEL_URL}`;

  const userInfoReq = axios.get<IUserInfo>(
    'https://api.github.com/users/dmtrhrytsak'
  );
  const skillsReq = axios.get<ISkills[]>(`${BASE_URL}/api/skills`);
  const projectsReq = axios.get<IProject[]>(`${BASE_URL}/api/projects`);

  const [userInfo, skills, projects] = await Promise.all([
    userInfoReq,
    skillsReq,
    projectsReq,
  ]);

  return {
    props: {
      userInfo: userInfo.data,
      skills: skills.data,
      projects: projects.data,
    },
  };
};

export default Home;
