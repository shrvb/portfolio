import React from 'react';
import { Terminal, User, Hand, Mail, Command } from 'lucide-react';
import { CONTENT } from './constants/content';

function App() {
  return (
    <div className="min-h-screen bg-background text-muted-foreground p-4 md:p-8 font-mono flex items-center justify-center">
      {/* Minimal TUI Window */}
      <div className="w-full max-w-2xl border border-border bg-card shadow-2xl rounded-lg overflow-hidden flex flex-col">
        
        {/* Window Header */}
        <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium flex items-center gap-2 uppercase tracking-widest">
              <Command size={10} /> {CONTENT.SYSTEM.WINDOW_TITLE}
            </span>
          </div>
        </div>

        {/* Console Content */}
        <div className="p-6 md:p-10 min-h-[300px]">
          <div className="animate-in fade-in duration-700 space-y-8">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted border rounded-md border-border flex items-center justify-center">
                    <User size={24} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-foreground tracking-tight">
                      {CONTENT.PROFILE.NAME}
                    </h1>
                    <p className="text-xs text-muted-foreground uppercase tracking-tighter">
                      {CONTENT.PROFILE.SUBTITLE}
                    </p>
                  </div>
                </div>
              
              <div className="p-4 bg-accent border border-border rounded text-xs text-accent-foreground flex items-center gap-3">
                <Terminal size={14} />
                <span>{CONTENT.PROFILE.WIP_MESSAGE}</span>
              </div>
            </div>

              <div className="flex gap-6 pt-4">
                {CONTENT.SOCIALS.map((social) => {
                  const Icon = social.label === 'Email' ? Mail : Hand;
                  return (
                    <a 
                      key={social.label} 
                      href={social.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-xs"
                    >
                      <Icon size={14} /> {social.label}
                    </a>
                  );
                })}
              </div>

            <div className="pt-8 flex items-center gap-2 text-[10px] text-muted-foreground border-t border-border">
              <span className="text-primary font-bold">{CONTENT.SYSTEM.PROMPT}</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Window Footer */}
        <div className="bg-muted px-4 py-1 text-[9px] text-muted-foreground flex justify-between items-center border-t border-border">
          <div className="flex gap-4">
            <span>{CONTENT.SYSTEM.FOOTER_LEFT}</span>
          </div>
          <div>{CONTENT.SYSTEM.FOOTER_RIGHT}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
