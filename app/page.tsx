"use client";

import { useState } from "react";
import type { FormEvent } from "react";

// This fake message list keeps the demo frontend-only: no backend, database, or auth.
const fakeMessages = [
  {
    id: 1,
    user: "Phantom-17",
    time: "21:04",
    text: "Signal is clean. Welcome to GhostChat.",
    me: false,
  },
  {
    id: 2,
    user: "You",
    time: "21:05",
    text: "Anonymous channel opened. Who else is online?",
    me: true,
  },
  {
    id: 3,
    user: "NullByte",
    time: "21:06",
    text: "Three ghosts connected. Keep it minimal, keep it encrypted-looking.",
    me: false,
  },
  {
    id: 4,
    user: "CipherCat",
    time: "21:07",
    text: "The UI feels like Discord met Telegram in a neon alley.",
    me: false,
  },
  {
    id: 5,
    user: "You",
    time: "21:08",
    text: "Perfect. Dark mode, rounded panels, smooth hover states.",
    me: true,
  },
  {
    id: 6,
    user: "Phantom-17",
    time: "21:09",
    text: "Stay hidden. Send only what you want the shadows to remember.",
    me: false,
  },
];

export default function GhostChatPage() {
  // The input state is only for the visual demo; messages are not persisted anywhere.
  const [draft, setDraft] = useState("");

  // Prevents the demo form from refreshing the page when the send button is clicked.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDraft("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-zinc-100">
      {/* Decorative cyberpunk background glows create depth without extra assets. */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-8%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid flex-1 gap-4 lg:grid-cols-[280px_1fr]">
          {/* Sidebar mirrors a Discord-style channel list while staying minimal. */}
          <aside className="hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-glow backdrop-blur-xl lg:block">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-black shadow-lg shadow-cyan-400/20">
                G
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">GhostChat</h1>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">anonymous</p>
              </div>
            </div>

            <nav className="space-y-2 text-sm text-zinc-400">
              {["# ghost-lobby", "# night-signal", "# encrypted-cafe"].map((channel, index) => (
                <button
                  key={channel}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition hover:bg-zinc-900 hover:text-zinc-100 ${
                    index === 0 ? "bg-zinc-900 text-cyan-200 ring-1 ring-cyan-400/20" : ""
                  }`}
                >
                  {channel}
                </button>
              ))}
            </nav>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">status</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-zinc-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                24 ghosts online
              </div>
            </div>
          </aside>

          <div className="flex min-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:min-h-[calc(100vh-3rem)]">
            {/* Chat header with title, description, and online indicator. */}
            <header className="flex flex-col gap-4 border-b border-zinc-800/80 bg-black/35 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-950 text-2xl">👻</div>
                  <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-zinc-950 bg-emerald-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold sm:text-xl"># ghost-lobby</h2>
                  <p className="text-sm text-zinc-400">Anonymous public room • no accounts required</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                Online now
              </div>
            </header>

            {/* Scrollable messages area. It grows to fill the remaining screen height. */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
              {fakeMessages.map((message) => (
                <article
                  key={message.id}
                  className={`group flex gap-3 ${message.me ? "justify-end" : "justify-start"}`}
                >
                  {!message.me && (
                    <div className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-sm ring-1 ring-zinc-800 sm:flex">
                      {message.user.slice(0, 1)}
                    </div>
                  )}

                  <div className={`max-w-[86%] sm:max-w-[70%] ${message.me ? "items-end" : "items-start"}`}>
                    <div className={`mb-1 flex items-center gap-2 text-xs text-zinc-500 ${message.me ? "justify-end" : ""}`}>
                      <span>{message.user}</span>
                      <span>•</span>
                      <time>{message.time}</time>
                    </div>
                    <p
                      className={`rounded-3xl px-4 py-3 text-sm leading-6 shadow-lg transition duration-200 group-hover:-translate-y-0.5 sm:text-base ${
                        message.me
                          ? "rounded-br-md bg-cyan-400 text-black shadow-cyan-500/10"
                          : "rounded-bl-md border border-zinc-800 bg-zinc-900/90 text-zinc-100 shadow-black/20"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Message composer with an input field and send button. */}
            <form onSubmit={handleSubmit} className="border-t border-zinc-800/80 bg-black/35 p-4 sm:p-5">
              <div className="flex gap-3 rounded-3xl border border-zinc-800 bg-zinc-950 p-2 transition focus-within:border-cyan-400/70 focus-within:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Send an anonymous message..."
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 sm:text-base"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:translate-y-0 sm:px-6"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
