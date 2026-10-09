import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { ShareButtons } from "@/components/share-buttons";
import { WA, PHONE_DISPLAY, SOCIAL, waMessage } from "@/lib/site";

export const Route = createFileRoute("/tools")({ component: ToolsPage });

const WARMUPS = [
  {
    title: "Humming ladder",
    steps: [
      "Lips closed, hum on a comfortable mid pitch for 4 counts",
      "Slide up a third, hold 4 counts",
      "Slide down to start, then one step lower",
      "Repeat 5 times, keep the jaw soft",
    ],
  },
  {
    title: "Lip trills (brrrr)",
    steps: [
      "Loose lips, steady air — make a motorboat sound",
      "Glide from low to high and back (siren)",
      "Keep shoulders down; stop if the sound breaks",
      "2–3 minutes total",
    ],
  },
  {
    title: "Open vowel on Sa",
    steps: [
      "Find a quiet Sa (or use the Reference Tone tool)",
      "Sing “aa” on Sa for 4 slow counts",
      "Move to “ee”, “oo”, “aa” again — same pitch",
      "Listen for even tone and relaxed throat",
    ],
  },
  {
    title: "Breath capacity (4–4–4)",
    steps: [
      "Inhale through the nose for 4 counts",
      "Hold gently for 4 counts (no throat squeeze)",
      "Exhale on a soft “sss” for 4 counts",
      "Rest 2 counts; repeat 6–8 rounds",
    ],
  },
  {
    title: "Staccato “ma-ma-ma”",
    steps: [
      "Light “ma” on a mid pitch, short and clear",
      "Five notes ascending, five descending",
      "Stay light — no pushing",
      "Two full sets",
    ],
  },
  {
    title: "Yawn-sigh release",
    steps: [
      "Imagine a gentle yawn; open the soft palate",
      "Sigh downward on “haa” from high to low",
      "Feel the throat open, not tight",
      "5–6 sighs",
    ],
  },
  {
    title: "Bengali vowel clarity",
    steps: [
      "On one pitch: অ, আ, ই, উ, এ, ও",
      "Keep each vowel pure — no diphthong slide",
      "Then the same on a simple three-note scale",
      "Useful before Rabindra Sangeet or Nazrul practice",
    ],
  },
  {
    title: "Soft dynamic control",
    steps: [
      "Sing a sustained “aa” starting piano",
      "Crescendo to mezzo, then back to piano (4+4 counts)",
      "No change of pitch — only volume",
      "3 repeats",
    ],
  },
];

