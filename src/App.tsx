import { Terminal, Ghost, Command } from 'lucide-react';
import { CONTENT } from './constants/content';
import { CardContainer } from './components/ui/3d-card';
import { EncryptedText } from './components/ui/encrypted-text';
import { Cursor, CursorFollow, CursorProvider } from './components/animate-ui/components/animate/cursor';

function App() {
  return (
    <div className="min-h-screen bg-background text-muted-foreground p-4 md:p-8 font-mono flex items-center justify-center">
      {/* Minimal TUI Window */}
<CursorProvider>
  <Cursor />
  <CursorFollow>You</CursorFollow>
      
      <CardContainer className="md:w-2xl max-w-2xl sm:w-full">
      <div className="w-full max-w-2xl border border-border bg-card shadow-2xl rounded-lg overflow-hidden flex flex-col">
        {/* Window Header */}
        <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>   
            <span className={`flex items-center gap-2 text-caption`}>
              <Command size={10} /> 
               <EncryptedText
                    text={CONTENT.SYSTEM.WINDOW_TITLE}
                    encryptedClassName="text-neutral-500"
                    revealedClassName="dark:text-white text-black"
                    revealDelayMs={50}
                  />
            </span>
          </div>
        </div>

        {/* Console Content */}
        <div className="p-6 md:p-10 min-h-[300px]">
          <div className="animate-in fade-in duration-700 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                   <img className="w-12 h-12 bg-muted border rounded-md border-border flex items-center justify-center" src={CONTENT.PROFILE.IMAGE} alt="img" />
                <div>
                  <h1 className="text-h1 dark:text-white">
                    {CONTENT.PROFILE.NAME}
                  </h1>
                  <p className="text-sh1">
                    {CONTENT.PROFILE.SUBTITLE}
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-accent border border-border rounded text-xs text-accent-foreground flex items-center gap-3">
                <Terminal size={14} />
                <span className="text-body3">
                   <EncryptedText
                    text={CONTENT.PROFILE.WIP_MESSAGE}
                    encryptedClassName="text-neutral-500"
                    revealedClassName="dark:text-white text-neutral-800"
                    revealDelayMs={30}
                  />
                  </span>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              {CONTENT.SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    className="text-button"
                  >
                    <Icon size={14} /> {social.label}
                  </a>
                );
              })}
            </div>

            <div className={`pt-8 flex items-center gap-2 text-[10px] border-t border-border text-muted-foreground`}>
              <span className="text-prompt">
                <EncryptedText
                    text={CONTENT.SYSTEM.PROMPT}
                    encryptedClassName="text-neutral-500"
                    revealedClassName="dark:text-white text-black"
                    revealDelayMs={50}
                  />
              </span>
              <span className="animate-bounce">_</span>
            </div>
          </div>
        </div>

        {/* Window Footer */}
        <div className="bg-muted px-4 py-1 flex justify-between items-center border-t border-border text-footer">
          <div className="flex gap-4">
            <span>{CONTENT.SYSTEM.FOOTER_LEFT}</span>
          </div>
          <div>{CONTENT.SYSTEM.FOOTER_RIGHT}</div>
        </div>
      </div>
        </CardContainer>
</CursorProvider>
    </div>
  );
}

export default App;
