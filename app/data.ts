export interface Passage {
  id: string;
  title: string;
  content: string;
}

export interface Question {
  id: number;
  type?: 'multiple' | 'essay'; // Phân loại câu hỏi
  passageId?: string;
  question: string;
  options?: string[]; // Chỉ dành cho trắc nghiệm
  answer: string;
}

// --- 1. DANH SÁCH BÀI ĐỌC ---
export const passages: Passage[] = [
  {
    id: "ex3",
    title: "Exciting Job Opportunities – Apply Now!",
    content: `Are you looking for a unique career? We are hiring for three extraordinary positions!

1. Pet Food Taster
Have a keen sense of taste? As a pet food taster, you will sample pet food to ensure quality and flavor. This job gives a sense of adventure and curiosity. Competitive (31) ______ offered!

2. Golf Ball Diver
Love swimming? This job requires you to dive into golf course lakes to retrieve lost balls. (32)_______ the challenges, it’s a rewarding role for strong swimmers.

3. Professional Wedding Guest
Enjoy social events? Attend weddings and blend in as a guest to enhance the atmosphere. Unlike (33) ______ jobs, this one is perfect for outgoing individuals.

We offer flexible schedules, including the night (34) ______ for certain roles. The (35) ______ of available positions is limited, so apply today!

If you want to (36) ______ more information, please visit our website at http//jobworld.com.vn`
  },
  {
    id: "ex4",
    title: "Climate Change and Communities",
    content: `Climate change affects everyone on our planet, but different communities experience its impacts in unique ways. (37) _______. This traditional wisdom, which connects deeply with nature, can help us find better solutions to environmental problems. If we had started addressing climate change earlier, many environmental disasters could have been prevented.

The effects of global warming are now visible in many regions around the world, from melting ice caps to increasing droughts and floods. These changes threaten not only ecosystems but also cultural practices tied to specific environments. Many coastal communities (38) ______, and ancient cultural sites are being damaged by extreme weather events.

When diverse communities work together, sharing their unique perspectives and knowledge, innovative climate solutions emerge. Different cultural approaches to agriculture, water conservation, and energy use can inspire new ways of thinking about sustainability. Climate solutions must be culturally appropriate; (39) ______. By combining traditional wisdom with modern science, we create more effective strategies for addressing climate challenges.

Communities around the world are already implementing these multicultural approaches, demonstrating (40) ______. People want immediate action on climate change; however, governments often move slowly on environmental policies. Scientists study climate patterns and develop new technologies, (41) ______.

The path forward requires collaboration across cultures, disciplines, and borders. Only through inclusive dialogue and shared responsibility can we build a sustainable future that honors both human diversity and our common home.`
  },
  {
    id: "ex5",
    title: "Overcoming Challenges: J.K. Rowling & Colonel Sanders",
    content: `Life often presents us with unexpected challenges that force us back to the drawing board. Whether due to personal setbacks, career changes, or unforeseen circumstances, the courage to begin again can lead to remarkable transformations. Many inspiring individuals have shown that it's never too late to reinvent oneself and pursue new dreams. Throughout history, countless people have overcome seemingly impossible situations through sheer determination.

[I] Take J.K. Rowling, for instance. Before becoming a literary sensation, she was a struggling single mother living on welfare. [II] Her determination eventually paid off when her books became a global phenomenon, proving that setbacks can become stepping stones to success. [III] This remarkable turnaround demonstrates how resilience and unwavering belief in oneself can overcome seemingly insurmountable obstacles. Despite facing depression and financial hardship, she never gave up on her dreams. [IV]

Colonel Harland Sanders' story is another testament to the power of starting anew. At the age of 65, when most people contemplate retirement, he found himself struggling financially after his restaurant failed. Instead of giving up, he traveled across America, sleeping in his car while pitching his chicken recipe to restaurant owners. His recipe for success wasn't just about the perfect blend of herbs and spices; it was about persistence and determination. After facing over 1,000 rejections, he finally established Kentucky Fried Chicken, which grew into a global empire. His unwavering spirit and dedication inspired generations of entrepreneurs worldwide.

These inspiring stories remind us that failure is not final, but rather a chance to redirect our path. Every setback carries the seed of an equal or greater opportunity, and sometimes the end of one chapter is simply the beginning of a better one. The key lies in having the courage to take that first step, even when the future seems uncertain. As these remarkable individuals have shown, it's never too late to rewrite your story and create a powerful second act. Their journeys teach us that persistence and courage ultimately lead to success.`
  }
];

