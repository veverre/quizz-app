import { QuizOption } from '@/components/molecules';
export default function QuizQuestion({
  question,
  options,
  selectedOption,
  onOptionSelect,
}: {
  question: string;
  options: string[];
  selectedOption: string | null;
  onOptionSelect: (option: string) => void;
}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-black">{question}</h2>
      <div className="space-y-2">
        {options.map(option => (
          <QuizOption
            option={option}
            isSelected={selectedOption === option}
            key={option}
            onClick={() => onOptionSelect(option)}
          ></QuizOption>
        ))}
      </div>
    </div>
  );
}
