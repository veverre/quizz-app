export default function QuizOption({
  option,
  isSelected,
  onClick,
}: {
  option: string;
  isSelected: boolean;
  onClick: (option: string) => void;
}) {
  return (
    <button
      className={`w-full text-left p-4 rounded-lg transition-colors ${
        isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'
      }`}
      onClick={() => onClick(option)}
    >
      {option}
    </button>
  );
}