// --- 2. DANH SÁCH CÂU HỎI ---
export const questions: Question[] = [
  // --- PART 1: STANDALONE QUESTIONS (1-30) ---
  { "id": 1, "type": "multiple", "question": "Plastic bags ______ very slowly, which poses a threat to the ecosystem.", "options": ["A. release", "B. reuse", "C. decompose", "D. recycle"], "answer": "C. decompose" },
  { "id": 2, "type": "multiple", "question": "The ocean was _____as a result of a recent oil spill.", "options": ["A. sorted", "B. decomposed", "C. recycled", "D. contaminated"], "answer": "D. contaminated" },
  { "id": 3, "type": "multiple", "question": "Many celebrities adopt a green lifestyle, ______helps the environment a lot.", "options": ["A. that", "B. what", "C. whose", "D. which"], "answer": "D. which" },
  { "id": 4, "type": "multiple", "question": "The city plans to _____ its public transportation system next year.", "options": ["A. rely", "B. afford", "C. seek", "D. expand"], "answer": "D. expand" },
  { "id": 5, "type": "multiple", "question": "______ has rapidly transformed those small towns into bustling cities.", "options": ["A. Convenience", "B. Unemployment", "C. Urbanisation", "D. Infrastructure"], "answer": "C. Urbanisation" },
  { "id": 6, "type": "multiple", "question": "Do you want to follow_______ your father's footsteps?", "options": ["A. on", "B. in", "C. at", "D. from"], "answer": "B. in" },
  { "id": 7, "type": "multiple", "question": "Those who have exceptional performance throughout the year will be awarded a year-end ______.", "options": ["A. overtime", "B. bonus", "C. duty", "D. qualification"], "answer": "B. bonus" },
  { "id": 8, "type": "multiple", "question": "Housing is getting ______ in the central areas.", "options": ["A. more and most expensive", "B. the more expensive", "C. more expensive and more expensive", "D. more and more expensive"], "answer": "D. more and more expensive" },
  { "id": 9, "type": "multiple", "question": "Candidates must have necessary_________and at least two years of experience working as a sales representative.", "options": ["A. vacancies", "B. shifts", "C. reviews", "D. qualifications"], "answer": "D. qualifications" },
  { "id": 10, "type": "multiple", "question": "He found a well-paid job ______ he had no formal academic qualifications.", "options": ["A. though", "B. because", "C. unless", "D. if"], "answer": "A. though" },
  { "id": 11, "type": "multiple", "question": "There’s still a ______ for a customer service representative at the car repair shop.", "options": ["A. responsibility", "B. review", "C. wage", "D. vacancy"], "answer": "D. vacancy" },
  { "id": 12, "type": "multiple", "question": "My brother pursued higher education ______ he could get a better job.", "options": ["A. not only", "B. so that", "C. either", "D. even though"], "answer": "B. so that" },
  { "id": 13, "type": "multiple", "question": "Candidates must have necessary ______ and at least two years of experience working as a sales representative.", "options": ["A. vacancies", "B. shifts", "C. reviews", "D. qualifications"], "answer": "D. qualifications" },
  { "id": 14, "type": "multiple", "question": "It was difficult to deliver the letter_______ the sender had written the wrong address on the envelope.", "options": ["A. because", "B. despite", "C. though", "D. because of"], "answer": "A. because" },
  { "id": 15, "type": "multiple", "question": "The well is getting ______ polluted, forcing villagers to seek alternative clean water sources.", "options": ["A. much and more", "B. much and much", "C. most and most", "D. more and more"], "answer": "D. more and more" },
  { "id": 16, "type": "multiple", "question": "Many fresh graduates are struggling to ______ a nine-to-five job.", "options": ["A. expand", "B. seek", "C. afford", "D. modernise"], "answer": "B. seek" },
  { "id": 17, "type": "multiple", "question": "Youth crime in the inner city has increased ______ in recent months, requiring tightened security.", "options": ["A. reliably", "B. affordably", "C. conveniently", "D. rapidly"], "answer": "D. rapidly" },
  { "id": 18, "type": "multiple", "question": "We ______ an online survey to determine young people’s attitudes towards green living.", "options": ["A. turned off", "B. carried out", "C. looked after", "D. applied for"], "answer": "B. carried out" },
  { "id": 19, "type": "multiple", "question": "Many consumers choose to ______ clothing items that are made from animal parts.", "options": ["A. emit", "B. breed", "C. boycott", "D. sort"], "answer": "C. boycott" },
  { "id": 20, "type": "multiple", "question": "Businesses that adopt environmentally-friendly practices are given ______, such as paying less tax.", "options": ["A. layers", "B. leftovers", "C. piles", "D. incentives"], "answer": "D. incentives" },
  { "id": 21, "type": "multiple", "question": "Indicate the best arrangement of utterances: \n a. Mary: That sounds delicious! Could you share the recipe with me? \n b. John: I'm making pancakes. They're super easy to prepare, and they taste amazing \n c. Mary: What are you cooking, John? It smells amazing!", "options": ["A. c-a-b", "B. c-b-a", "C. a-c-b", "D. b-c-a"], "answer": "B. c-b-a" },
  { "id": 22, "type": "multiple", "question": "Indicate the best arrangement of utterances: \n a. Mom: Don’t spend too much time playing video games. You should focus on your studies. \n b. Mom: That’s good. Remember, education comes first. \n c. Son: I understand, Mom. I will only play after finishing my homework.", "options": ["A. a-b-c", "B. b-c-a", "C. a-c-b", "D. b-a-c"], "answer": "C. a-c-b" },
  { "id": 23, "type": "multiple", "question": "Indicate the best arrangement of sentences for the letter to Jane: \n a. Regular physical activity is essential for maintaining good health. \n b. Additionally, it improves mental well-being by reducing stress and anxiety. \n c. First, it not only helps in weight management but boosts our immune system as well. \n d. I was thinking about our conversation on staying fit and wanted to share some thoughts on exercise. \n e. Exercise can also be a fun social activity, whether it's a team sport or a group fitness class.", "options": ["A. d-c-a-b-e", "B. d-c-a-e-b", "C. a-d-c-b-e", "D. d-a-c-b-e"], "answer": "D. d-a-c-b-e" },
  { "id": 24, "type": "multiple", "question": "Indicate the best arrangement of sentences: \n a. These centers provide structured courses with experienced teachers, interactive activities, and access to diverse learning resources. \n b. As a result, students can improve their English skills more effectively compared to self-study. \n c. Studying at an English center offers numerous advantages for learners seeking to enhance their language proficiency. \n d. Furthermore, English centers create an immersive environment where students can practice speaking and listening in real-life situations. \n e. In conclusion, enrolling in an English center is a great way to develop language skills in a systematic and engaging manner.", "options": ["A. c - a - d - b – e", "B. a - d - b - c – e", "C. c - d - a - b – e", "D. d - c - a - b – e"], "answer": "A. c - a - d - b – e" },
  { "id": 25, "type": "multiple", "question": "Indicate the best arrangement of sentences: \n a. Therefore, we recommend that you put the suggested solutions into practice as soon as possible. \n b. Third, we recommend that we make use of plastic waste in arts and crafts projects... \n c. Second, the Youth Union should hold regular sessions to teach students how to recycle properly. \n d. This report suggests three main solutions to the problem of single-use products in our school. \n e. First, we suggest that the school should provide more recycling bins. \n f. Reusing and recycling single-use plastics will lead to a greener school environment...", "options": ["A. d – e – c – f – b – a", "B. d – e – c – b – a – f", "C. d – e – b – c – f – a", "D. d – e – c – b – f – a"], "answer": "D. d – e – c – b – f – a" },
  { "id": 26, "type": "multiple", "question": "Indicate the best arrangement of sentences: \n a. Second, it prevents environmental destruction by promoting sustainable practices... \n b. Making small changes today can lead to a more sustainable and prosperous tomorrow. \n c. Going green offers numerous advantages for both individuals and the planet. \n d. First, it helps reduce our carbon footprint... \n e. Additionally, going green raises awareness... \n f. Finally, embracing eco-friendly habits...", "options": ["A. c-a-d-f-e-b", "B. b-d-a-e-f-c", "C. c-d-a-e-f-b", "D. b-a-d-f-e-c"], "answer": "C. c-d-a-e-f-b" },
  { "id": 27, "type": "multiple", "question": "Indicate the best arrangement of sentences regarding shopping online.", "options": ["A. e—a—c—b—d", "B. c—e—a—b—d", "C. c—a—b—d—e", "D. e—c— a—b—d"], "answer": "A. e—a—c—b—d" },
  { "id": 28, "type": "multiple", "question": "Indicate the best arrangement of sentences for the letter to Laura: \n a. However, the fast pace can be overwhelming at times. \n b. Firstly, the diversity here is astounding... \n c. Looking forward to catching up soon! \n d. Overall, the experience has been enriching... \n e. Secondly, the opportunities for growth and exploration are endless. \n f. Living in a big city has been exciting.", "options": ["A. f - b - a - e - d - c", "B. f - d - b - e - a - c", "C. f - b - e - a - d - c", "D. f - a - b - d - e - c"], "answer": "C. f - b - e - a - d - c" },
  { "id": 29, "type": "multiple", "question": "Indicate the best arrangement of sentences: \n a. Children who learn about diverse traditions... \n b. Although we may speak different languages... \n c. If we want to create lasting peace... \n d. Many conflicts occur because communities don't understand each other's values... \n e. When people from different cultures communicate...", "options": ["A. b-e-d-a-c", "B. e-b-a-d-c", "C. a-d-b-e-c", "D. d-a-b-e-c"], "answer": "D. d-a-b-e-c" },
  { "id": 30, "type": "multiple", "question": "Indicate the best arrangement of sentences: \n a. Finally, it makes our planet a better place to live... \n b. Moreover, by saving the environment, we are protecting our ecosystem... \n c. Also, the effects of climate change can also be reduced greatly. \n d. Firstly, when we protect the environment... \n e. It is important to save the environment... \n f. In conclusion, it is vital to preserve and protect life on Earth.", "options": ["A. e-d-b-c-a-f", "B. e-d-c-b-f-a", "C. e-d-a-f-b-c", "D. e-d-c-a-f-b"], "answer": "A. e-d-b-c-a-f" },

  // --- PART 2: READING PASSAGE EX3 (31-36) ---
  { "id": 31, "type": "multiple", "passageId": "ex3", "question": "Have a keen sense of taste? ... Competitive (31) ______ offered!", "options": ["A. income", "B. wage", "C. pension", "D. welfare"], "answer": "B. wage" },
  { "id": 32, "type": "multiple", "passageId": "ex3", "question": "(32)_______ the challenges, it’s a rewarding role for strong swimmers.", "options": ["A. In addition to", "B. Regardless of", "C. In spite of", "D. With regard to"], "answer": "B. Regardless of" },
  { "id": 33, "type": "multiple", "passageId": "ex3", "question": "Unlike (33) ______ jobs, this one is perfect for outgoing individuals.", "options": ["A. other", "B. another", "C. others", "D. the others"], "answer": "A. other" },
  { "id": 34, "type": "multiple", "passageId": "ex3", "question": "We offer flexible schedules, including the night (34) ______ for certain roles.", "options": ["A. session", "B. number", "C. course", "D. shift"], "answer": "D. shift" },
  { "id": 35, "type": "multiple", "passageId": "ex3", "question": "The (35) ______ of available positions is limited, so apply today!", "options": ["A. amount", "B. number", "C. level", "D. category"], "answer": "B. number" },
  { "id": 36, "type": "multiple", "passageId": "ex3", "question": "If you want to (36) ______ more information, please visit our website...", "options": ["A. take up", "B. go off", "C. look up", "D. turn out"], "answer": "C. look up" },

  // --- PART 3: READING PASSAGE EX4 (37-41) ---
  { "id": 37, "type": "multiple", "passageId": "ex4", "question": "Climate change affects everyone... but different communities experience its impacts in unique ways. (37) ______.", "options": ["A. Indigenous peoples rarely contribute meaningful insights to modern environmental practices.", "B. Indigenous peoples often possess valuable generational knowledge about sustainable living", "C. Indigenous communities typically reject scientific approaches to ecological conservation efforts.", "D. Indigenous knowledge systems focus exclusively on spiritual rather than practical applications."], "answer": "B. Indigenous peoples often possess valuable generational knowledge about sustainable living" },
  { "id": 38, "type": "multiple", "passageId": "ex4", "question": "Many coastal communities (38) ______, and ancient cultural sites are being damaged by extreme weather events.", "options": ["A. which are choosing to migrate despite stable coastlines", "B. that remain unaffected by environmental climate changes", "C. are being forced to relocate due to rising sea levels", "D. having rejected scientific warnings about coastal erosion"], "answer": "C. are being forced to relocate due to rising sea levels" },
  { "id": 39, "type": "multiple", "passageId": "ex4", "question": "Climate solutions must be culturally appropriate; (39) ______. By combining traditional wisdom with modern science...", "options": ["A. moreover, they must respect local traditions and values", "B. however, they should ignore regional customs and beliefs.", "C. therefore, they can dismiss community practices and norms.", "D. nevertheless, they might overlook cultural heritage and ethics."], "answer": "A. moreover, they must respect local traditions and values" },
  { "id": 40, "type": "multiple", "passageId": "ex4", "question": "Communities around the world are already implementing these multicultural approaches, demonstrating (40) ______.", "options": ["A. uniformity improved our approach to ecological challenges", "B. where homogeneity will enhances our defense against natural disasters", "C. scientists discourage from participating in conservation efforts", "D. that diversity strengthens our response to environmental threats"], "answer": "D. that diversity strengthens our response to environmental threats" },
  { "id": 41, "type": "multiple", "passageId": "ex4", "question": "Scientists study climate patterns and develop new technologies, (41) ______.", "options": ["A. ignoring the urgent warnings about climate change", "B. having rejected collaborative approaches to research", "C. prioritizing profit over environmental preservation", "D. hoping to find sustainable solutions for our planet"], "answer": "D. hoping to find sustainable solutions for our planet" },

  // --- PART 4: READING PASSAGE EX5 (42-50) ---
  { "id": 42, "type": "multiple", "passageId": "ex5", "question": "The phrase “back to the drawing board” in paragraph 1 could be best replaced by ______.", "options": ["A. start over", "B. look up", "C. give in", "D. take off"], "answer": "A. start over" },
  { "id": 43, "type": "multiple", "passageId": "ex5", "question": "Where in paragraph 2 does the following sentence best fit? \"Against all odds, she persevered through numerous rejections and continued writing her Harry Potter manuscript in local cafes.\"", "options": ["A. [I]", "B. [II]", "C. [III]", "D. [IV]"], "answer": "B. [II]" },
  { "id": 44, "type": "multiple", "passageId": "ex5", "question": "Based on the passage, which of the following is NOT MENTIONED?", "options": ["A. Some ingredients in Colonel Sanders' famous chicken recipe.", "B. How J.K. Rowling overcame her depression during difficult times.", "C. The number of rejections Colonel Sanders faced before succeeding.", "D. The impact of J.K. Rowling's success on the publishing industry."], "answer": "D. The impact of J.K. Rowling's success on the publishing industry." },
  { "id": 45, "type": "multiple", "passageId": "ex5", "question": "Which of the following best summarises paragraph 3?", "options": ["A. Demonstrates that success can come at any age through persistence, as shown by his journey...", "B. Illustrates that entrepreneurial success at 65 came through unwavering persistence despite 1,000 rejections...", "C. Highlights how protecting a secret recipe and implementing effective franchising strategies...", "D. Shows that innovative marketing strategies and social media presence..."], "answer": "B. Illustrates that entrepreneurial success at 65 came through unwavering persistence despite 1,000 rejections..." },
  { "id": 46, "type": "multiple", "passageId": "ex5", "question": "The word “contemplate” in paragraph 3 is OPPOSITE in meaning to ______.", "options": ["A. consider", "B. ponder", "C. disregard", "D. meditate"], "answer": "C. disregard" },
  { "id": 47, "type": "multiple", "passageId": "ex5", "question": "The word “he” in paragraph 3 refers to ______.", "options": ["A. Colonel Harland Sanders", "B. J.K. Rowling", "C. A restaurant owner", "D. An entrepreneur"], "answer": "A. Colonel Harland Sanders" },
  { "id": 48, "type": "multiple", "passageId": "ex5", "question": "Which of the following best paraphrases the underlined sentence in paragraph 4? (\"Every setback carries the seed of an equal or greater opportunity...\")", "options": ["A. Challenges teach valuable lessons about resilience...", "B. Opportunities emerge through consistent effort...", "C. Difficult situations reveal our true character...", "D. Failures often contain hidden possibilities for success, and what appears to be a conclusion may actually serve as a promising new beginning."], "answer": "D. Failures often contain hidden possibilities for success, and what appears to be a conclusion may actually serve as a promising new beginning." },
  { "id": 49, "type": "multiple", "passageId": "ex5", "question": "Which of the following is TRUE according to the passage?", "options": ["A. Colonel Sanders started Kentucky Fried Chicken in his thirties...", "B. Colonel Sanders faced over 1,000 rejections before finally establishing Kentucky Fried Chicken...", "C. J.K. Rowling wrote her entire Harry Potter manuscript while working as a teacher...", "D. J.K. Rowling experienced immediate success with her first Harry Potter book..."], "answer": "B. Colonel Sanders faced over 1,000 rejections before finally establishing Kentucky Fried Chicken..." },
  { "id": 50, "type": "multiple", "passageId": "ex5", "question": "Which of the following can be inferred from the passage?", "options": ["A. Financial stability is generally a prerequisite for achieving significant entrepreneurial or creative success.", "B. Persistence through multiple rejections is a common element in the success stories presented in the passage.", "C. Age can be an advantage when starting new ventures, as demonstrated by both examples in the passage.", "D. Creative individuals typically experience more setbacks than those who pursue conventional business careers."], "answer": "B. Persistence through multiple rejections is a common element in the success stories presented in the passage." },

  // --- PART 5: WRITING / ESSAY QUESTIONS (51-60) ---
  {
    id: 51,
    type: "essay",
    question: "When the public transport is more reliable, fewer people use private cars. (The more ..., the fewer ...)",
    answer: "The more reliable the public transport is, the fewer people use private cars",
  },
  {
    id: 52,
    type: "essay",
    question: "The bus driver managed to stop safely although the road was slippery. (Despite)",
    answer: "Despite the slippery road, the bus driver managed to stop safely",
  },
  {
    id: 53,
    type: "essay",
    question: "Tom was ill. He couldn’t take part in the final interview with the company director. (so)",
    answer: "Tom was ill, so he couldn’t take part in the final interview with the company director",
  },
  {
    id: 54,
    type: "essay",
    question: "More people live in big cities, so houses become more expensive. (The more ..., the more ...)",
    answer: "The more people live in big cities, the more expensive houses become",
  },
  {
    id: 55,
    type: "essay",
    question: "Although his schedule is so busy, he still spent a day visiting my family. (Despite)",
    answer: "Despite his busy schedule, he still spent a day visiting my family",
  },
  {
    id: 56,
    type: "essay",
    question: "Mary found some information about the company. She can do better in the job interview. (in order to)",
    answer: "Mary found some information about the company in order to do better in the job interview",
  },
  {
    id: 57,
    type: "essay",
    question: "Rearrange: the position/ of/ a marine/ Julie/ for / biologist /applied / organization / in a non-profit / ocean life. /she is / because/ interested in",
    answer: "Julie applied for the position of a marine biologist in a non-profit organization because she is interested in ocean life",
  },
  {
    id: 58,
    type: "essay",
    question: "Rearrange: is / I / of / this rare / This / have taken/ in the wild. / the first time / animal / a photo /",
    answer: "This is the first time I have taken a photo of this rare animal in the wild",
  },
  {
    id: 59,
    type: "essay",
    question: "Rearrange: after/ The beach/ the storm/ full of / was/ rubbish, so/ it up. / volunteers /a group of/ we/ organized/ to clean/",
    answer: "The beach was full of rubbish after the storm, so we organized a group of volunteers to clean it up",
  },
  {
    id: 60,
    type: "essay",
    question: "Rearrange: getting / a / Finding / difficult. / more and more/ in / job / stable / is / the city",
    answer: "Finding a stable job in the city is getting more and more difficult",
  },
];