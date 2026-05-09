"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Message = {
  id: number;
  user: string;
  time: string;
  text: string;
  me: boolean;
};

// Frontend-only starter messages keep the room active without changing app behavior.
const initialMessages: Message[] = [
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

const chats = [
  { name: "GhostChat", preview: "anonymous chat", active: true, unread: 3 },
  { name: "Night Signal", preview: "low-noise room", active: false, unread: 0 },
  { name: "Encrypted Cafe", preview: "members online", active: false, unread: 8 },
];

export default function GhostChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = draft.trim();

    if (!text) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      user: "You",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      text,
      me: true,
    };

    setMessages((currentMessages) => [...currentMessages, newMessage]);
    setDraft("");
  };

  return (
    <main className="relative h-dvh overflow-hidden bg-[#0a1018] text-slate-100 antialiased">
      {/* Premium Telegram-like ambience: soft gradients, subtle grid, and frosted depth. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(47,137,255,0.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(52,211,153,0.13),transparent_26%),linear-gradient(135deg,#07111f_0%,#111827_44%,#060a12_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex h-full w-full max-w-7xl flex-col p-0 md:p-4 lg:p-6">
        <div className="grid h-full min-h-0 overflow-hidden border border-white/10 bg-slate-950/70 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:rounded-[1.75rem] lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="hidden min-h-0 border-r border-white/10 bg-slate-950/65 lg:flex lg:flex-col">
            <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/75 p-5 backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-lg font-black text-white shadow-lg shadow-sky-500/25">
                    G
                  </div>
                  <div>
                    <h1 className="text-xl font-bold tracking-tight text-white">GhostChat</h1>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300/80">
                      telegram web
                    </p>
                  </div>
                </div>
                <button
                  aria-label="Open menu"
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
                >
                  <span className="block h-1 w-1 rounded-full bg-current shadow-[0_6px_0_currentColor,0_12px_0_currentColor]" />
                </button>
              </div>

              <label className="mt-5 flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/85 px-4 py-3 text-sm text-slate-400 shadow-inner shadow-black/20 transition focus-within:border-sky-400/50 focus-within:bg-slate-900 focus-within:text-slate-200">
                <span>⌕</span>
                <input
                  aria-label="Search chats"
                  placeholder="Search anonymous chats"
                  className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-500"
                />
              </label>
            </div>

            <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
              {chats.map((chat) => (
                <button
                  key={chat.name}
                  className={`group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition duration-200 ${
                    chat.active
                      ? "bg-sky-500/15 text-white ring-1 ring-sky-400/25"
                      : "text-slate-300 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-lg font-bold ring-1 ring-white/10 group-hover:ring-sky-400/25">
                    {chat.name.slice(0, 1)}
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.85)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate font-semibold">{chat.name}</p>
                      <span className="text-xs text-slate-500">now</span>
                    </div>
                    <p className="truncate text-sm text-slate-400">{chat.preview}</p>
                  </div>
                  {chat.unread > 0 && (
                    <span className="rounded-full bg-sky-500 px-2 py-0.5 text-xs font-bold text-white shadow-lg shadow-sky-500/25">
                      {chat.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex min-h-0 flex-col bg-[linear-gradient(180deg,rgba(15,23,42,0.68),rgba(2,6,23,0.82)),radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_35%)]">
            <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950/65 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-xl shadow-lg shadow-sky-500/20 ring-1 ring-white/20">
                  👻
                  <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">GhostChat</h2>
                  <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>anonymous chat • online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 sm:flex">
                  24 online
                </div>
                <button
                  aria-label="Chat options"
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white active:scale-95"
                >
                  <span className="block h-1 w-1 rounded-full bg-current shadow-[0_6px_0_currentColor,0_12px_0_currentColor]" />
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto scroll-smooth px-3 py-5 sm:px-6 lg:px-8">
              <div className="mx-auto mb-4 w-fit rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-center text-xs font-medium text-slate-400 shadow-lg shadow-black/15 backdrop-blur-xl">
                Today • messages are frontend-only
              </div>

              {messages.map((message) => (
                <article
                  key={message.id}
                  className={`group flex animate-message-in gap-2 ${message.me ? "justify-end" : "justify-start"}`}
                >
                  {!message.me && (
                    <div className="mt-5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-200 ring-1 ring-white/10 sm:flex">
                      {message.user.slice(0, 1)}
                    </div>
                  )}

                  <div className={`max-w-[86%] sm:max-w-[72%] lg:max-w-[62%] ${message.me ? "text-right" : "text-left"}`}>
                    <div className={`mb-1 flex items-center gap-2 px-2 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 ${message.me ? "justify-end" : "justify-start"}`}>
                      <span>{message.user}</span>
                    </div>
                    <div
                      className={`relative rounded-[1.35rem] px-4 py-3 text-sm leading-6 shadow-xl transition duration-300 group-hover:-translate-y-0.5 sm:text-[15px] ${
                        message.me
                          ? "rounded-br-md bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sky-950/35"
                          : "rounded-bl-md border border-white/10 bg-slate-800/90 text-slate-100 shadow-black/25 backdrop-blur"
                      }`}
                    >
                      <p>{message.text}</p>
                      <time className={`mt-1 block text-[11px] ${message.me ? "text-sky-100/75" : "text-slate-500"}`}>
                        {message.time}
                      </time>
                    </div>
                  </div>
                </article>
              ))}

              <div className="flex animate-message-in items-end gap-2 pt-2">
                <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-200 ring-1 ring-white/10 sm:flex">
                  N
                </div>
                <div className="rounded-[1.35rem] rounded-bl-md border border-white/10 bg-slate-800/85 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur">
                  <p className="mb-1 px-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                    NullByte is typing
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-typing-dot rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-typing-dot rounded-full bg-slate-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-typing-dot rounded-full bg-slate-400 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="sticky bottom-0 z-20 border-t border-white/10 bg-slate-950/70 px-3 py-3 shadow-[0_-18px_55px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:px-5"
            >
              <div className="mx-auto flex max-w-4xl items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 p-2 shadow-inner shadow-black/25 transition duration-300 focus-within:border-sky-400/60 focus-within:bg-slate-900 focus-within:shadow-[0_0_0_4px_rgba(14,165,233,0.10)]">
                <button
                  type="button"
                  aria-label="Attach file"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-slate-100 sm:flex"
                >
                  +
                </button>
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Message GhostChat"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 sm:text-base"
                />
                <button
                  type="submit"
                  disabled={!draft.trim()}
                  aria-label="Send message"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/25 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-400/30 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none disabled:hover:translate-y-0"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12L3 5.5C2.8 4.82 3.48 4.23 4.12 4.51L21 12L4.12 19.49C3.48 19.77 2.8 19.18 3 18.5L5 12ZM5 12H12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
