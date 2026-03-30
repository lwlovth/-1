export default function Footer() {
  return (
    <footer className="bg-surface-bg border-t border-surface-border py-10">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-black text-xs">
            Y
          </span>
          <span className="text-body-sm font-bold text-ink-primary">
            YJ<span className="text-brand-primary">.</span>dev
          </span>
        </div>

        <p className="text-body-sm text-ink-muted text-center">
          © 2025 YJ.dev — 한·일·영 3개 국어 웹 솔루션
        </p>

        <div className="flex items-center gap-4 text-body-sm text-ink-muted">
          <span className="lang-tag">KO</span>
          <span className="lang-tag">JA</span>
          <span className="lang-tag">EN</span>
        </div>
      </div>
    </footer>
  );
}
