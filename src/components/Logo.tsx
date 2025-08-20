type Props = { className?: string; size?: number; showText?: boolean };

export default function Logo({ className, size = 48, showText = true }: Props) {
	return (
		<div className={`flex items-center gap-2 ${className ?? ''}`}>
			<svg
				width={size}
				height={size}
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				className="shrink-0 overflow-visible drop-shadow-[0_0_10px_rgba(16,185,129,0.16)]"
			>
				<defs>
					{/* Paleta monocromática (emerald/teal) */}
					<radialGradient id="primaryGradient" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#34D399" stopOpacity="1" />
						<stop offset="100%" stopColor="#10B981" stopOpacity="1" />
					</radialGradient>

					{/* Órbitas (mesma cor com baixa opacidade) */}
					<path id="orbit1" d="M 160,100 A 45,30 0 0,1 100,130 A 45,30 0 0,1 40,100 A 45,30 0 0,1 100,70 A 45,30 0 0,1 160,100 Z" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1"/>
					<path id="orbit2" d="M 155,100 A 40,20 45 0,1 120,140 A 40,20 45 0,1 70,100 A 40,20 45 0,1 120,60 A 40,20 45 0,1 155,100 Z" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1"/>
					<path id="orbit3" d="M 130,100 A 22,30 0 0,0 100,130 A 22,30 0 0,0 70,100 A 22,30 0 0,0 100,70 A 22,30 0 0,0 130,100 Z" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1"/>
					<path id="orbit4" d="M 165,100 A 50,18 30 0,0 115,150 A 50,18 30 0,0 85,100 A 50,18 30 0,0 115,50 A 50,18 30 0,0 165,100 Z" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1"/>
					<path id="orbit5" d="M 140,100 A 30,18 60 0,1 100,130 A 30,18 60 0,1 60,100 A 30,18 60 0,1 100,70 A 30,18 60 0,1 140,100 Z" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1"/>
					<path id="orbit6" d="M 125,100 A 20,15 0 0,1 100,115 A 20,15 0 0,1 75,100 A 20,15 0 0,1 100,85 A 20,15 0 0,1 125,100 Z" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1"/>
				</defs>

				{/* Núcleo */}
				<circle cx="100" cy="100" r="20" fill="url(#primaryGradient)" stroke="#FFFFFF" strokeWidth="2" opacity="0.95">
					<animate attributeName="r" values="20;24;20;22;20" dur="12s" repeatCount="indefinite" />
					<animate attributeName="opacity" values="0.95;1;0.95;0.98;0.95" dur="12s" repeatCount="indefinite" />
				</circle>

				{/* Satélites (mesmo gradiente, opacidades diferentes) */}
				<circle r="8" fill="url(#primaryGradient)" opacity="0.9">
					<animateMotion dur="12s" repeatCount="indefinite" path="M 160,100 A 45,30 0 0,1 100,130 A 45,30 0 0,1 40,100 A 45,30 0 0,1 100,70 A 45,30 0 0,1 160,100 Z"/>
					<animate attributeName="opacity" values="0.9;0.6;0.9" dur="4s" repeatCount="indefinite"/>
					<animate attributeName="r" values="8;10;8" dur="6s" repeatCount="indefinite"/>
				</circle>

				<circle r="7" fill="url(#primaryGradient)" opacity="0.75">
					<animateMotion dur="18s" repeatCount="indefinite" path="M 155,100 A 40,20 45 0,1 120,140 A 40,20 45 0,1 70,100 A 40,20 45 0,1 120,60 A 40,20 45 0,1 155,100 Z"/>
					<animate attributeName="opacity" values="0.75;0.45;0.75" dur="3s" repeatCount="indefinite"/>
					<animate attributeName="r" values="7;9;7" dur="9s" repeatCount="indefinite"/>
				</circle>

				<circle r="6" fill="url(#primaryGradient)" opacity="0.7">
					<animateMotion dur="8s" repeatCount="indefinite" path="M 130,100 A 22,30 0 0,0 100,130 A 22,30 0 0,0 70,100 A 22,30 0 0,0 100,70 A 22,30 0 0,0 130,100 Z"/>
					<animate attributeName="opacity" values="0.7;0.35;0.7" dur="2.67s" repeatCount="indefinite"/>
					<animate attributeName="r" values="6;8;6" dur="4s" repeatCount="indefinite"/>
				</circle>

				<circle r="9" fill="url(#primaryGradient)" opacity="0.8">
					<animateMotion dur="24s" repeatCount="indefinite" path="M 165,100 A 50,18 30 0,0 115,150 A 50,18 30 0,0 85,100 A 50,18 30 0,0 115,50 A 50,18 30 0,0 165,100 Z"/>
					<animate attributeName="opacity" values="0.8;0.5;0.8" dur="8s" repeatCount="indefinite"/>
					<animate attributeName="r" values="9;11;9" dur="12s" repeatCount="indefinite"/>
				</circle>

				<circle r="5" fill="url(#primaryGradient)" opacity="0.65">
					<animateMotion dur="15s" repeatCount="indefinite" path="M 140,100 A 30,18 60 0,1 100,130 A 30,18 60 0,1 60,100 A 30,18 60 0,1 100,70 A 30,18 60 0,1 140,100 Z"/>
					<animate attributeName="opacity" values="0.65;0.35;0.65" dur="5s" repeatCount="indefinite"/>
					<animate attributeName="r" values="5;7;5" dur="7.5s" repeatCount="indefinite"/>
				</circle>

				<circle r="4" fill="url(#primaryGradient)" opacity="0.6">
					<animateMotion dur="6s" repeatCount="indefinite" path="M 125,100 A 20,15 0 0,1 100,115 A 20,15 0 0,1 75,100 A 20,15 0 0,1 100,85 A 20,15 0 0,1 125,100 Z"/>
					<animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite"/>
					<animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
				</circle>

				{/* Rastros / linhas (mesma família de cor) */}
				<g opacity="0.15">
					<use href="#orbit1" />
					<use href="#orbit2" />
					<use href="#orbit3" />
					<use href="#orbit4" />
					<use href="#orbit5" />
					<use href="#orbit6" />
				</g>

				<g opacity="0.2">
					<line x1="100" y1="100" x2="155" y2="100" stroke="#10B981" strokeWidth="0.5">
						<animate attributeName="opacity" values="0;0.35;0" dur="12s" repeatCount="indefinite" />
						<animateTransform attributeName="transform" type="rotate" values="0 100 100;360 100 100" dur="12s" repeatCount="indefinite" />
					</line>
					<line x1="100" y1="100" x2="165" y2="100" stroke="#10B981" strokeWidth="0.5">
						<animate attributeName="opacity" values="0;0.25;0" dur="18s" repeatCount="indefinite" />
						<animateTransform attributeName="transform" type="rotate" values="0 100 100;360 100 100" dur="18s" repeatCount="indefinite" />
					</line>
				</g>
			</svg>

			{showText && <span className="text-white font-semibold text-lg">Plurelo</span>}
		</div>
	);
}