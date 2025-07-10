
import React, { useState } from 'react';
import { Problem } from '../types/problem';
import { Card, CardContent, Typography, Button, Collapse, Box } from '@mui/material';
import Editor from '@monaco-editor/react';

interface Props {
    problem: Problem | null;
}

const SolutionDisplay: React.FC<Props> = ({ problem }) => {
    const [showSolution, setShowSolution] = useState(false);

    if (!problem) return null;

    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <Typography variant="h6">解説</Typography>
                <Typography sx={{ whiteSpace: 'pre-wrap' }}>{problem.explanation}</Typography>
                
                <Box sx={{ mt: 2 }}>
                    <Button variant="contained" onClick={() => setShowSolution(!showSolution)}>
                        {showSolution ? '解答を隠す' : '解答を表示'}
                    </Button>
                    <Collapse in={showSolution}>
                        <Box sx={{ mt: 2 }}>
                            <Editor
                                height="40vh"
                                language="python" // Assuming solution is always Python as per spec
                                value={problem.solution_code}
                                options={{ readOnly: true }}
                                theme="vs-dark"
                            />
                        </Box>
                    </Collapse>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SolutionDisplay;
