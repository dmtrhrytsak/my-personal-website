import classNames from 'classnames';

import { ISkills } from '../../types/skill';

type SkillsListProps = {
  skills: ISkills[];
  expended: boolean[];
  handleExpend: (idx: number) => void;
};

const SkillsList: React.FC<SkillsListProps> = ({
  skills,
  expended,
  handleExpend,
}) => {
  return (
    <ul className="space-y-6">
      {skills.map((skill, idx) => {
        const isExpendedSkill = expended[idx];

        return (
          <li key={skill.category} onClick={() => handleExpend(idx)}>
            <span
              className={classNames(
                'flex items-center gap-3 p-6 border-2 border-transparent rounded-md bg-white cursor-pointer before:block before:w-2 before:h-2 before:rounded-sm before:bg-rose-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-gray-400',
                {
                  'mb-3 font-semibold before:bg-green-500 dark:!text-white':
                    isExpendedSkill,
                }
              )}
            >
              {skill.category}
            </span>

            {isExpendedSkill && (
              <ul className="p-10 space-y-1 border-2 border-transparent rounded-md bg-white dark:border-neutral-600 dark:bg-neutral-700">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="before:content-['[X]'] flex gap-2 dark:text-gray-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
