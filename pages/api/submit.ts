
// api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Judge0の言語IDをマッピング
const LANGUAGE_MAP: { [key: string]: number } = {
    python: 71, // Python 3.8.1
    cpp: 54,    // C++ (GCC 9.2.0)
    javascript: 63, // JavaScript (Node.js 12.14.0)
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('[LOG] /api/submit function started.');

    if (req.method !== 'POST') {
        console.error('[ERROR] Method not allowed:', req.method);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    console.log('[LOG] Request body:', req.body);
    const { language, code, stdin } = req.body;

    if (!language || !code || !stdin) {
        console.error('[ERROR] Missing required fields.');
        return res.status(400).json({ error: 'Missing required fields: language, code, stdin' });
    }

    const languageId = LANGUAGE_MAP[language];
    if (!languageId) {
        console.error('[ERROR] Unsupported language:', language);
        return res.status(400).json({ error: `Unsupported language: ${language}` });
    }
    console.log(`[LOG] Mapped language '${language}' to ID: ${languageId}`);

    const judge0ApiKey = process.env.NEXT_PUBLIC_JUDGE0_API_KEY;
    if (!judge0ApiKey) {
        console.error('[ERROR] Judge0 API key is not configured on the server.');
        return res.status(500).json({ error: 'Judge0 API key is not configured on the server.' });
    }
    console.log('[LOG] Judge0 API key found.');

    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            base64_encoded: 'false',
            wait: 'true',
        },
        headers: {
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': judge0ApiKey,
            'content-type': 'application/json',
        },
        data: {
            language_id: languageId,
            source_code: code,
            stdin: stdin,
        },
    };

    try {
        console.log('[LOG] Sending request to Judge0 API with options:', options);
        const submissionResponse = await axios.request(options);
        console.log('[LOG] Received response from Judge0 API.');
        console.log('[LOG] Judge0 Response Data:', submissionResponse.data);

        const { stdout, stderr, status, time, memory } = submissionResponse.data;
        
        res.status(200).json({ 
            stdout: stdout,
            stderr: stderr,
            status: status,
            time: time,
            memory: memory,
        });

    } catch (error) {
        console.error('[FATAL] Error calling Judge0 API:');
        if (axios.isAxiosError(error)) {
            console.error('Axios Error Message:', error.message);
            if (error.response) {
                console.error('Judge0 Response Status:', error.response.status);
                console.error('Judge0 Response Body:', error.response.data);
            }
        } else {
            console.error('Unknown Error:', error);
        }
        res.status(500).json({ error: 'An unexpected error occurred while processing the submission.' });
    }
}
