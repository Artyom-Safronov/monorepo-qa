// =============================================================
// TypeVersionExamples.ts
//
// IDENTICAL file across ts3, ts4, and ts5 projects.
// Open it in each project and compare what the TypeScript LSP reports.
//
// Expected errors per TypeScript version:
//   TS 3.9 : variadic tuples, labeled tuples, template literal types,
//            override modifier, satisfies operator, const type parameter
//   TS 4.9 : const type parameter only
//   TS 5.x : no errors
// =============================================================


// ─── TypeScript 3.7+ ─────────────────────────────────────────
// Optional chaining and nullish coalescing.
// ✅ TS 3.x   ✅ TS 4.x   ✅ TS 5.x

interface DeepUser {
    profile?: {
        name?: string;
        address?: { city?: string };
    };
}

function getCityName(user: DeepUser): string | undefined {
    return user?.profile?.address?.city;      // optional chaining
}

function displayName(name: string | null | undefined): string {
    return name ?? 'Anonymous';               // nullish coalescing
}


// ─── TypeScript 4.0+ ─────────────────────────────────────────
// Variadic tuple types.
// ❌ TS 3.x: "A rest element type must be an array type."
// ✅ TS 4.x   ✅ TS 5.x

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
type StringNumberBool = Concat<[string, number], [boolean]>;
//   ^? → [string, number, boolean]

// Labeled tuple elements.
// ❌ TS 3.x: "Tuple members must all have names or all not have names."
// ✅ TS 4.x   ✅ TS 5.x
type Range = [start: number, end: number];


// ─── TypeScript 4.1+ ─────────────────────────────────────────
// Template literal types.
// ❌ TS 3.x: "Template literal types are not supported in TypeScript ≤ 4.0."
// ✅ TS 4.x   ✅ TS 5.x

type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEventName = EventName<'click'>;
//   ^? → 'onClick'

// Key remapping in mapped types (also TS 4.1+).
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type UserGetters = Getters<{ name: string; age: number }>;
//   ^? → { getName: () => string; getAge: () => number }


// ─── TypeScript 4.3+ ─────────────────────────────────────────
// override modifier.
// ❌ TS 3.x: "'override' modifier is not valid here."
// ✅ TS 4.3+  ✅ TS 5.x

class Shape {
    label: string = 'shape';
    getArea(): number { return 0; }
}

class Circle extends Shape {
    constructor(public readonly radius: number) { super(); }

    override getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    override label: string = `circle(r=${this.radius})`;
}


// ─── TypeScript 4.9+ ─────────────────────────────────────────
// satisfies operator.
// ❌ TS 3.x: Syntax error — unexpected identifier 'satisfies'.
// ❌ TS 4.x < 4.9: Syntax error.
// ✅ TS 4.9+  ✅ TS 5.x

type CSSColor = string | [number, number, number];

const palette = {
    red:   [255, 0, 0],
    green: '#00ff00',
    blue:  [0, 0, 255],
} satisfies Record<string, CSSColor>;

// Key benefit: literal types are preserved AND the constraint is checked.
//   palette.red   → [number, number, number]  (not widened to CSSColor)
//   palette.green → string                    (not widened to CSSColor)
// Without satisfies (type annotation): both would be CSSColor.


// ─── TypeScript 5.0+ ─────────────────────────────────────────
// const type parameters.
// ❌ TS 3.x: Syntax error.
// ❌ TS 4.x: "'const' modifier can only appear on a type parameter..."
// ✅ TS 5.0+

function toTuple<const T extends readonly unknown[]>(values: T): T {
    return values;
}

const narrowTuple = toTuple([10, 20, 30]);
//    TS 5.x → readonly [10, 20, 30]   ← literal types preserved
//    TS 4.x → readonly number[]        ← widened (if this compiled)

// Compare: without const modifier — works in all TS versions.
function toTupleWide<T extends readonly unknown[]>(values: T): T {
    return values;
}

const wideTuple = toTupleWide([10, 20, 30] as const);
//    All versions → readonly [10, 20, 30]  (because of 'as const' at call site)


// ─── Exports ─────────────────────────────────────────────────
export {
    getCityName,
    displayName,
    Circle,
    palette,
    toTuple,
    narrowTuple,
    toTupleWide,
    wideTuple,
};

export type {
    DeepUser,
    Concat,
    StringNumberBool,
    Range,
    EventName,
    ClickEventName,
    Getters,
    UserGetters,
    CSSColor,
};
