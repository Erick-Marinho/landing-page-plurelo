import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Lang = 'pt-BR' | 'en-US';
type Key =
	| 'nav.about'
	| 'nav.services'
	| 'nav.howItWorks'
	| 'nav.testimonials'
	| 'cta.contact';

const DICT: Record<Lang, Record<Key, string>> = {
	'pt-BR': {
		'nav.about': 'Sobre Nós',
		'nav.services': 'Serviços',
		'nav.howItWorks': 'Como Funciona',
		'nav.testimonials': 'Depoimentos',
		'cta.contact': 'Fale Conosco',
	},
	'en-US': {
		'nav.about': 'About Us',
		'nav.services': 'Services',
		'nav.howItWorks': 'How it Works',
		'nav.testimonials': 'Testimonials',
		'cta.contact': 'Contact Now',
	},
};

function detectLang(): Lang {
	try {
		const saved = localStorage.getItem('lang');
		if (saved === 'pt-BR' || saved === 'en-US') return saved;
	} catch {}
	return navigator.language?.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<Lang>(detectLang());
	useEffect(() => {
		try {
			localStorage.setItem('lang', lang);
		} catch {}
	}, [lang]);

	const t = useMemo(() => (k: Key) => DICT[lang][k], [lang]);
	return (
		<I18nContext.Provider value={{ lang, setLang, t }}>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const ctx = useContext(I18nContext);
	if (!ctx) throw new Error('useI18n must be used within I18nProvider');
	return ctx;
}
