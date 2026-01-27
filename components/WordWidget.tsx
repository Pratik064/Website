import React, { useState } from 'react';

interface WordData {
  text: string;
  meaning: string;
}

const WordWidget: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [words, setWords] = useState<WordData[]>([]);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    if (!inputValue.trim()) return;

    setIsLoading(true);
    
    // Simulating API call/Generation delay
    setTimeout(() => {
      const mockWords = [
        { text: "Luminous", meaning: "Full of or shedding light; bright or shining, especially in the dark." },
        { text: "Ethereal", meaning: "Extremely delicate and light in a way that seems too perfect for this world." },
        { text: "Serendipity", meaning: "The occurrence and development of events by chance in a happy or beneficial way." },
        { text: "Petrichor", meaning: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather." },
        { text: "Ephemeral", meaning: "Lasting for a very short time; short-lived; transitory." },
        { text: "Vibrant", meaning: "Full of energy and enthusiasm; bright and striking." },
        { text: "Resilience", meaning: "The capacity to withstand or to recover quickly from difficulties; toughness." },
        { text: "Wanderlust", meaning: "A strong desire to travel and explore the world." },
        { text: "Solitude", meaning: "The state or situation of being alone, often valued as a peaceful time." },
        { text: "Aurora", meaning: "A natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light." },
        { text: "Mellifluous", meaning: "(of a voice or words) sweet or musical; pleasant to hear." },
        { text: "Ineffable", meaning: "Too great or extreme to be expressed or described in words." }
      ];
      setWords(mockWords);
      setIsExpanded(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`glass transition-all duration-500 ease-in-out mx-auto ${isExpanded ? 'max-w-4xl p-10' : 'max-w-2xl p-6'} rounded-[2rem]`}>
      <div className="relative flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Explore words...."
            className="w-full bg-white/50 border-2 border-[#FF4000] focus:border-[#FF4000] rounded-xl px-6 py-4 pr-4 outline-none text-lg font-bold text-black placeholder:text-black/30 transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleGenerate}
            disabled={isLoading || !inputValue.trim()}
            className="bg-[#FF4000] text-white w-14 h-14 flex items-center justify-center rounded-xl hover:bg-[#FF4000]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>

          <button className="bg-[#FF4000] text-white w-14 h-14 flex items-center justify-center rounded-xl hover:bg-[#FF4000]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          <button className="bg-[#FF4000] text-white w-14 h-14 flex items-center justify-center rounded-xl hover:bg-[#FF4000]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExpanded ? 'mt-10 max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {words.map((word, index) => (
          <div
            key={index}
            onClick={() => setSelectedWordIndex(selectedWordIndex === index ? null : index)}
            className={`group relative p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl text-center border border-white/20 cursor-pointer flex items-center justify-center min-h-[120px]
              ${selectedWordIndex === index ? 'bg-[#FF4000] text-white' : 'bg-white/40 hover:bg-[#FF4000] hover:text-white text-black/80'}
            `}
          >
            {selectedWordIndex === index ? (
              <p className="text-sm font-medium leading-relaxed animate-in fade-in duration-300">{word.meaning}</p>
            ) : (
              <span className="text-xl font-black group-hover:text-white transition-colors">{word.text}</span>
            )}
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(word.text); }}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95"
            >
              <span className="text-[10px] font-black text-white bg-black/20 px-2 py-1 rounded">COPY</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordWidget;