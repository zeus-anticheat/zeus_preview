import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <article className="prose prose-invert max-w-none 
      prose-headings:text-text-main prose-p:text-text-sec prose-a:text-accent 
      prose-code:bg-white/5 prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 
      prose-code:rounded prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-card-border prose-pre:p-6">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default MarkdownRenderer;
