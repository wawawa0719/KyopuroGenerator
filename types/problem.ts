
export interface Sample {
    input: string;
    output: string;
}

export interface Problem {
    title: string;
    statement: string;
    constraints: string;
    input_format: string;
    output_format: string;
    samples: Sample[];
    explanation: string;
    solution_code: string;
}
