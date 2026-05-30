import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { useEffect, useState } from 'react';
import MinecraftIcon from './components/MinecraftIcon';
import LanguageToggle from './components/LanguageToggle';
import {
    DEFAULT_LANGUAGE,
    HOME_CONTENT,
    LANGUAGE_STORAGE_KEY,
    type LanguageCode,
    isLanguageCode,
} from './content';

function App() {
    const [language, setLanguage] = useState<LanguageCode>(() => {
        try {
            const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
            return isLanguageCode(stored) ? stored : DEFAULT_LANGUAGE;
        } catch {
            return DEFAULT_LANGUAGE;
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(10, 10, 10, 0.95)';
                    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.background = 'rgba(10, 10, 10, 0.85)';
                    header.style.boxShadow = 'none';
                    header.style.padding = '1rem 0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        try {
            window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        } catch {
            // Language switching still works for the current session.
        }
    }, [language]);

    const content = HOME_CONTENT[language];

    return (
        <Router>
            <div id="root-container" className="min-h-screen flex flex-col bg-bg-color text-text-main font-sans">
                {/* Navigation */}
                <header className="fixed w-full top-0 z-50 transition-all duration-300 border-b border-card-border bg-[rgba(10,10,10,0.85)] backdrop-blur-md py-4">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex justify-between items-center w-full">
                        <Link to="/" className="flex items-center gap-3 text-2xl font-cinzel font-bold text-text-main no-underline tracking-wider">
                            <img src="/icon.webp" alt="Zeus" className="w-8 h-8 object-contain" />
                            ZEUS
                        </Link>
                        <div className="flex items-center gap-3">
                          <nav className="hidden md:flex gap-8 items-center">
                            <Link to="/" className="text-text-sec hover:text-text-main no-underline text-[0.95rem] font-medium transition-colors">{content.nav.features}</Link>
                            <Link to="/docs" className="text-text-sec hover:text-text-main no-underline text-[0.95rem] font-medium transition-colors">{content.nav.docs}</Link>
                            <a href="https://github.com/zeus-anticheat/zeus_anticheat_mc" target="_blank" rel="noopener noreferrer" className="text-text-sec hover:text-text-main no-underline text-[0.95rem] font-medium transition-colors">
                                <i className="fa-brands fa-github mr-1"></i> {content.nav.github}
                            </a>
                            <a href="/#operations" className="bg-white/5 text-text-main border border-card-border backdrop-blur-sm px-4 py-2 rounded-lg text-[0.9rem] font-semibold hover:bg-white/10 hover:border-text-sec transition-all">
                                {content.nav.evaluation}
                            </a>
                          </nav>
                          <LanguageToggle language={language} onChange={setLanguage} />
                        </div>
                    </div>
                </header>

                <main className="grow pt-20">
                    <Routes>
                        <Route path="/" element={<Home language={language} />} />
                        <Route path="/docs/*" element={<Docs language={language} />} />
                        <Route path="/terms" element={<Terms language={language} />} />
                        <Route path="/privacy" element={<Privacy language={language} />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="border-t border-card-border py-12 bg-[#050505] mt-20 mc-pixel-bg">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
                            <div>
                                <Link to="/" className="flex items-center gap-3 text-xl font-cinzel font-bold text-text-sec no-underline tracking-wider mb-4">
                                    <img src="/icon.webp" alt="Zeus" className="w-7 h-7 object-contain opacity-80" />
                                    ZEUS PLATFORM
                                </Link>
                                <p className="text-text-sec text-[0.9rem] max-w-[300px]">
                                    {content.footer.tagline}
                                </p>
                                {/* Small decorative icons */}
                                <div className="flex gap-3 mt-6 opacity-40">
                                    <MinecraftIcon type="creeper" size={16} color="#4ADE80" />
                                    <MinecraftIcon type="diamond" size={16} color="#22d3ee" />
                                    <MinecraftIcon type="heart" size={16} color="#EF4444" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-text-main font-semibold mb-5 text-[1rem]">{content.footer.ecosystem}</h4>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-3"><a href="https://github.com/zeus-anticheat/zeus_anticheat_mc" target="_blank" rel="noopener noreferrer" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.gateway}</a></li>
                                    <li className="mb-3"><a href="https://github.com/zeus-anticheat/zeus_anticheat_mc" target="_blank" rel="noopener noreferrer" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.fabric}</a></li>
                                    <li className="mb-3"><Link to="/docs/configuration" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.backend}</Link></li>
                                    <li className="mb-3"><Link to="/docs/ui-interaction" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.dashboard}</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-text-main font-semibold mb-5 text-[1rem]">{content.footer.business}</h4>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-3"><a href="#" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.premium}</a></li>
                                    <li className="mb-3"><a href="#" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.enterprise}</a></li>
                                    <li className="mb-3"><Link to="/terms" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.terms}</Link></li>
                                    <li className="mb-3"><Link to="/privacy" className="text-text-sec hover:text-accent no-underline text-[0.9rem] transition-colors">{content.footer.links.privacy}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-sec text-[0.85rem]">
                            <p>&copy; 2026 VennDev. All rights reserved.</p>
                            <p className="flex items-center gap-2">
                                Designed with <MinecraftIcon type="heart" size={12} color="#EF4444" /> for Minecraft performance
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
