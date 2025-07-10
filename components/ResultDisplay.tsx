
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

interface Props {
    result: string | null;
    detailedResults: any[];
}

const ResultDisplay: React.FC<Props> = ({ result, detailedResults }) => {
    if (!result && detailedResults.length === 0) return null;

    const getStatusColor = (status: string) => {
        if (status.startsWith('AC')) return '#4caf50'; // Green
        if (status.startsWith('WA')) return '#f44336'; // Red
        if (status === 'Running...') return '#2196f3'; // Blue
        return '#ff9800'; // Orange for others (TLE, RE, etc.)
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h6">判定結果</Typography>
            {result && (
                <Paper variant="outlined" sx={{ p: 2, backgroundColor: getStatusColor(result), color: 'white', mb: 2 }}>
                    <Typography variant="h5" component="pre">{result}</Typography>
                </Paper>
            )}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {detailedResults.map((caseResult, index) => (
                    <Paper key={index} variant="outlined" sx={{ p: 2, flexGrow: 1, minWidth: '150px' }}>
                        <Typography variant="subtitle1">Case {caseResult.case}</Typography>
                        <Typography sx={{ color: getStatusColor(caseResult.status), fontWeight: 'bold' }}>
                            {caseResult.status}
                        </Typography>
                        {caseResult.judgeResult && (
                            <Typography variant="caption">
                                Time: {caseResult.judgeResult.time}s, Memory: {caseResult.judgeResult.memory}KB
                            </Typography>
                        )}
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default ResultDisplay;
