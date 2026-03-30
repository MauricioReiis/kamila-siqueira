import { Info } from 'lucide-react';
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
    isFormValid,
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
            Vamos criar algo <span>incrível.</span>
          </S.Title>
          <S.Subtitle>Preencha o formulário. Retornamos em até 3 dias úteis.</S.Subtitle>
        </S.Header>

        <S.Form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <S.FormGroup>
              <S.FormLabel>Você tem interesse em<S.RequiredAsterisk>*</S.RequiredAsterisk></S.FormLabel>
              <S.InterestGrid>
                {interestOptions.map((option) => (
                  <S.InterestChip
                    key={option.label}
                    $selected={selectedInterests.includes(option.label)}
                    onClick={(e) => { e.preventDefault(); toggleInterest(option.label); }}
                  >
                    <input
                      type="checkbox"
                      readOnly
                      checked={selectedInterests.includes(option.label)}
                      value={option.label}
                    />
                    {option.label}
                    {option.description && (
                      <S.InfoIconWrapper
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Info size={14} />
                        <S.Tooltip>{option.description}</S.Tooltip>
                      </S.InfoIconWrapper>
                    )}
                  </S.InterestChip>
                ))}
              </S.InterestGrid>
              {errors.interests && <S.FormError>{errors.interests.message}</S.FormError>}
            </S.FormGroup>
          </div>

          <S.FieldRow>
            <S.FormGroup>
              <S.FormLabel htmlFor="name">Nome<S.RequiredAsterisk>*</S.RequiredAsterisk></S.FormLabel>
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
                placeholder="Digite o nome da empresa"
                {...register('company')}
              />
            </S.FormGroup>
          </S.FieldRow>

          <S.FieldRow>
            <S.FormGroup>
              <S.FormLabel htmlFor="phone">Telefone<S.RequiredAsterisk>*</S.RequiredAsterisk></S.FormLabel>
              <S.FormInput
                id="phone"
                placeholder="Digite o número"
                {...register('phone', { required: 'Telefone é obrigatório' })}
              />
              {errors.phone && <S.FormError>{errors.phone.message}</S.FormError>}
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel htmlFor="email">E-mail<S.RequiredAsterisk>*</S.RequiredAsterisk></S.FormLabel>
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

          <S.FormGroup>
            <S.FormLabel htmlFor="socialProfile">Redes sociais (Opcional)</S.FormLabel>
            <S.FormInput
              id="socialProfile"
              placeholder="Ex.: @kamilasiqueira ou linkedin.com/in/..."
              {...register('socialProfile')}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.BudgetDisplay>
              Estimativa de Orçamento: {' '}
              <span>{formatCurrency(budgetValue)}</span>
            </S.BudgetDisplay>
            <S.BudgetWrapper>
              <S.RangeInput
                type="range"
                min={1000}
                max={100000}
                step={500}
                value={budgetValue}
                onChange={(e) => setBudgetValue(Number(e.target.value))}
              />
              <S.RangeLabels>
                <span>R$ 1.000</span>
                <span>R$ 100.000+</span>
              </S.RangeLabels>
            </S.BudgetWrapper>
          </S.FormGroup>

          {/* Objetivos */}
          <S.FormGroup>
            <S.FormLabel htmlFor="goals">Seus objetivos<S.RequiredAsterisk>*</S.RequiredAsterisk></S.FormLabel>
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
            <S.SubmitButton type="submit" disabled={!isFormValid}>Enviar</S.SubmitButton>
          </S.SubmitRow>
        </S.Form>
      </S.Container>
    </S.ProposalPage>
  );
};
