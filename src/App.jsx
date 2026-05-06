import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, Stack, AppBar, Toolbar, IconButton, LinearProgress, Chip, Fade, Zoom } from '@mui/material';
import { EmojiEvents, School, StarRounded, AutoAwesome, CheckCircle, Cancel, NavigateNext } from '@mui/icons-material';
import rawText from './test.md?raw';

// --- Логика Парсера ---
const parseTest = (text) => {
  const answersStartIndex = text.indexOf('--- ОТВЕТЫ НА ВОПРОСЫ');
  const questionsPart = text.slice(0, answersStartIndex > -1 ? answersStartIndex : text.length);
  const answersPart = answersStartIndex > -1 ? text.slice(answersStartIndex) : '';

  const answersMap = {};
  const answerRegex = /^(\d+)\.\s*(?:([а-я])\))?\s*(.+)/gm;
  let answerMatch;
  while ((answerMatch = answerRegex.exec(answersPart)) !== null) {
    answersMap[answerMatch[1]] = { 
      letter: answerMatch[2] ? answerMatch[2].toLowerCase() : null, 
      text: answerMatch[3].trim() 
    };
  }

  const questions = [];
  const questionBlocks = questionsPart.split(/^(\d+)(?:\.|\\|\s)*/gm);
  
  for (let i = 1; i < questionBlocks.length; i += 2) {
    const id = questionBlocks[i];
    const block = questionBlocks[i + 1];
    if (!block) continue;

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    const options = [];
    const questionLines = [];
    
    const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ж'];
    let varIndex = 0;

    for (let j = 0; j < lines.length; j++) {
      const optMatch = lines[j].match(/^([а-я])\)\s*(.+)/i);
      const varMatch = lines[j].match(/^(?:\\?<variant\\?>|<variant>)\s*(.+)/i);
      
      if (optMatch) {
        options.push({ letter: optMatch[1].toLowerCase(), text: optMatch[2] });
        varIndex++;
      } else if (varMatch) {
        options.push({ letter: alphabet[varIndex], text: varMatch[1] });
        varIndex++;
      } else {
        questionLines.push(lines[j]);
      }
    }

    const ans = answersMap[id];
    let correctLetter = null;
    
    if (ans) {
      if (ans.letter) {
        correctLetter = ans.letter;
      } else {
        const matchedOpt = options.find(o => o.text === ans.text);
        if (matchedOpt) {
          correctLetter = matchedOpt.letter;
        }
      }
    }

    questions.push({
      id: parseInt(id, 10),
      question: questionLines.join(' '),
      options: options,
      correctAnswer: correctLetter
    });
  }
  return questions;
};

