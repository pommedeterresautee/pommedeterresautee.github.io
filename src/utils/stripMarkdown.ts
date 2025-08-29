// Utility to strip common Markdown syntax to plain text
// Keeps readable text (link/image alt) and collapses whitespace

export function stripMarkdown(input: string | undefined | null): string {
  if (!input) return "";
  let output = String(input);

  // Remove fenced code blocks
  output = output.replace(/```[\s\S]*?```/g, "");
  // Remove indented code blocks (4 spaces or a tab at line start)
  output = output.replace(/^(?: {4}|\t).+$/gm, "");

  // Images: ![alt](url) -> alt
  output = output.replace(/!\[([^\]]*)\]\([^\)]*\)/g, "$1");
  // Links: [text](url) -> text
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");

  // Inline code backticks
  output = output.replace(/`([^`]*)`/g, "$1");

  // Emphasis / strong / strikethrough
  output = output.replace(/\*\*([^*]+)\*\*/g, "$1");
  output = output.replace(/__([^_]+)__/g, "$1");
  output = output.replace(/\*([^*]+)\*/g, "$1");
  output = output.replace(/_([^_]+)_/g, "$1");
  output = output.replace(/~~([^~]+)~~/g, "$1");

  // Headings markers
  output = output.replace(/^\s{0,3}#{1,6}\s+/gm, "");

  // Blockquotes
  output = output.replace(/^\s{0,3}>\s?/gm, "");

  // Lists bullets and ordered list markers
  output = output.replace(/^\s{0,3}(?:[-*+]\s+|\d+\.\s+)/gm, "");

  // Horizontal rules (***, ---, ___)
  output = output.replace(/^\s{0,3}(?:\*\s?){3,}|^-{3,}|^_{3,}$/gm, "");

  // Remove any remaining HTML tags
  output = output.replace(/<[^>]+>/g, "");

  // Collapse whitespace
  output = output.replace(/\s+/g, " ").trim();

  return output;
}

export default stripMarkdown;

