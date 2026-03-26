import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ code, language }: { code: string, language: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 text-sm">
      <div className="bg-slate-900 px-4 py-2 text-slate-500 border-b border-white/5 flex justify-between items-center">
        <span>{language}</span>
        <span className="text-xs uppercase tracking-widest">Read Only</span>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={atomDark}
        customStyle={{ margin: 0, padding: '1.5rem', background: '#020617' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}