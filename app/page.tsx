"use client";
import { useState, useEffect } from "react";
import { questions, passages } from "./data";
import { 
  CloudUpload, List, CheckCircle2, XCircle, LayoutGrid, RotateCcw, Shuffle, 
  AlignLeft, BookOpen, Edit3, ChevronRight, ChevronLeft, Lightbulb, Check, Home 
} from "lucide-react";

// --- CẤU HÌNH THEME ---
const THEME = {
  bg: "bg-[#141414]",
  card: "bg-[#1c1c1e]",
  textPrimary: "text-[#e4e4e7]",
  textSecondary: "text-[#a1a1aa]",
  accent: "bg-[#fce7b8]",
  accentText: "text-[#4a3e28]",
  highlight: "text-[#fce7b8]",
  border: "border-[#2f2f32]",
};

export default function QuizApp() {
  const [appState, setAppState] = useState<"welcome" | "selection" | "quiz">("welcome");
  const [quizFilter, setQuizFilter] = useState<string>("all");

  // State Quiz
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  // State Tự luận
  const [essayInput, setEssayInput] = useState("");
  const [essayFeedback, setEssayFeedback] = useState<{show: boolean, isCorrect: boolean} | null>(null);

  // --- LOGIC LỌC CÂU HỎI ---
  const filteredQuestions = questions.filter(q => {
      if (quizFilter === 'all') return true;
      if (quizFilter === 'choice') return q.id >= 1 && q.id <= 20;
      if (quizFilter === 'arrange') return q.id >= 21 && q.id <= 30;
      if (quizFilter === 'gap') return q.id >= 31 && q.id <= 41;
      if (quizFilter === 'reading') return q.id >= 42 && q.id <= 50;
      if (quizFilter === 'writing') return q.id >= 51 && q.id <= 60;
      return true;
  });

  const currentQuestion = filteredQuestions[currentQIndex];
  
  const currentPassage = currentQuestion?.passageId 
    ? passages.find((p) => p.id === currentQuestion.passageId) 
    : null;

  const progress = ((currentQIndex + 1) / filteredQuestions.length) * 100;

  useEffect(() => {
    if (!currentQuestion) return;
    if (userAnswers[currentQuestion.id]) {
        setEssayInput(userAnswers[currentQuestion.id]);
        if (currentQuestion.type === 'essay') {
             const isCorrect = normalizeString(userAnswers[currentQuestion.id]) === normalizeString(currentQuestion.answer);
             setEssayFeedback({ show: true, isCorrect });
        }
    } else {
        setEssayInput("");
        setEssayFeedback(null);
    }
  }, [currentQIndex, currentQuestion, userAnswers]);

  // --- ACTIONS ---
  
  // Hàm quay về trang chủ và Reset toàn bộ
  const handleBackToHome = () => {
      setAppState("welcome");
      // Reset toàn bộ state để bắt đầu mới
      setQuizFilter("all");
      setCurrentQIndex(0);
      setScore({ correct: 0, wrong: 0 });
      setUserAnswers({});
      setEssayInput("");
      setEssayFeedback(null);
  };

  const startQuiz = (filterType: string) => {
      setQuizFilter(filterType);
      setCurrentQIndex(0);
      setAppState("quiz");
  };

  const handleSelectAnswer = (option: string) => {
    if (userAnswers[currentQuestion.id]) return; 

    const isCorrect = option === currentQuestion.answer;
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
    setScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: !isCorrect ? prev.wrong + 1 : prev.wrong,
    }));

    if (currentQIndex < filteredQuestions.length - 1) {
        setTimeout(() => setCurrentQIndex((prev) => prev + 1), 1200);
    }
  };

  const handleEssaySubmit = () => {
    if (userAnswers[currentQuestion.id] || !essayInput.trim()) return;

    const normalizedInput = normalizeString(essayInput);
    const normalizedAnswer = normalizeString(currentQuestion.answer);
    const isCorrect = normalizedInput === normalizedAnswer;

    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: essayInput }));
    
    setScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: !isCorrect ? prev.wrong + 1 : prev.wrong,
    }));

    setEssayFeedback({ show: true, isCorrect });
  };

  const normalizeString = (str: string) => str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");

  const handleNext = () => { if (currentQIndex < filteredQuestions.length - 1) setCurrentQIndex(prev => prev + 1); };
  const handlePrev = () => { if (currentQIndex > 0) setCurrentQIndex(prev => prev - 1); };
  const jumpToQuestion = (index: number) => setCurrentQIndex(index);


  // --- VIEW 1: WELCOME ---
  if (appState === "welcome") {
    return (
      <div className={`min-h-screen ${THEME.bg} flex flex-col items-center justify-center font-sans`}>
        <div className="flex flex-col items-center gap-6">
          <CloudUpload size={80} className="text-[#a1a1aa]" />
          <h1 className={`text-4xl font-bold ${THEME.textPrimary}`}>Khởi tạo bài học</h1>
          <button onClick={() => setAppState("selection")} className={`${THEME.accent} ${THEME.accentText} px-8 py-3 rounded-lg font-bold text-lg hover:brightness-90 transition-all flex items-center gap-2`}>
            Bắt đầu làm bài
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW 2: SELECTION ---
  if (appState === "selection") {
     const options = [
        { id: "choice", label: "Trắc nghiệm (1-20)", count: "20 câu", icon: <CheckCircle2 size={18} /> },
        { id: "arrange", label: "Sắp xếp (21-30)", count: "10 câu", icon: <Shuffle size={18} /> },
        { id: "gap", label: "Bài đục lỗ (31-41)", count: "11 câu", icon: <Edit3 size={18} /> },
        { id: "reading", label: "Bài đọc (42-50)", count: "9 câu", icon: <BookOpen size={18} /> },
        { id: "writing", label: "Tự luận (51-60)", count: "10 câu", icon: <AlignLeft size={18} /> },
      ];
  
      return (
        <div className={`min-h-screen ${THEME.bg} p-8 flex flex-col items-center relative`}>
          {/* NÚT HOME - BACK TO WELCOME */}
          <button 
            onClick={handleBackToHome}
            className="absolute top-6 left-6 p-2 rounded-full bg-[#2c2c2e] hover:bg-[#3f3f46] text-[#a1a1aa] hover:text-white transition group"
            title="Quay về trang chủ"
          >
             <Home size={24} />
          </button>

          <div className="flex flex-col items-center gap-4 mb-8 mt-12">
              <List size={48} className={THEME.textSecondary} />
              <h2 className={`text-3xl font-bold ${THEME.textPrimary}`}>Chọn loại câu hỏi</h2>
              <p className={THEME.textSecondary}>Bắt đầu làm bài từ loại câu hỏi nào trước?</p>
          </div>
  
          <div className="w-full max-w-3xl flex flex-col gap-3">
              {options.map((opt) => (
                 <button 
                    key={opt.id} 
                    onClick={() => startQuiz(opt.id)}
                    className={`${THEME.accent} ${THEME.accentText} w-full p-4 rounded-lg font-semibold flex justify-between items-center hover:brightness-95 transition`}
                 >
                    <div className="flex items-center gap-3">{opt.icon} {opt.label}</div>
                    <span className="opacity-70 text-sm">({opt.count})</span>
                 </button> 
              ))}
              <button 
                  onClick={() => startQuiz("all")}
                  className={`bg-[#2c2c2e] text-[#a1a1aa] w-full p-4 rounded-lg font-semibold flex justify-between items-center hover:bg-[#3a3a3c] transition border border-[#3f3f46]`}
              >
                  <div className="flex items-center gap-3"><List size={18}/> Tất cả câu hỏi</div>
                  <span className="opacity-70 text-sm">(60 câu)</span>
              </button>
          </div>
        </div>
      );
  }

  // --- VIEW 3: QUIZ MAIN ---
  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className={`min-h-screen ${THEME.bg} text-white font-sans flex flex-col`}>
      {/* HEADER */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#27272a]">
        <div className="flex items-center gap-4">
          {/* NÚT HOME - BACK TO WELCOME */}
          <button 
            onClick={handleBackToHome}
            className="p-2 rounded-lg hover:bg-[#2c2c2e] text-[#a1a1aa] hover:text-white transition"
            title="Thoát và về trang chủ"
          >
             <Home size={22} />
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            <span className="text-lg font-bold text-white tracking-wide hidden md:block">Quiz | English</span>
          </div>
        </div>

        <div className="flex gap-3">
           <Badge icon={<LayoutGrid size={16}/>} text={`${currentQIndex + 1}/${filteredQuestions.length}`} />
           <Badge icon={<CheckCircle2 size={16}/>} text={`${score.correct}`} color="green" />
           <Badge icon={<XCircle size={16}/>} text={`${score.wrong}`} color="red" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col p-6 overflow-y-auto custom-scrollbar relative">
            <div className="w-full h-1.5 bg-[#27272a] rounded-full mb-8">
                <div className="h-full bg-[#fce7b8] rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>

            <div className={`flex flex-col md:flex-row gap-6 pb-20`}>
                {/* Passage */}
                {currentPassage && (
                    <div className={`md:w-1/2 ${THEME.card} p-6 rounded-xl border ${THEME.border} overflow-y-auto custom-scrollbar h-[500px] md:h-auto`}>
                        <h3 className="text-lg font-bold text-white mb-4">{currentPassage.title}</h3>
                        <div className="text-[#d4d4d8] leading-relaxed text-justify text-sm whitespace-pre-line">{currentPassage.content}</div>
                    </div>
                )}

                {/* QUESTION AREA */}
                <div className={`flex-1 flex flex-col ${currentPassage ? '' : 'max-w-4xl mx-auto w-full'}`}>
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded bg-[#2c2c2e] text-[#a1a1aa] text-xs font-bold uppercase tracking-wider mb-4 border border-[#3f3f46]">
                            {currentQuestion.type === 'essay' ? "Tự luận" : (currentQuestion.passageId ? "Reading Comprehension" : "Trắc nghiệm")}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                            <span className={THEME.highlight}>Question {currentQuestion.id}.</span> {currentQuestion.question}
                        </h2>
                    </div>

                    {currentQuestion.type === 'essay' ? (
                        // TỰ LUẬN UI
                        <div className="flex flex-col gap-4">
                            <textarea
                                value={essayInput}
                                onChange={(e) => setEssayInput(e.target.value)}
                                disabled={!!userAnswers[currentQuestion.id]}
                                placeholder="Nhập câu trả lời của bạn..."
                                className={`w-full h-32 p-4 rounded-xl border-2 bg-transparent text-lg text-white focus:outline-none transition-all
                                    ${essayFeedback 
                                        ? (essayFeedback.isCorrect ? "border-green-600" : "border-red-600") 
                                        : "border-[#3f3f46] focus:border-[#fce7b8]"}
                                `}
                            />
                            <div className={`p-4 rounded-lg flex items-start gap-3 border transition-colors ${essayFeedback ? 'bg-[#27272a] border-[#3f3f46]' : 'bg-[#1c1c1e] border-[#2f2f32]'}`}>
                                {essayFeedback ? (
                                    <>
                                        {essayFeedback.isCorrect ? <CheckCircle2 className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
                                        <div className="text-sm">
                                            <p className={`font-bold mb-1 ${essayFeedback.isCorrect ? "text-green-500" : "text-red-500"}`}>
                                                {essayFeedback.isCorrect ? "Chính xác!" : "Chưa chính xác"}
                                            </p>
                                            <p className="text-[#a1a1aa]">Đáp án đúng: <span className="text-white font-medium">{currentQuestion.answer}</span></p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Lightbulb className="text-[#a1a1aa] shrink-0" size={20} />
                                        <span className="text-[#71717a] text-sm italic">Gợi ý có sẵn sau khi kiểm tra</span>
                                    </>
                                )}
                            </div>
                            {!userAnswers[currentQuestion.id] && (
                                <div className="flex justify-end mt-2">
                                    <button 
                                        onClick={handleEssaySubmit}
                                        disabled={!essayInput.trim()}
                                        className={`${THEME.accent} ${THEME.accentText} px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:brightness-90 transition disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        Kiểm tra <Check size={18} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        // TRẮC NGHIỆM UI
                        <div className="flex flex-col gap-3">
                            {currentQuestion.options?.map((option, idx) => {
                                const optionLabel = ["A", "B", "C", "D"][idx];
                                const isSelected = userAnswers[currentQuestion.id] === option;
                                const isAnswered = !!userAnswers[currentQuestion.id];
                                
                                let containerClass = `group flex items-center p-4 rounded-lg border border-[#27272a] bg-[#1c1c1e] hover:bg-[#27272a] cursor-pointer transition-all`;
                                let labelClass = `w-8 h-8 flex items-center justify-center rounded bg-[#27272a] text-[#a1a1aa] font-bold mr-4 text-sm group-hover:bg-[#3f3f46]`;
                                let textClass = `text-[#e4e4e7] font-medium`;

                                if (isSelected) {
                                    if (option === currentQuestion.answer) {
                                        containerClass = `flex items-center p-4 rounded-lg border border-green-800 bg-[#142819] cursor-default`; 
                                        labelClass = `w-8 h-8 flex items-center justify-center rounded bg-green-600 text-white font-bold mr-4 text-sm`;
                                        textClass = `text-green-400 font-medium`;
                                    } else {
                                        containerClass = `flex items-center p-4 rounded-lg border border-red-900 bg-[#291415] cursor-default`; 
                                        labelClass = `w-8 h-8 flex items-center justify-center rounded bg-red-600 text-white font-bold mr-4 text-sm`;
                                        textClass = `text-red-400 font-medium`;
                                    }
                                } else if (isAnswered && option === currentQuestion.answer) {
                                    containerClass = `flex items-center p-4 rounded-lg border border-green-800 bg-[#1c1c1e] opacity-70 cursor-default`;
                                    labelClass = `w-8 h-8 flex items-center justify-center rounded bg-green-900 text-green-400 font-bold mr-4 text-sm`;
                                    textClass = `text-green-500 font-medium`;
                                }

                                return (
                                    <div key={idx} onClick={() => handleSelectAnswer(option)} className={containerClass}>
                                        <div className={labelClass}>{optionLabel}</div>
                                        <span className={textClass}>{option.replace(/^[A-D]\.\s/, '')}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute bottom-6 right-6 flex gap-2">
                <button onClick={handlePrev} disabled={currentQIndex === 0} className="p-3 rounded-full bg-[#27272a] hover:bg-[#3f3f46] disabled:opacity-30 disabled:cursor-not-allowed transition">
                    <ChevronLeft size={24} color="white" />
                </button>
                <button onClick={handleNext} disabled={currentQIndex === filteredQuestions.length - 1} className="p-3 rounded-full bg-[#fce7b8] hover:brightness-90 disabled:opacity-30 disabled:cursor-not-allowed transition">
                    <ChevronRight size={24} className="text-[#4a3e28]" />
                </button>
            </div>
        </div>

        {/* SIDEBAR */}
        <div className={`w-80 border-l border-[#27272a] ${THEME.card} p-6 flex flex-col hidden xl:flex`}>
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white">Danh sách câu hỏi</h3>
                <div className="flex gap-2 text-[#71717a]">
                    <Shuffle size={16} className="cursor-pointer hover:text-white" />
                    <RotateCcw size={16} className="cursor-pointer hover:text-white" />
                </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mb-8 overflow-y-auto max-h-[60vh] custom-scrollbar pr-1">
                {filteredQuestions.map((q, idx) => {
                    let status = 'pending';
                    if (currentQIndex === idx) status = 'current';
                    else if (userAnswers[q.id]) {
                        const userAnswer = normalizeString(userAnswers[q.id]);
                        const correctAnswer = normalizeString(q.answer);
                        status = userAnswer === correctAnswer ? 'correct' : 'wrong';
                    }

                    let btnClass = "h-10 rounded text-sm font-medium transition-colors ";
                    if (status === 'current') btnClass += "border-2 border-[#fce7b8] text-white";
                    else if (status === 'correct') btnClass += "bg-[#1f3a23] text-green-400";
                    else if (status === 'wrong') btnClass += "bg-[#3a1f1f] text-red-400";
                    else btnClass += "bg-[#27272a] text-[#a1a1aa] hover:bg-[#3f3f46]";

                    return (
                        <button key={idx} onClick={() => jumpToQuestion(idx)} className={btnClass}>
                            {q.id}
                        </button>
                    );
                })}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-y-3 text-xs text-[#a1a1aa]">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-[#fce7b8]"></div> Đang làm</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#27272a]"></div> Chưa làm</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Đúng</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Sai</div>
            </div>
        </div>
      </div>
    </div>
  );
}

const Badge = ({ icon, text, color = "gray" }: { icon: any, text: string, color?: "gray" | "green" | "red" }) => {
    let bg = "bg-[#27272a]";
    let textCol = "text-white";
    if (color === "green") { bg = "bg-[#142819]"; textCol = "text-green-500"; }
    if (color === "red") { bg = "bg-[#291415]"; textCol = "text-red-500"; }
    return (
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${bg} border border-white/5`}>
            <span className={textCol}>{icon}</span>
            <span className={`text-sm font-bold ${textCol}`}>{text}</span>
        </div>
    );
};