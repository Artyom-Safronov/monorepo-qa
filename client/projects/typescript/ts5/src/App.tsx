// TypeScript 5.4.5 — React 18
//
// moduleResolution:"bundler" (TS 5.0+) — no need for .js extensions in imports.
// All features in TypeVersionExamples.ts are valid — zero LSP errors.
import {
    getCityName,
    displayName,
    Circle,
    palette,
    wideTuple,
    narrowTuple,   // defined with `const` type param (TS 5.0+) — no error here
} from './TypeVersionExamples';

// ─── sample data ─────────────────────────────────────────────
const sampleUser = {
    profile: { name: 'Alice', address: { city: 'Moscow' } },
};

const circle = new Circle(5);

// ─── Hover over narrowTuple — TS 5.x infers readonly [10, 20, 30] ──────────
// Compare with wideTuple which uses 'as const' at call site (all TS versions).
const tupleComparison = {
    narrowTuple,   // TS 5.x: readonly [10, 20, 30]   (const type param)
    wideTuple,     // All:    readonly [10, 20, 30]   (as const at call site)
};

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
const ACTIVE_VERSION = 'ts5';

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

            <h1 style={{ color: '#10b981', marginBottom: '0.25rem' }}>
                TypeScript 5.4.5 — Demo Project
            </h1>
            <p style={{ color: '#94a3b8', marginTop: 0 }}>
                <code>typescript@5.4.5</code> · <code>react@18.3.1</code> · port 4180
            </p>

            <p>
                Open <code>src/TypeVersionExamples.ts</code> — <strong>zero errors</strong>.
                All features are fully supported. Compare with ts3 and ts4 projects
                where the same file contains errors.
            </p>

            <h2>Feature Compatibility — TypeVersionExamples.ts</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.9rem' }}>
                <thead>
                    <tr style={{ background: '#1e40af', color: '#fff' }}>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Feature</th>
                        <th style={{ padding: '8px' }}>TS 3.x</th>
                        <th style={{ padding: '8px' }}>TS 4.x</th>
                        <th style={{ padding: '8px', background: ACTIVE_VERSION === 'ts5' ? '#1d4ed8' : undefined }}>TS 5.x ◀</th>
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
    ...tupleComparison,
}, null, 2)}
            </pre>

            <h2>Key Differences vs ts3 / ts4</h2>
            <ul>
                <li><code>tsconfig.json</code>: <code>"moduleResolution": "bundler"</code> — TS 5.0+ only</li>
                <li><code>tsconfig.json</code>: <code>"target": "ES2022"</code> — broadest set of native features</li>
                <li><code>TypeVersionExamples.ts</code>: <strong>zero LSP errors</strong></li>
                <li>
                    <code>narrowTuple</code> hover type is <code>readonly [10, 20, 30]</code>
                    — literal types preserved by <code>const</code> type parameter
                </li>
                <li>In ts4, same <code>narrowTuple</code> would be <code>readonly number[]</code></li>
            </ul>
        </div>
    );
}
