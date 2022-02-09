type SkillsSwitchesProps = {
  handleExpendAll: () => void;
  handleCloseAll: () => void;
};

const SkillsSwitches: React.FC<SkillsSwitchesProps> = ({
  handleExpendAll,
  handleCloseAll,
}) => {
  return (
    <div className="space-x-2">
      <button
        className="text-sm sm:text-base hover:underline hover:underline-offset-2 active:underline active:underline-offset-2 dark:text-gray-400"
        onClick={handleExpendAll}
      >
        Expend All
      </button>
      <button
        className="text-sm sm:text-base hover:underline hover:underline-offset-2 active:underline active:underline-offset-2 dark:text-gray-400"
        onClick={handleCloseAll}
      >
        Close All
      </button>
    </div>
  );
};

export default SkillsSwitches;
