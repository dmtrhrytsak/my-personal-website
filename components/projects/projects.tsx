import { ProjectItem } from '.';
import { Carousel } from '@trendyol-js/react-carousel';
import { IProject } from '../../types/project';

type ProjectsProps = {
  projects: IProject[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="mb-16">
      <p className="mb-4 text-3xl font-bold dark:text-white">Projects</p>

      <Carousel
        show={1}
        slide={1}
        transition={0.8}
        rightArrow={
          <div className="absolute right-6 top-6 flex items-center justify-center h-11 w-11 rounded-full bg-white cursor-pointer hover:underline hover:underline-offset-2 active:underline active:underline-offset-2">
            Next
          </div>
        }
        swipeOn={0.1}
        swiping={true}
        className="relative"
      >
        {projects.map(({ name, technologies, gitHub, preview, color }, idx) => (
          <ProjectItem
            key={gitHub}
            count={idx + 1}
            name={name}
            technologies={technologies}
            gitHub={gitHub}
            preview={preview}
            color={color}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
