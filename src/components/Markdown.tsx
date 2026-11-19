import { Fragment, type ReactNode } from "react";

// Rehber metinleri için küçük, güvenli Markdown görüntüleyici: paragraf, madde/numaralı liste,
// başlık, **kalın** ve [bağlantı](https://...). HTML enjekte edilmez; yalnızca https bağlantılar açılır.

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${i++}`;
    if (match[1] !== undefined) {
      nodes.push(<strong key={key}>{inline(match[1], key)}</strong>);
    } else if (match[3].startsWith("https://")) {
      nodes.push(<a key={key} href={match[3]} target="_blank" rel="noopener noreferrer">{match[2]}</a>);
    } else {
      nodes.push(match[2]);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ text }: { text: string }) {
  const blocks = text.replace(/\r/g, "").split(/\n{2,}/);
  return (
    <div className="prose-guide">
      {blocks.map((block, b) => {
        const lines = block.split("\n").filter((l) => l.trim());
        if (!lines.length) return null;
        const key = `b${b}`;
        if (lines.every((l) => /^\s*[-*]\s+/.test(l))) {
          return <ul key={key}>{lines.map((l, i) => <li key={i}>{inline(l.replace(/^\s*[-*]\s+/, ""), `${key}-${i}`)}</li>)}</ul>;
        }
        if (lines.every((l) => /^\s*\d+\.\s+/.test(l))) {
          return <ol key={key}>{lines.map((l, i) => <li key={i}>{inline(l.replace(/^\s*\d+\.\s+/, ""), `${key}-${i}`)}</li>)}</ol>;
        }
        if (/^#{1,6}\s/.test(lines[0]) && lines.length === 1) {
          return <h4 key={key}>{inline(lines[0].replace(/^#+\s*/, ""), key)}</h4>;
        }
        return (
          <p key={key}>
            {lines.map((l, i) => (
              <Fragment key={i}>{i > 0 && <br />}{inline(l, `${key}-${i}`)}</Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
