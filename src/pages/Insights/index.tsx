import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  padding: 6.5rem 1.25rem 2rem;
`;

const Container = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
`;

const Header = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: clamp(1.3rem, 2.4vw, 1.8rem);
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.35rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.92rem;
  }
`;

const Alert = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 0.75rem;
  background: ${({ theme }) =>
    theme.colors.background === '#0A0A0A' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  padding: 0.85rem 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FrameWrap = styled.div`
  width: 100%;
  height: min(80vh, 56.25rem);
  border-radius: 0.75rem;
  overflow: hidden;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

export const InsightsPage: React.FC = () => {
  const location = useLocation();

  const embedUrl = import.meta.env.VITE_INSIGHTS_EMBED_URL;
  const accessKey = import.meta.env.VITE_INSIGHTS_ACCESS_KEY;

  const hasAccess = useMemo(() => {
    if (!accessKey) return true;
    const params = new URLSearchParams(location.search);
    return params.get('key') === accessKey;
  }, [accessKey, location.search]);

  if (!hasAccess) {
    return (
      <Page>
        <Container>
          <Header>
            <h1>Painel restrito</h1>
            <p>Esta rota usa chave de acesso.</p>
          </Header>
          <Alert>Use a URL com o parametro de chave para abrir o dashboard.</Alert>
        </Container>
      </Page>
    );
  }

  if (!embedUrl) {
    return (
      <Page>
        <Container>
          <Header>
            <h1>Painel de metricas</h1>
            <p>Configure a URL de embed no Vercel para visualizar os dados.</p>
          </Header>
          <Alert>
            Defina a variavel VITE_INSIGHTS_EMBED_URL com a URL de incorporacao do Looker Studio.
          </Alert>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <Header>
          <h1>Painel unificado de metricas</h1>
          <p>Dados de eventos e conversoes em um unico lugar.</p>
        </Header>
        <FrameWrap>
          <Frame
            src={embedUrl}
            title="Painel de metricas"
            loading="lazy"
            allowFullScreen
          />
        </FrameWrap>
      </Container>
    </Page>
  );
};
