import { Palette, Target, TrendingUp } from 'lucide-react';
import { useServices } from './controller';
import type { Service } from '../../models/types';
import * as S from './style';

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  Palette,
  Target,
  TrendingUp,
};

const renderIcon = (iconName: string) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon size={28} /> : null;
};

export const ServicesView: React.FC = () => {
  const { ref, inView, services } = useServices();

  return (
    <S.ServicesSection id="services">
      <S.ServicesContainer>
        <S.ServicesHeader>
          <S.SectionTitle>Minhas Entregas</S.SectionTitle>
        </S.ServicesHeader>

        <S.ServicesGrid ref={ref}>
          {services.map((service: Service, index: number) => (
            <S.ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <S.ServiceIconWrapper>
                {renderIcon(service.icon)}
              </S.ServiceIconWrapper>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.ServicesContainer>
    </S.ServicesSection>
  );
};
