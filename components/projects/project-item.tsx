import { IProject } from '../../types/project';

const colors = [
  'bg-indigo-500',
  'bg-violet-500',
  'bg-rose-500',
  'bg-fuchsia-500',
  'bg-blue-500',
  'bg-lime-500',
];

type ProjectItemProps = {
  count: number;
} & IProject;

const ProjectItem: React.FC<ProjectItemProps> = ({
  count,
  name,
  technologies,
  gitHub,
  preview,
}) => {
  return (
    <article>
      <div
        className={`block p-24 mb-3 rounded-md ${
          colors[count % colors.length]
        } text-center text-2xl text-white md:p-32 lg:p-40`}
      >
        Project {count + 1}
      </div>

      <div className="mb-6">
        <h3 className=" dark:text-gray-400">
          <span className="text-lg font-semibold dark:text-white dark:font-normal">
            Project Name:
          </span>{' '}
          {name}
        </h3>

        <div className="flex gap-2">
          <p className=" dark:text-gray-400">
            <span className="text-lg font-semibold dark:text-white dark:font-normal">
              Preview:
            </span>{' '}
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:underline-offset-2 active:underline active:underline-offset-2"
            >
              {'<Link>'}
            </a>
          </p>

          <p className=" dark:text-gray-400">
            <span className="text-lg font-semibold dark:text-white dark:font-normal">
              GitHub:
            </span>{' '}
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:underline-offset-2 active:underline active:underline-offset-2"
            >
              {'<Link>'}
            </a>
          </p>
        </div>
      </div>

      <div>
        <p className="mb-3 text-lg font-semibold text-center dark:text-white">
          Technologies
        </p>
        <ul className="flex gap-2 flex-wrap">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="py-1 px-2 rounded-sm bg-blue-500 text-white"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectItem;
