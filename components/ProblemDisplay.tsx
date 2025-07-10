import React from 'react';
import { Problem } from '../types/problem';
import { Card, CardContent, Typography, Box, Paper } from '@mui/material';
import { InlineMath, BlockMath } from 'react-katex';

interface Props {
    problem: Problem | null;
}

const MathRenderer: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('$$') && part.endsWith('$$')) {
                    return <BlockMath key={index} math={part.slice(2, -2)} />;
                } else if (part.startsWith('$') && part.endsWith('$')) {
                    return <InlineMath key={index} math={part.slice(1, -1)} />;
                }
                return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
        </>
    );
};

const ProblemDisplay: React.FC<Props> = ({ problem }) => {
    if (!problem) {
        return <Typography>難易度を選択して問題を作成してください。</Typography>;
    }

    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <Typography variant="h4" gutterBottom>{problem.title}</Typography>
                
                <Typography variant="h6">問題文</Typography>
                <Paper variant="outlined" sx={{ p: 2, mb: 2, whiteSpace: 'pre-wrap' }}>
                    <MathRenderer text={problem.statement} />
                </Paper>

                <Typography variant="h6">制約</Typography>
                <Paper variant="outlined" sx={{ p: 2, mb: 2, whiteSpace: 'pre-wrap' }}>
                    <MathRenderer text={problem.constraints} />
                </Paper>

                <Typography variant="h6">入力</Typography>
                <Paper variant="outlined" sx={{ p: 2, mb: 2, whiteSpace: 'pre-wrap' }}>
                    <MathRenderer text={problem.input_format} />
                </Paper>

                <Typography variant="h6">出力</Typography>
                <Paper variant="outlined" sx={{ p: 2, mb: 2, whiteSpace: 'pre-wrap' }}>
                    <MathRenderer text={problem.output_format} />
                </Paper>

                {problem.samples.map((sample, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h6">入出力例 {index + 1}</Typography>
                        <Box display="flex" gap={2}>
                            <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
                                <Typography variant="subtitle2">入力</Typography>
                                <pre><code><MathRenderer text={sample.input} /></code></pre>
                            </Paper>
                            <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
                                <Typography variant="subtitle2">出力</Typography>
                                <pre><code><MathRenderer text={sample.output} /></code></pre>
                            </Paper>
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};

export default ProblemDisplay;