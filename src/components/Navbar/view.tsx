import { Sun, Moon } from 'lucide-react';
import { navLinks } from '../../models/data';
import { useNavbar } from './controller';
import * as S from './style';

export const NavbarView: React.FC = () => {
  const {
    isHomePath,
    isScrolled,
    isMenuOpen,
    activeSection,
    handleNavClick,
    toggleMenu,
    closeMenu,
    isDark,
    toggleTheme,
  } = useNavbar();

  return (
    <>
      <S.Nav $scrolled={isScrolled} role="navigation" aria-label="Navegação principal">
        <S.NavContainer>
          <S.Logo href="/" onClick={(e: React.MouseEvent) => { e.preventDefault(); handleNavClick('#home'); }}>
            Kamila <span>Siqueira</span>
          </S.Logo>

          <S.NavLinks $isOpen={isMenuOpen}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <S.NavLink
                  href={link.href}
                  $active={isHomePath && activeSection === link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </S.NavLink>
              </li>
            ))}
          </S.NavLinks>

          <S.NavActions>
            <S.ThemeToggleButton
              onClick={toggleTheme}
              aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </S.ThemeToggleButton>

            <S.MenuButton
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {[0, 1, 2].map((index) => (
              <S.MenuLine key={index} $isOpen={isMenuOpen} $index={index} />
            ))}
          </S.MenuButton>
          </S.NavActions>
        </S.NavContainer>
      </S.Nav>
      <S.Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};
