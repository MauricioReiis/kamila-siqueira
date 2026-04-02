import { useFooter } from './controller';
import { trackButtonClick } from '../../lib/analytics';
import * as S from './style';

export const FooterView: React.FC = () => {
  const { currentYear, scrollToTop, handleNavClick, navLinks } = useFooter();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterLogo href="/" onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          trackButtonClick({ label: 'footer_cta_logo', location: 'footer', text: 'Kamila Siqueira', href: '#home' });
          handleNavClick('#home');
        }}>
          Kamila <span>Siqueira</span>
        </S.FooterLogo>

        <S.FooterTagline>Estrategista de Marketing</S.FooterTagline>

        <S.FooterLinks>
          {navLinks.map((link) => (
            <S.FooterLink
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                trackButtonClick({
                  label: `footer_cta_${link.id}`,
                  location: 'footer',
                  text: link.label,
                  href: link.href,
                });
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </S.FooterLink>
          ))}
        </S.FooterLinks>

        <S.Divider />

        <S.FooterBottom>
          <S.Copyright>
            &copy; {currentYear} Kamila Siqueira. Todos os direitos reservados.
          </S.Copyright>
          <S.BackToTop
            onClick={() => {
              trackButtonClick({ label: 'footer_cta_back_to_top', location: 'footer', text: 'Voltar ao topo', href: '#home' });
              scrollToTop();
            }}
            aria-label="Voltar ao topo"
          >
            Voltar ao topo &uarr;
          </S.BackToTop>
        </S.FooterBottom>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
