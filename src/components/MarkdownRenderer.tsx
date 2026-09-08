import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  copyLabel?: string;
  copiedLabel?: string;
}

const PreBlock: React.FC<{
  children?: React.ReactNode;
  copyLabel?: string;
  copiedLabel?: string;
}> = ({ children, copyLabel = 'Copy', copiedLabel = 'Copied!' }) => {
  const [copied, setCopied] = useState(false);

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (React.isValidElement<{ children?: React.ReactNode }>(node) && node.props?.children) {
      return extractText(node.props.children);
    }
    return '';
  };

  const onCopy = async () => {
    const raw = extractText(children);
    if (!raw) return;
    try {
      await navigator.clipboard.writeText(raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative group my-4">
      <button
        type="button"
        onClick={onCopy}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 px-2.5 py-1 text-xs font-mono bg-white/10 hover:bg-white/20 text-text-main rounded border border-white/10 shadow flex items-center gap-1.5"
        aria-label="Copy code block"
      >
        <span>{copied ? '✓' : '⧉'}</span>
        <span>{copied ? copiedLabel : copyLabel}</span>
      </button>
      <pre className="bg-[#0d1117] border border-card-border p-4 sm:p-6 rounded-lg overflow-x-auto text-sm">
        {children}
      </pre>
    </div>
  );
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  copyLabel,
  copiedLabel,
}) => {
  return (
    <article
      className="prose prose-invert max-w-none 
      prose-headings:text-text-main prose-p:text-text-sec prose-a:text-accent 
      prose-code:bg-white/5 prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 
      prose-code:rounded"
    >
      <ReactMarkdown
        components={{
          pre: ({ children }) => (
            <PreBlock copyLabel={copyLabel} copiedLabel={copiedLabel}>
              {children}
            </PreBlock>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownRenderer;
