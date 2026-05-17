"use client";

import { useEffect, useState } from "react";

export type UseSequentialTypewriterOptions = {
  charDelayMs?: number;
  linePauseMs?: number;
  startDelayMs?: number;
};

export function useSequentialTypewriter(
  lines: readonly string[],
  {
    charDelayMs = 42,
    linePauseMs = 380,
    startDelayMs = 600,
  }: UseSequentialTypewriterOptions = {},
) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = window.setTimeout(() => setHasStarted(true), startDelayMs);
    return () => window.clearTimeout(startTimer);
  }, [startDelayMs]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    const currentLine = lines[lineIndex];
    if (currentLine === undefined) {
      setIsComplete(true);
      return;
    }

    if (charIndex < currentLine.length) {
      const timer = window.setTimeout(
        () => setCharIndex((prev) => prev + 1),
        charDelayMs,
      );
      return () => window.clearTimeout(timer);
    }

    if (lineIndex < lines.length - 1) {
      const timer = window.setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, linePauseMs);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => setIsComplete(true), linePauseMs);
    return () => window.clearTimeout(timer);
  }, [
    charDelayMs,
    charIndex,
    hasStarted,
    isComplete,
    lineIndex,
    linePauseMs,
    lines,
  ]);

  const displayedLines = lines.map((line, index) => {
    if (index < lineIndex) return line;
    if (index === lineIndex) return line.slice(0, charIndex);
    return "";
  });

  const activeLineIndex = isComplete ? -1 : lineIndex;

  return {
    activeLineIndex,
    displayedLines,
    hasStarted,
    isComplete,
    isTyping: hasStarted && !isComplete,
  };
}
