import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/i18n';
import Logo from './Logo';

export default function Header() {
	const { lang, setLang, t } = useI18n();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function onClick(e: MouseEvent) {
			if (!ref.current?.contains(e.target as Node)) setOpen(false);
		}
		window.addEventListener('click', onClick);
		return () => window.removeEventListener('click', onClick);
	}, []);

	const short = lang === 'pt-BR' ? 'PT' : 'EN';

	return (
		<header className="w-full py-5">
			<div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between text-left">
				<div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Logo size={56} />
                    </div>
				</div>

				<nav className="hidden md:flex items-center rounded-full border border-white/10 bg-[#121416]/80 px-1 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_6px_24px_rgba(0,0,0,0.35)]">
					<a href="#" className="px-5 py-2 rounded-full text-sm text-white/70 hover:text-white transition-colors">{t('nav.about')}</a>
					<a href="#" className="px-5 py-2 rounded-full text-sm text-white/70 hover:text-white transition-colors">{t('nav.services')}</a>
					<a href="#" className="px-5 py-2 rounded-full text-sm text-white/70 hover:text-white transition-colors">{t('nav.howItWorks')}</a>
					<a href="#" className="px-5 py-2 rounded-full text-sm text-white/70 hover:text-white transition-colors">{t('nav.testimonials')}</a>
				</nav>

				<div className="flex items-center gap-3">
					<div className="relative" ref={ref}>
						<button
							type="button"
							onClick={() => setOpen((v) => !v)}
							aria-haspopup="menu"
							aria-expanded={open}
							className="inline-flex items-center justify-center h-9 px-3 rounded-full text-sm leading-none text-white/80 bg-[#141617] border border-white/10 hover:text-white"
							title="Language"
						>
							{short}
						</button>

						{open && (
							<div role="menu" className="absolute right-0 mt-2 min-w-[160px] rounded-xl bg-[#141617] border border-white/10 p-1 shadow-2xl">
								<button
									onClick={() => { setLang('pt-BR'); setOpen(false); }}
									className={`w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white/5 ${lang === 'pt-BR' ? 'text-white' : 'text-white/80'}`}
								>
									Português (BR)
								</button>
								<button
									onClick={() => { setLang('en-US'); setOpen(false); }}
									className={`w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white/5 ${lang === 'en-US' ? 'text-white' : 'text-white/80'}`}
								>
									English (US)
								</button>
							</div>
						)}
					</div>

					<a
						href="#"
						className="relative inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium text-black bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_0_6px_rgba(16,185,129,0.16),0_12px_40px_rgba(16,185,129,0.45)] hover:brightness-110 transition"
					>
						{t('cta.contact')}
					</a>
				</div>
			</div>
		</header>
	);
}