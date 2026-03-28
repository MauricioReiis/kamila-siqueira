import { useProposal } from './controller';
import * as S from './style';

export const ProposalView: React.FC = () => {
  const {
    budgetValue,
    setBudgetValue,
    formatCurrency,
    isSubmitted,
    register,
    onSubmit,
    errors,
    interestOptions,
    referralOptions,
    selectedInterests,
    toggleInterest,
  } = useProposal();

  return (
    <S.ProposalPage>
      <S.Container>
        <S.Header>
          <S.Title>
            Vamos criar algo <span>incrível.</span>{' '}
            Por favor, preencha o formulário abaixo. Responderemos em até 1 dia útil.
          </S.Title>
        </S.Header>

        <S.Form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Interesse */}
          <div>
            <S.SectionLabel>Você tem interesse em</S.SectionLabel>
            <S.InterestGrid>
              {interestOptions.map((option) => (
                <S.InterestChip
                  key={option}
                  $selected={selectedInterests.includes(option)}
                  onClick={(e) => { e.preventDefault(); toggleInterest(option); }}
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked={selectedInterests.includes(option)}
                    value={option}
                  />
                  {option}
                </S.InterestChip>
              ))}
            </S.InterestGrid>
          </div>

          {/* Nome e Empresa */}
          <S.FieldRow>
            <S.FormGroup>
              <S.FormLabel htmlFor="name">Nome</S.FormLabel>
              <S.FormInput
                id="name"
                placeholder="Digite seu nome"
                {...register('name', { required: 'Nome é obrigatório' })}
              />
              {errors.name && <S.FormError>{errors.name.message}</S.FormError>}
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel htmlFor="company">Nome da Empresa</S.FormLabel>
              <S.FormInput
                id="company"
                placeholder="Digite seu nome"
                {...register('company')}
              />
            </S.FormGroup>
          </S.FieldRow>

          {/* Telefone e E-mail */}
          <S.FieldRow>
            <S.FormGroup>
              <S.FormLabel htmlFor="phone">Telefone</S.FormLabel>
              <S.FormInput
                id="phone"
                placeholder="Digite o número"
                {...register('phone', { required: 'Telefone é obrigatório' })}
              />
              {errors.phone && <S.FormError>{errors.phone.message}</S.FormError>}
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
              <S.FormInput
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido',
                  },
                })}
              />
              {errors.email && <S.FormError>{errors.email.message}</S.FormError>}
            </S.FormGroup>
          </S.FieldRow>

          {/* Estimativa de Orçamento */}
          <S.FormGroup>
            <S.BudgetDisplay>
              Estimativa de Orçamento —{' '}
              <span>{formatCurrency(budgetValue)}</span>
            </S.BudgetDisplay>
            <S.BudgetWrapper>
              <S.RangeInput
                type="range"
                min={25000}
                max={500000}
                step={5000}
                value={budgetValue}
                onChange={(e) => setBudgetValue(Number(e.target.value))}
              />
              <S.RangeLabels>
                <span>R$ 25.000</span>
                <span>R$ 500.000+</span>
              </S.RangeLabels>
            </S.BudgetWrapper>
          </S.FormGroup>

          {/* Objetivos */}
          <S.FormGroup>
            <S.FormLabel htmlFor="goals">Seus objetivos de parceria</S.FormLabel>
            <S.FormTextarea
              id="goals"
              placeholder="Digite o texto"
              {...register('goals', { required: 'Objetivos são obrigatórios' })}
            />
            {errors.goals && <S.FormError>{errors.goals.message}</S.FormError>}
          </S.FormGroup>

          {/* Como nos encontrou */}
          <S.FormGroup>
            <S.FormLabel htmlFor="referral">Como nos encontrou (Opcional)</S.FormLabel>
            <S.FormSelect id="referral" {...register('referral')}>
              <option value="">Escolha uma opção</option>
              {referralOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </S.FormSelect>
          </S.FormGroup>

          {isSubmitted && (
            <S.SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Proposta enviada com sucesso! Entraremos em contato em breve.
            </S.SuccessMessage>
          )}

          <S.SubmitRow>
            <button type="submit">Enviar</button>
          </S.SubmitRow>
        </S.Form>
      </S.Container>
    </S.ProposalPage>
  );
};
