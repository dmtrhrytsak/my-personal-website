import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';

import ProfileInfo from '../components/profile-info';
import { Skills } from '../components/skills/';
import { Projects } from '../components/projects';
import ScrollTop from '../components/scroll-top';
import { skills } from '../lib/api/skills';
import { projects } from '../lib/api/projects';

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
  const response = await fetch('https://api.github.com/users/dmtrhrytsak');
  const userInfo: IUserInfo = await response.json();

  return {
    props: {
      userInfo,
      skills,
      projects,
    },
  };
};

export default Home;
