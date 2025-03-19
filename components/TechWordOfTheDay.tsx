import { useTechWordOfTheDay } from "@/hooks/useTechWordOfTheDay";

export default function TechWordOfTheDay() {
  const { techWordOfTheDay, loading, error } = useTechWordOfTheDay();

  if (loading) {
    return (
      <div className="text-lg text-white animate-spin">
        <img src="/assets/icons/loading.svg" alt="Loading" />
      </div>
    );
  }

  if (error) {
    return <div className="text-lg text-red-500">{error}</div>;
  }

  if (!techWordOfTheDay) {
    return (
      <div className="text-lg text-white">No tech word of the day found.</div>
    );
  }

  return (
    <div className="max-w-screen-sm w-full overflow-hidden">
      <h2 className="sm:text-3xl text-2xl text-white text-center mb-8 italic">
        {techWordOfTheDay.word}
      </h2>
      <p className="text-white">{techWordOfTheDay.definition}</p>
      <p className="text-[#999] text-xs mx-auto mt-10">
        📝 Selected from the{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://techbook.digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          techbook.digital
        </a>{" "}
        database.
      </p>
      <p className="text-[#999] text-xs mx-auto">
        💡 Inspired by{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://www.merriam-webster.com/word-of-the-day"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merriam-Webster&apos;s Word of the Day
        </a>
        .
      </p>
    </div>
  );
}
