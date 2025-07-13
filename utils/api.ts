import axios from 'axios';
import { Problem } from '../types/problem';
import { logger } from './logger';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

const getPrompt = (difficulty: string, genre?: string): string => {
    let basePrompt = `
あなたは、世界クラスの競技プログラミングの問題作成者です。独創的で、教育的価値のある問題を考案する専門家です。

以下の {difficulty} に基づいて、競技プログラミングの問題を1問作成してください。出力は必ず指定のJSON形式で返してください。
`;

    if (genre && genre.trim() !== '') {
        basePrompt += `
特に、今回は「${genre}」というジャンルの問題を作成してください。
`;
    }

    basePrompt += `
- **問題**: {difficulty} レベルのアルゴリズムやデータ構造の知識を問う、ユニークな問題を設計してください。
- **出力形式**: 以下のキーを持つJSONオブジェクトを生成してください
    - title: 問題タイトル (string)
    - statement: 問題文 (string)
    - constraints: 制約条件 (string)
    - input_format: 入力形式の説明 (string)
    - output_format: 出力形式の説明 (string)
    - samples: 入出力の具体例 (array of objects, { input: string, output: string } 形式で3つ)
    - explanation: 問題の解法とアルゴリズムの解説 (string)
    - solution_code: 解答のサンプルコード (string, Pythonで記述)
`;

    const difficultyRequirements = {
        'A': '**A (Beginner) トピック**: 問題文の丁寧な読解、標準入出力、四則演算、単純な文字列操作。プログラミングの基礎知識を問う。計算量目安: O(1)',
        'B': '**B (Basic) トピック**: ループ、条件分岐、配列（リスト）の基本的な操作。全探索やシミュレーションで解ける問題。計算量目安: O(N) or O(N^2)',
        'C': '**C (Intermediate) トピック**: 連想配列（辞書）、集合(Set)、ソート、貪欲法、基本的な数学的考察。典型的な実装力が求められる。計算量目安: O(N log N)',
        'D': '**D (Advanced) トピック**: 二分探索、累積和、BFS/DFS、基本的な動的計画法(DP)。典型アルゴリズムの知識が必須。計算量目安: O(N log N) または O(N√N)',
        'E': '**E (Expert) トピック**: 発展的な動的計画法(DP)、ダイクストラ法などのグラフアルゴリズム、Union-Find、セグメント木などの高度なデータ構造。複数の知識の組み合わせを要求する。計算量目安: 問題の性質に応じるが、工夫が必要なもの。'
    };

    return basePrompt.replace(/{difficulty}/g, difficultyRequirements[difficulty as keyof typeof difficultyRequirements] || difficultyRequirements['A']);
};

export const generateProblem = async (difficulty: string, genre?: string): Promise<Problem> => {
    logger.info(`Attempting to generate problem with difficulty: ${difficulty} and genre: ${genre}`);

    if (!API_KEY) {
        logger.error("API key is not configured.");
        throw new Error("API key is not configured. Please set REACT_APP_GEMINI_API_KEY in your .env file.");
    }

    const prompt = getPrompt(difficulty, genre);
    logger.debug("Generated Prompt:", prompt);

    try {
        logger.info("Sending request to Gemini API...");
        const response = await axios.post(API_URL, { 
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
            },
        });

        logger.info("Received response from Gemini API.");
        logger.debug("API Response Data:", response.data);

        const responseText = response.data.candidates[0].content.parts[0].text;
        logger.debug("Raw response text:", responseText);

        // The response might be wrapped in markdown json block, so we clean it.
        const cleanedJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        logger.debug("Cleaned JSON string:", cleanedJson);

        const problemData: Problem = JSON.parse(cleanedJson);
        logger.info("Successfully parsed problem data.");
        logger.debug("Parsed Problem Data:", problemData);

        return problemData;
    } catch (error) {
        logger.error("Error generating problem:", error);
        if (axios.isAxiosError(error) && error.response) {
            logger.error("API Response Error Data:", error.response.data);
        }
        throw new Error("Failed to generate problem from API.");
    }
};

export interface Judge0Result {
    stdout: string | null;
    stderr: string | null;
    status: { id: number; description: string; };
    time: string;
    memory: number;
}

// This function now calls our own backend (Vercel Serverless Function)
export const submitCode = async (language: string, code: string, stdin: string): Promise<Judge0Result> => {
    logger.info(`Submitting code to our backend...`, { language, stdin });

    try {
        const response = await axios.post<Judge0Result>('/api/submit', {
            language,
            code,
            stdin,
        });

        logger.info("Received response from our backend.", response.data);
        return response.data;
    } catch (error) {
        logger.error("Error submitting code to our backend:", error);
        if (axios.isAxiosError(error) && error.response) {
            logger.error("Backend Response Error Data:", error.response.data);
            // Rethrow a more specific error or handle it as needed
            throw new Error(error.response.data.error || 'Failed to get result from backend.');
        }
        throw new Error("An unexpected error occurred while submitting code.");
    }
};
