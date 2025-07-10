
// src/utils/logger.ts
enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

const LOG_LEVEL_COLORS = {
    [LogLevel.DEBUG]: '#9E9E9E', // Grey
    [LogLevel.INFO]: '#2196F3',  // Blue
    [LogLevel.WARN]: '#FFC107',  // Amber
    [LogLevel.ERROR]: '#F44336', // Red
};

const log = (level: LogLevel, message: string, data?: any) => {
    if (process.env.NODE_ENV !== 'development') {
        return; // Don't log in production
    }

    const timestamp = new Date().toLocaleTimeString();
    const color = LOG_LEVEL_COLORS[level];

    console.groupCollapsed(
        `%c[${level}]%c ${timestamp} - ${message}`,
        `color: white; background-color: ${color}; padding: 2px 6px; border-radius: 3px; font-weight: bold;`,
        'color: inherit;'
    );

    if (data) {
        if (data instanceof Error) {
            console.error('Error Object:', data);
        } else {
            console.log('Data:', data);
        }
    }

    // Add a stack trace for context
    console.trace('Trace');

    console.groupEnd();
};

export const logger = {
    debug: (message: string, data?: any) => log(LogLevel.DEBUG, message, data),
    info: (message: string, data?: any) => log(LogLevel.INFO, message, data),
    warn: (message: string, data?: any) => log(LogLevel.WARN, message, data),
    error: (message: string, data?: any) => log(LogLevel.ERROR, message, data),
};
