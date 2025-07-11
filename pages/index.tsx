
import React, { useState } from 'react';
import { Problem } from '../types/problem';
import { generateProblem, submitCode, Judge0Result } from '../utils/api';
import ProblemDisplay from '../components/ProblemDisplay';
import CodeEditor from '../components/CodeEditor';
import ResultDisplay from '../components/ResultDisplay';
import SolutionDisplay from '../components/SolutionDisplay';
import { Container, Typography, Select, MenuItem, Button, Box, CircularProgress, AppBar, Toolbar, FormControl, InputLabel, TextField } from '@mui/material';

const HomePage: React.FC = () => {
    const [difficulty, setDifficulty] = useState<string>('A');
    const [genre, setGenre] = useState<string>('');
    const [problem, setProblem] = useState<Problem | null>(null);
    const [language, setLanguage] = useState<string>('python');
    const [code, setCode] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
    const [detailedResults, setDetailedResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleGenerateProblem = async () => {
        setIsLoading(true);
        setProblem(null);
        setResult(null);
        try {
            const newProblem = await generateProblem(difficulty, genre);
            setProblem(newProblem);
            setCode(newProblem.solution_code); // Pre-fill editor with solution for convenience
        } catch (error) {
            console.error("Failed to generate problem:", error);
            // You could set an error state here to show in the UI
        }
        setIsLoading(false);
    };

    const handleSubmitCode = async () => {
        if (!problem) return;

        setIsSubmitting(true);
        setResult(null);
        setDetailedResults([]);

        const results: any[] = [];
        let finalVerdict = "AC (Accepted)";

        for (let i = 0; i < problem.samples.length; i++) {
            const sample = problem.samples[i];
            const caseResult: any = { case: i + 1, status: 'Running...' };
            results.push(caseResult);
            setDetailedResults([...results]);

            try {
                const judgeResult = await submitCode(language, code, sample.input);
                caseResult.judgeResult = judgeResult;

                if (judgeResult.status.id === 3) { // Accepted
                    // Trim whitespace and newlines for comparison
                    const userOutput = (judgeResult.stdout || '').trim();
                    const expectedOutput = sample.output.trim();
                    if (userOutput === expectedOutput) {
                        caseResult.status = 'AC';
                    } else {
                        caseResult.status = 'WA';
                        finalVerdict = "WA (Wrong Answer)";
                    }
                } else {
                    caseResult.status = judgeResult.status.description;
                    finalVerdict = judgeResult.status.description;
                }

            } catch (error: any) {
                caseResult.status = error.message || 'Submission Failed';
                finalVerdict = "Submission Error";
            }
            
            setDetailedResults([...results]);

            // Stop on the first non-AC result
            if (finalVerdict !== "AC (Accepted)") {
                break;
            }

            // Add a delay to avoid hitting API rate limits
            if (i < problem.samples.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
            }
        }

        setResult(finalVerdict);
        setIsSubmitting(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AI競技プログラミング練習サイト
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel>難易度</InputLabel>
                        <Select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            label="難易度"
                        >
                            {['A', 'B', 'C', 'D', 'E'].map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        label="問題のジャンル (任意)"
                        variant="outlined"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        sx={{ minWidth: 200 }}
                    />
                    <Button variant="contained" onClick={handleGenerateProblem} disabled={isLoading}>
                        {isLoading ? <CircularProgress size={24} /> : '問題生成'}
                    </Button>
                </Box>

                {isLoading && <Typography>問題を生成中...</Typography>}

                {problem && (
                    <>
                        <ProblemDisplay problem={problem} />
                        <CodeEditor language={language} setLanguage={setLanguage} code={code} setCode={setCode} />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={handleSubmitCode} 
                            disabled={isSubmitting || !code.trim()}
                            sx={{ mt: 2 }}
                        >
                            {isSubmitting ? <CircularProgress size={24} /> : '提出'}
                        </Button>
                        <ResultDisplay result={result} detailedResults={detailedResults} />
                        <SolutionDisplay problem={problem} />
                    </>
                )}
            </Container>
        </Box>
    );
};

export default HomePage;