function MetronomeTool() {
  const [bpm, setBpm] = useState(72);
  const [running, setRunning] = useState(false);
  const [beat, setBeat] = useState(0);
  const audioRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const click = useCallback((strong: boolean) => {
    const ctx = audioRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = strong ? 1000 : 800;
    gain.gain.value = strong ? 0.18 : 0.1;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const t = ctx.currentTime;
    osc.start(t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    osc.stop(t + 0.07);
  }, []);

  useEffect(() => {
    if (!running) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      setBeat(0);
      return;
    }
    if (!audioRef.current) {
      audioRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    const ms = Math.round(60000 / bpm);
    let n = 0;
    click(true);
    setBeat(1);
    timerRef.current = window.setInterval(() => {
      n = (n + 1) % 4;
      click(n === 0);
      setBeat(n + 1);
    }, ms);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [running, bpm, click]);

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm">
      <h3 className="font-serif text-xl sm:text-2xl text-night">Practice Metronome</h3>
      <p className="mt-1 text-sm text-muted">Steady pulse for alankar, tala and song practice.</p>
      <div className="mt-5 flex items-center justify-center gap-3">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-4 w-4 rounded-full transition-colors ${
              running && beat === i ? "bg-saffron-deep scale-110" : "bg-line"
            }`}
          />
        ))}
      </div>
      <div className="mt-5">
        <label className="flex items-center justify-between text-sm font-semibold text-ink">
          <span>Tempo</span>
          <span className="tabular-nums text-saffron-deep">{bpm} BPM</span>
        </label>
        <input
          type="range"
          min={40}
          max={180}
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="mt-2 w-full accent-saffron-deep"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>40</span>
          <span>180</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90"
        >
          {running ? "Stop" : "Start"}
        </button>
        {[60, 72, 90, 120].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setBpm(v)}
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-cream px-3 text-sm font-medium hover:bg-paper"
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

function BreathingTool() {
  const patterns = [
    { id: "444", label: "4–4–4 (singer’s basic)", in: 4, hold: 4, out: 4 },
    { id: "468", label: "4–6–8 (longer exhale)", in: 4, hold: 6, out: 8 },
    { id: "555", label: "5–5–5 (steady)", in: 5, hold: 5, out: 5 },
  ] as const;
  const [pattern, setPattern] = useState<(typeof patterns)[number]>(patterns[0]);
  const [phase, setPhase] = useState<"idle" | "in" | "hold" | "out">("idle");
  const [count, setCount] = useState(0);
  const [round, setRound] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }
    let p: "in" | "hold" | "out" = "in";
    let c = pattern.in;
    setPhase("in");
    setCount(c);
    setRound(1);
    timerRef.current = window.setInterval(() => {
      c -= 1;
      if (c > 0) {
        setCount(c);
        return;
      }
      if (p === "in") {
        p = "hold";
        c = pattern.hold;
        setPhase("hold");
        setCount(c);
      } else if (p === "hold") {
        p = "out";
        c = pattern.out;
        setPhase("out");
        setCount(c);
      } else {
        p = "in";
        c = pattern.in;
        setPhase("in");
        setCount(c);
        setRound((r) => r + 1);
      }
    }, 1000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [running, pattern]);

  const phaseLabel =
    phase === "in" ? "Inhale" : phase === "hold" ? "Hold" : phase === "out" ? "Exhale" : "Ready";

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm">
      <h3 className="font-serif text-xl sm:text-2xl text-night">Breathing Timer</h3>
      <p className="mt-1 text-sm text-muted">
        Breath control underpins every sustained phrase. Use before practice or stage.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {patterns.map((p) => (
          <button
            key={p.id}
            type="button"
            disabled={running}
            onClick={() => setPattern(p)}
            className={`inline-flex min-h-10 items-center rounded-full border px-3 text-xs sm:text-sm font-semibold transition-colors ${
              pattern.id === p.id
                ? "border-saffron-deep bg-saffron/20 text-night"
                : "border-line bg-cream text-ink hover:bg-paper"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          {phaseLabel}
        </p>
        <p className="mt-2 font-serif text-5xl tabular-nums text-night">
          {phase === "idle" ? "—" : count}
        </p>
        <p className="mt-1 text-sm text-muted">
          {running ? `Round ${round}` : "Press start when ready"}
        </p>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => {
            if (running) {
              setRunning(false);
              setPhase("idle");
              setCount(0);
              setRound(0);
            } else {
              setRunning(true);
            }
          }}
          className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90"
        >
          {running ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

function WarmupTool() {
  const [idx, setIdx] = useState(0);
  const item = WARMUPS[idx];

  const next = () => setIdx((i) => (i + 1) % WARMUPS.length);
  const random = () => setIdx(Math.floor(Math.random() * WARMUPS.length));

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm">
      <h3 className="font-serif text-xl sm:text-2xl text-night">Warm-up Generator</h3>
      <p className="mt-1 text-sm text-muted">
        Quick routines you can use at home. For guided technique, join a class at Parampara.
      </p>
      <div className="mt-5 rounded-xl border border-line bg-cream p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          Today’s focus
        </p>
        <h4 className="mt-1 font-serif text-lg text-night">{item.title}</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-ink leading-relaxed">
          {item.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={random}
          className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90"
        >
          New random warm-up
        </button>
        <button
          type="button"
          onClick={next}
          className="inline-flex min-h-11 items-center rounded-full border border-line bg-cream px-4 text-sm font-semibold hover:bg-paper"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function ReferenceToneTool() {
  const notes = [
    { label: "Sa (C4 ≈ 261.6 Hz)", freq: 261.63 },
    { label: "A440 (tuning standard)", freq: 440 },
    { label: "Pa (G4 ≈ 392 Hz)", freq: 392 },
    { label: "Low Sa (C3 ≈ 130.8 Hz)", freq: 130.81 },
  ];
  const [selected, setSelected] = useState(notes[0]);
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const stop = useCallback(() => {
    try {
      if (gainRef.current && ctxRef.current) {
        const g = gainRef.current;
        const t = ctxRef.current.currentTime;
        g.gain.cancelScheduledValues(t);
        g.gain.setValueAtTime(g.gain.value, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      }
      oscRef.current?.stop(ctxRef.current ? ctxRef.current.currentTime + 0.1 : undefined);
    } catch {
      /* ignore */
    }
    oscRef.current = null;
    gainRef.current = null;
    setPlaying(false);
  }, []);

  const play = () => {
    stop();
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!ctxRef.current) ctxRef.current = new Ctx();
    const ctx = ctxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = selected.freq;
    gain.gain.value = 0.12;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    oscRef.current = osc;
    gainRef.current = gain;
    setPlaying(true);
  };

  useEffect(() => () => stop(), [stop]);

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-sm">
      <h3 className="font-serif text-xl sm:text-2xl text-night">Reference Tone</h3>
      <p className="mt-1 text-sm text-muted">
        Play a steady Sa or A440 to tune your voice or instrument before practice.
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {notes.map((n) => (
          <button
            key={n.label}
            type="button"
            onClick={() => {
              setSelected(n);
              if (playing) {
                stop();
              }
            }}
            className={`rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
              selected.label === n.label
                ? "border-saffron-deep bg-saffron/15 text-night"
                : "border-line bg-cream text-ink hover:bg-paper"
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => (playing ? stop() : play())}
          className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90"
        >
          {playing ? "Stop tone" : "Play tone"}
        </button>
      </div>
      <p className="mt-3 text-xs text-muted">
        Tip: match the tone gently — never force. For true raga work and ear training, learn with a teacher.
      </p>
    </div>
  );
}

function ToolsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          Free practice tools
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">
          Tools for music lovers
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          Simple browser tools to support daily vocal practice — metronome, breathing, warm-ups
          and a reference tone. Free to use. When you are ready for guided voice training, Parampara
          Music Academy in Sylhet is here.
        </p>

        <div className="mt-6">
          <ShareButtons
            path="/tools"
            title="Free vocal practice tools — Metronome, breathing timer, warm-ups | Bimolendu Dash Bipresh"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <MetronomeTool />
          <BreathingTool />
          <WarmupTool />
          <ReferenceToneTool />
        </div>

        <section className="mt-14 rounded-2xl border border-saffron-deep/30 bg-gradient-to-br from-cream via-paper to-cream p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
            Next step
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-night">
            Turn practice into progress
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
            These tools help you stay consistent. Real voice training — tone, raga, repertoire and
            stage confidence — grows faster with a teacher. Book a trial or ask about beginner to
            advanced vocal courses at Parampara Music Academy.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex min-h-11 items-center rounded-full bg-saffron px-5 text-sm font-semibold text-night hover:bg-saffron-deep hover:text-cream transition-colors"
            >
              View courses & fees
            </Link>
            <a
              href={waMessage(
                "Hello Bipresh, I used the free practice tools on your website and I am interested in voice training / a trial class."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90"
            >
              WhatsApp {PHONE_DISPLAY}
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold hover:bg-cream"
            >
              Facebook
            </a>
          </div>
        </section>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted mb-3">Share these tools with other music lovers</p>
          <ShareButtons
            path="/tools"
            title="Free vocal practice tools for singers — try them and share"
            className="justify-center"
          />
        </div>
      </main>
    </SiteShell>
  );
}
