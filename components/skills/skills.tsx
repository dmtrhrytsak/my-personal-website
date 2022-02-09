import { useReducer } from 'react';

import { SkillsList, SkillsSwitches } from '.';

import { ISkills } from '../../types/skill';

type SkillsAction =
  | { type: 'TOGGLE'; payload: { idx: number } }
  | { type: 'EXPEND_ALL' | 'CLOSE_ALL' };

function init(skills: ISkills[] | boolean[], active = false) {
  return Array(skills.length).fill(active);
}

function skillsReducer(state: boolean[], action: SkillsAction) {
  switch (action.type) {
    case 'TOGGLE': {
      const { idx } = action.payload;

      const expended = [...state];
      expended[idx] = !expended[idx];

      return expended;
    }

    case 'EXPEND_ALL':
      return init(state, true);

    case 'CLOSE_ALL':
      return init(state);

    default:
      return state;
  }
}

type SkillsProps = {
  skills: ISkills[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [expended, dispatch] = useReducer(skillsReducer, skills, init);

  const handleExpend = (idx: number) => {
    dispatch({ type: 'TOGGLE', payload: { idx } });
  };

  const handleExpendAll = () => {
    dispatch({ type: 'EXPEND_ALL' });
  };

  const handleCloseAll = () => {
    dispatch({ type: 'CLOSE_ALL' });
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl font-bold dark:text-white">Skills</span>

        <SkillsSwitches
          handleExpendAll={handleExpendAll}
          handleCloseAll={handleCloseAll}
        />
      </div>

      <SkillsList
        skills={skills}
        expended={expended}
        handleExpend={handleExpend}
      />
    </section>
  );
};

export default Skills;
