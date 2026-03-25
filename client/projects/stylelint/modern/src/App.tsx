// Stylelint 16.19.1 — stylelint-config-standard@36
//
// Config: .stylelintrc.mjs  (ESM format — v16 style)
//   color-function-notation: "modern"     → rgb(255 0 0) ✅  rgb(255, 0, 0) ❌
//   alpha-value-notation: "percentage"    → rgb(0 0 0 / 50%) ✅  rgba(0,0,0,0.5) ❌
//
// Open src/styles/StylelintVersionExamples.css and compare LSP diagnostics
// with the legacy project (v14) which uses the opposite notation settings.
import './styles/StylelintVersionExamples.css';

type Rule = {
	name: string;
	violation: string;
	v14: boolean;
	v16: boolean;
	note: string;
};

const RULES: Rule[] = [
	{
		name: 'color-function-notation: "legacy"',
		violation: 'rgb(255 0 0)  — modern notation',
		v14: true,
		v16: false,
		note: 'v14 config set to "legacy"; v16 config set to "modern"',
	},
	{
		name: 'alpha-value-notation: "number"',
		violation: 'rgb(0 0 0 / 50%)  — percentage alpha',
		v14: true,
		v16: false,
		note: 'v14 config set to "number"; v16 config set to "percentage"',
	},
	{
		name: 'color-function-notation: "modern"',
		violation: 'rgb(255, 0, 0)  — legacy notation',
		v14: false,
		v16: true,
		note: 'Same rule, opposite setting in each project',
	},
	{
		name: 'color-hex-case: "lower"',
		violation: '#FF0000  — uppercase hex',
		v14: true,
		v16: false,
		note: 'Stylistic rule present in config-standard@29, removed in v15',
	},
	{
		name: 'number-leading-zero: "always"',
		violation: 'opacity: .5  — missing leading zero',
		v14: true,
		v16: false,
		note: 'Stylistic rule present in config-standard@29, removed in v15',
	},
	{
		name: 'custom-property-no-missing-var-function',
		violation: 'color: --brand-color  — missing var()',
		v14: false,
		v16: true,
		note: 'New rule added in stylelint v15, not available in v14',
	},
	{
		name: 'color-no-invalid-hex',
		violation: 'color: #xyz  — invalid hex',
		v14: true,
		v16: true,
		note: 'Present in both versions',
	},
	{
		name: 'property-no-unknown',
		violation: 'colorr: red  — unknown property',
		v14: true,
		v16: true,
		note: 'Present in both versions',
	},
];

const ACTIVE = 'v16';

const cell = (violated: boolean, active: boolean) => (
	<td
		style={{
			textAlign: 'center',
			fontWeight: active ? 700 : 400,
			color: violated ? '#ef4444' : '#22c55e',
			background: active ? '#1e293b' : undefined,
		}}
	>
		{violated ? '❌ violation' : '✅ ok'}
	</td>
);

export default function App() {
	return (
		<div style={{ fontFamily: 'monospace', padding: '2rem', maxWidth: 1100 }}>
			<h1 style={{ color: '#10b981', marginBottom: '0.25rem' }}>
				Stylelint 16.19.1 — Modern Project
			</h1>
			<p style={{ color: '#94a3b8', marginTop: 0 }}>
				<code>stylelint@16.19.1</code> · <code>stylelint-config-standard@36</code> · port 4184
			</p>

			<p>
				Open <code>src/styles/StylelintVersionExamples.css</code> — the file is <strong>identical</strong>{' '}
				in both projects. This project uses <code>.stylelintrc.mjs</code> (ESM) with{' '}
				<code>color-function-notation: "modern"</code>. The legacy project (v14) uses{' '}
				<code>.stylelintrc.json</code> with <code>color-function-notation: "legacy"</code>.
			</p>

			<h2>Rule Violations — StylelintVersionExamples.css</h2>
			<table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
				<thead>
					<tr style={{ background: '#059669', color: '#fff' }}>
						<th style={{ padding: '8px 12px', textAlign: 'left' }}>Rule</th>
						<th style={{ padding: '8px 12px', textAlign: 'left' }}>Violating code</th>
						<th style={{ padding: '8px' }}>v14</th>
						<th style={{ padding: '8px', background: ACTIVE === 'v16' ? '#047857' : undefined }}>
							v16 ◀
						</th>
						<th style={{ padding: '8px 12px', textAlign: 'left' }}>Note</th>
					</tr>
				</thead>
				<tbody>
					{RULES.map((r, i) => (
						<tr key={r.name} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff' }}>
							<td style={{ padding: '8px 12px' }}>
								<code>{r.name}</code>
							</td>
							<td style={{ padding: '8px 12px' }}>
								<code>{r.violation}</code>
							</td>
							{cell(r.v14, ACTIVE === 'v14')}
							{cell(r.v16, ACTIVE === 'v16')}
							<td style={{ padding: '8px 12px', color: '#64748b', fontSize: '0.8rem' }}>
								{r.note}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<h2>Key Differences</h2>
			<ul>
				<li>
					<strong>Config format:</strong> <code>.stylelintrc.mjs</code> (ESM, v16 style) vs{' '}
					<code>.stylelintrc.json</code> (JSON, v14 style)
				</li>
				<li>
					<strong>Stylistic rules removed:</strong> ~76 stylistic rules (including{' '}
					<code>color-hex-case</code>, <code>number-leading-zero</code>) were removed in v15 — they
					remain in v14's <code>config-standard@29</code>.
				</li>
				<li>
					<strong>New v16 rules:</strong> <code>custom-property-no-missing-var-function</code> (v15+),{' '}
					<code>annotation-no-unknown</code> (v15+), <code>media-query-no-invalid</code> (v16+).
				</li>
				<li>
					<strong>Node.js requirement:</strong> stylelint v16 requires Node.js 18.12+; v14 supports
					Node.js 12+.
				</li>
			</ul>
		</div>
	);
}
