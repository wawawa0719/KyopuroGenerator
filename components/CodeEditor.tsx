
import React from 'react';
import Editor from '@monaco-editor/react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

interface Props {
    language: string;
    setLanguage: (language: string) => void;
    code: string;
    setCode: (code: string) => void;
}

const CodeEditor: React.FC<Props> = ({ language, setLanguage, code, setCode }) => {
    return (
        <Box sx={{ mt: 2 }}>
            <FormControl sx={{ mb: 1, minWidth: 120 }}>
                <InputLabel>Language</InputLabel>
                <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    label="Language"
                >
                    <MenuItem value="python">Python</MenuItem>
                    <MenuItem value="cpp">C++</MenuItem>
                    <MenuItem value="javascript">JavaScript</MenuItem>
                </Select>
            </FormControl>
            <Editor
                height="40vh"
                language={language}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme="vs-dark"
            />
        </Box>
    );
};

export default CodeEditor;