// --- Криптографически стойкий алгоритм Fisher-Yates ---
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    // Получаем высококачественное случайное число через Crypto API
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomFloat = randomBuffer[0] / (0xffffffff + 1);
    
    const j = Math.floor(randomFloat * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// --- UI Компонент ---
export default function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Достижения и статистика
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (rawText) {
      setAllQuestions(parseTest(rawText));
    }
  }, []);

  const startTest = (selectedMode) => {
    let selected = [...allQuestions];
    
    if (selectedMode === 'exam') {
      selected = shuffleArray(selected).slice(0, 30);
    }
    
    selected = selected.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setActiveQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setMode(selectedMode);
  };

  const handleAnswerClick = (letter) => {
    if (isAnswered) return;
    setSelectedAnswer(letter);
    setIsAnswered(true);
    
    const isCorrect = letter === activeQuestions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
      setStreak(s => {
        const newStreak = s + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
      });
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    setIsAnswered(false);
    setSelectedAnswer(null);
  };

  const progress = mode ? (currentIndex / activeQuestions.length) * 100 : 0;

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <School color="primary" />
            <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
              PhiloTest Pro
            </Typography>
          </Box>
          {mode && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip 
                icon={<StarRounded sx={{ color: '#fbbf24 !important' }} />} 
                label={`Счет: ${score}`} 
                variant="outlined" 
                sx={{ fontWeight: 'bold', borderColor: 'primary.light', bgcolor: 'primary.50' }}
              />
              <Chip 
                icon={<AutoAwesome sx={{ color: '#f43f5e !important' }} />} 
                label={`Серия: ${streak}`} 
                variant="outlined" 
                sx={{ fontWeight: 'bold', borderColor: 'secondary.light', bgcolor: 'secondary.50' }}
              />
            </Box>
          )}
        </Toolbar>
        {mode && <LinearProgress variant="determinate" value={progress} color="primary" />}
      </AppBar>

      <Box sx={{ flex: 1, py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {!mode ? (
          <Zoom in={true}>
            <Card sx={{ maxWidth: 600, width: '100%', p: 4, textAlign: 'center', borderRadius: 4 }}>
              <EmojiEvents sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom fontWeight="800" color="text.primary">
                Добро пожаловать
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                Выберите режим прохождения теста. Экзамен проверит ваши знания на 30 случайных вопросах, а свободный режим позволит пройти все {allQuestions.length}.
              </Typography>
              <Stack spacing={2}>
                <Button variant="contained" size="large" onClick={() => startTest('exam')}>
                  Начать Экзамен (30 вопросов)
                </Button>
                <Button variant="outlined" size="large" onClick={() => startTest('free')}>
                  Свободный режим
                </Button>
              </Stack>
            </Card>
          </Zoom>
        ) : currentIndex >= activeQuestions.length ? (
          <Fade in={true}>
            <Card sx={{ maxWidth: 600, width: '100%', p: 5, textAlign: 'center', borderRadius: 4 }}>
              <EmojiEvents sx={{ fontSize: 100, color: '#fbbf24', mb: 2 }} />
              <Typography variant="h4" gutterBottom fontWeight="800">
                Отличная работа!
              </Typography>
              <Typography variant="h6" color="text.secondary" mb={4}>
                Вы ответили правильно на {score} из {activeQuestions.length} вопросов.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mb: 5 }}>
                <Chip 
                  icon={<AutoAwesome />} 
                  label={`Максимальная серия: ${maxStreak}`} 
                  color="secondary" 
                  sx={{ py: 2.5, px: 1, fontSize: '1rem', borderRadius: 4 }} 
                />
                <Chip 
                  icon={<StarRounded />} 
                  label={`Успешность: ${Math.round((score/activeQuestions.length)*100)}%`} 
                  color="primary" 
                  sx={{ py: 2.5, px: 1, fontSize: '1rem', borderRadius: 4 }} 
                />
              </Box>
              <Button variant="contained" size="large" sx={{ py: 1.5, px: 6, borderRadius: 8, fontSize: '1.1rem' }} onClick={() => setMode(null)}>
                На главную
              </Button>
            </Card>
          </Fade>
        ) : (
          <Fade in={true} key={currentIndex}>
            <Box sx={{ maxWidth: 800, width: '100%' }}>
              <Typography variant="subtitle1" gutterBottom color="primary" fontWeight="700" sx={{ mb: 2 }}>
                ВОПРОС {currentIndex + 1} / {activeQuestions.length}
              </Typography>
              
              <Card sx={{ mb: 4, p: 2, borderRadius: 4, backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.5 }}>
                    {activeQuestions[currentIndex].question}
                  </Typography>
                </CardContent>
              </Card>

              <Stack spacing={2}>
                {activeQuestions[currentIndex].options.map((opt) => {
                  const isCorrect = opt.letter === activeQuestions[currentIndex].correctAnswer;
                  const isSelected = opt.letter === selectedAnswer;
                  
                  let bgColor = 'background.paper';
                  let textColor = 'text.primary';
                  let borderColor = 'grey.300';
                  let opacity = 1;
                  let Icon = null;

                  if (isAnswered) {
                    if (isCorrect) {
                      bgColor = '#ecfdf5'; // emerald-50
                      textColor = '#065f46'; // emerald-800
                      borderColor = '#10b981'; // emerald-500
                      Icon = <CheckCircle sx={{ color: '#10b981' }} />;
                    } else if (isSelected) {
                      bgColor = '#fef2f2'; // red-50
                      textColor = '#991b1b'; // red-800
                      borderColor = '#ef4444'; // red-500
                      Icon = <Cancel sx={{ color: '#ef4444' }} />;
                    } else {
                      opacity = 0.5;
                    }
                  }

                  return (
                    <Button
                      key={opt.letter}
                      variant="outlined"
                      fullWidth
                      onClick={() => handleAnswerClick(opt.letter)}
                      endIcon={Icon}
                      sx={{
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        textTransform: 'none',
                        p: 2.5,
                        borderRadius: 3,
                        borderWidth: isAnswered && (isCorrect || isSelected) ? 2 : 1,
                        backgroundColor: bgColor,
                        color: textColor,
                        borderColor: borderColor,
                        opacity: opacity,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: isAnswered ? bgColor : '#f8fafc',
                          borderColor: isAnswered ? borderColor : 'primary.main',
                          transform: isAnswered ? 'none' : 'translateY(-2px)',
                        }
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        <Typography component="span" sx={{ fontWeight: 700, mr: 1, color: 'text.secondary' }}>
                          {opt.letter})
                        </Typography> 
                        {opt.text}
                      </Typography>
                    </Button>
                  );
                })}
              </Stack>

              {isAnswered && (
                <Zoom in={isAnswered}>
                  <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                      variant="contained" 
                      size="large" 
                      onClick={handleNext}
                      endIcon={<NavigateNext />}
                      sx={{ borderRadius: 8, px: 4, py: 1.5, fontSize: '1.1rem' }}
                    >
                      {currentIndex === activeQuestions.length - 1 ? 'Завершить' : 'Следующий вопрос'}
                    </Button>
                  </Box>
                </Zoom>
              )}
            </Box>
          </Fade>
        )}
      </Box>
    </>
  );
}
