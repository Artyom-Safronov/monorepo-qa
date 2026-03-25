// TypeScript 4.9.5 — React 18
//
// With jsx:"react-jsx" (TS 4.0+) the JSX runtime is injected automatically —
// no need to import React explicitly (unlike the ts3 project).
// noUncheckedIndexedAccess is enabled: array[n] returns T | undefined.
import {
    getCityName,
    displayName,
    Circle,
    palette,
    wideTuple,
    narrowTuple,   // defined with `const` type param — TS 4.x shows an error
                   // on the definition, but the value is still valid at runtime
} from './TypeVersionExamples';

// ─── sample data ─────────────────────────────────────────────
const sampleUser = {
    profile: { name: 'Alice', address: { city: 'Moscow' } },
};

const circle = new Circle(5);

// ─── feature table ───────────────────────────────────────────
type Feature = { name: string; ts3: boolean; ts4: boolean; ts5: boolean; since: string };

const FEATURES: Feature[] = [
    { name: 'Optional chaining (?.)',        ts3: true,  ts4: true,  ts5: true,  since: 'TS 3.7' },
    { name: 'Nullish coalescing (??)',        ts3: true,  ts4: true,  ts5: true,  since: 'TS 3.7' },
    { name: 'Variadic tuple types',          ts3: false, ts4: true,  ts5: true,  since: 'TS 4.0' },
    { name: 'Labeled tuple elements',        ts3: false, ts4: true,  ts5: true,  since: 'TS 4.0' },
    { name: 'Template literal types',        ts3: false, ts4: true,  ts5: true,  since: 'TS 4.1' },
    { name: 'Key remapping in mapped types', ts3: false, ts4: true,  ts5: true,  since: 'TS 4.1' },
    { name: 'override modifier',             ts3: false, ts4: true,  ts5: true,  since: 'TS 4.3' },
    { name: 'satisfies operator',            ts3: false, ts4: true,  ts5: true,  since: 'TS 4.9' },
    { name: 'const type parameters',         ts3: false, ts4: false, ts5: true,  since: 'TS 5.0' },
];

// ─── helpers ─────────────────────────────────────────────────
const ACTIVE_VERSION = 'ts4';

const cell = (ok: boolean, active: boolean) => (
    <td style={{
        textAlign: 'center',
        fontWeight: active ? 700 : 400,
        color: ok ? '#22c55e' : '#ef4444',
        background: active ? '#1e293b' : undefined,
    }}>
        {ok ? '✅' : '❌'}
    </td>
);

// ─── component ───────────────────────────────────────────────
export default function App() {
    return (
        <div style={{ fontFamily: 'monospace', padding: '2rem', maxWidth: 960 }}>

            <h1 style={{ color: '#8b5cf6', marginBottom: '0.25rem' }}>
                TypeScript 4.9.5 — Demo Project
            </h1>
            <p style={{ color: '#94a3b8', marginTop: 0 }}>
                <code>typescript@4.9.5</code> · <code>react@18.3.1</code> · port 4179
            </p>

            <p>
                Open <code>src/TypeVersionExamples.ts</code> — only one error remains:
                the <strong>const type parameter</strong> on <code>toTuple</code>.
                All TS&nbsp;4.x features work cleanly.
            </p>

            <h2>Feature Compatibility — TypeVersionExamples.ts</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.9rem' }}>
                <thead>
                    <tr style={{ background: '#1e40af', color: '#fff' }}>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Feature</th>
                        <th style={{ padding: '8px' }}>TS 3.x</th>
                        <th style={{ padding: '8px', background: ACTIVE_VERSION === 'ts4' ? '#1d4ed8' : undefined }}>TS 4.x ◀</th>
                        <th style={{ padding: '8px' }}>TS 5.x</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {FEATURES.map((f, i) => (
                        <tr key={f.name} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff' }}>
                            <td style={{ padding: '8px 12px' }}>{f.name}</td>
                            {cell(f.ts3, ACTIVE_VERSION === 'ts3')}
                            {cell(f.ts4, ACTIVE_VERSION === 'ts4')}
                            {cell(f.ts5, ACTIVE_VERSION === 'ts5')}
                            <td style={{ padding: '8px 12px', color: '#64748b' }}>{f.since}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Runtime Values (Vite/esbuild transpiles regardless of TS errors)</h2>
            <pre style={{
                background: '#0f172a', color: '#e2e8f0',
                padding: '1rem', borderRadius: '0.5rem',
                overflow: 'auto',
            }}>
{JSON.stringify({
    'getCityName(user)': getCityName(sampleUser),
    'displayName(null)': displayName(null),
    'circle.getArea()':  circle.getArea().toFixed(4),
    'circle.label':      circle.label,
    palette,
    wideTuple,
    narrowTuple,
}, null, 2)}
            </pre>

            <h2>Key Differences vs ts3 / ts5</h2>
            <ul>
                <li><code>tsconfig.json</code>: <code>"jsx": "react-jsx"</code> — no explicit React import needed</li>
                <li><code>tsconfig.json</code>: <code>"noUncheckedIndexedAccess": true</code> — array indexing returns <code>T | undefined</code></li>
                <li><code>main.tsx</code>: uses <code>createRoot().render()</code> (React 18 API)</li>
                <li><code>TypeVersionExamples.ts</code>: LSP reports 1 error (<code>const</code> type parameter)</li>
                <li><code>narrowTuple</code> type here is <code>readonly number[]</code>, not <code>readonly [10, 20, 30]</code></li>
            </ul>
        </div>
    );
}
