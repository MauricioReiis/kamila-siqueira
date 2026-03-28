import { useFooter } from './controller';
import * as S from './style';

export const FooterView: React.FC = () => {
  const { currentYear, scrollToTop, handleNavClick, navLinks } = useFooter();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterLogo href="#home" onClick={() => handleNavClick('#home')}>
          Kamila <span>Siqueira</span>
        </S.FooterLogo>

        <S.FooterTagline>Eu crio marcas fortes.</S.FooterTagline>

        <S.FooterLinks>
          {navLinks.map((link) => (
            <S.FooterLink
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
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
          <S.BackToTop onClick={scrollToTop} aria-label="Voltar ao topo">
            Voltar ao topo &uarr;
          </S.BackToTop>
        </S.FooterBottom>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
