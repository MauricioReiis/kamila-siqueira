import { Info, X, Heart } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useProposal } from "./controller";
import { formatCurrency as fmtBudget } from "./message";
import * as S from "./style";

export const ProposalView: React.FC = () => {
  const {
    budgetValue,
    setBudgetValue,
    formatCurrency,
    register,
    onSubmit,
    errors,
    isFormValid,
    interestOptions,
    referralOptions,
    selectedInterests,
    toggleInterest,
    phoneValue,
    handlePhoneChange,
    showConfirmModal,
    pendingData,
    confirmSubmit,
    cancelSubmit,
    showThankYou,
    closeThankYou,
  } = useProposal();

  return (
    <S.ProposalPage>
      <S.Container>
        <S.Header>
          <S.Title>
            Pronto para vender <span>mais?</span>
          </S.Title>
          <S.Subtitle>
            Preencha o formulário e retorno em até 1 dia útil.
          </S.Subtitle>
        </S.Header>

        <S.Form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <S.FormGroup>
              <S.FormLabel>
                Você tem interesse em<S.RequiredAsterisk>*</S.RequiredAsterisk>
              </S.FormLabel>
              <S.InterestDesktopOnly>
                <S.InterestGrid>
                  {interestOptions.map((option) => (
                    <S.InterestChip
                      key={option.label}
                      $selected={selectedInterests.includes(option.label)}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleInterest(option.label);
                      }}
                    >
                      <input
                        type="checkbox"
                        readOnly
                        checked={selectedInterests.includes(option.label)}
                        value={option.label}
                      />
                      {option.label}
                      {option.description && (
                        <S.InfoIconWrapper onClick={(e) => e.stopPropagation()}>
                          <Info size={14} />
                          <S.Tooltip>{option.description}</S.Tooltip>
                        </S.InfoIconWrapper>
                      )}
                    </S.InterestChip>
                  ))}
                </S.InterestGrid>
              </S.InterestDesktopOnly>

              <S.InterestMobileOnly>
                <S.MobileInterestList
                  role="group"
                  aria-label="Selecione os serviços de interesse"
                >
                  {interestOptions.map((option) => (
                    <S.MobileInterestOption
                      key={option.label}
                      $selected={selectedInterests.includes(option.label)}
                    >
                      <S.MobileInterestCheckbox
                        type="checkbox"
                        checked={selectedInterests.includes(option.label)}
                        onChange={() => toggleInterest(option.label)}
                      />
                      <S.MobileInterestText>
                        <S.MobileInterestTitle>
                          {option.label}
                        </S.MobileInterestTitle>
                        {option.description && (
                          <S.MobileInterestDescription>
                            {option.description}
                          </S.MobileInterestDescription>
                        )}
                      </S.MobileInterestText>
                    </S.MobileInterestOption>
                  ))}
                </S.MobileInterestList>
              </S.InterestMobileOnly>
              {errors.interests && (
                <S.FormError>{errors.interests.message}</S.FormError>
              )}
            </S.FormGroup>
          </div>

          <S.FieldRow>
            <S.FormGroup>
              <S.FormLabel htmlFor="name">
                Nome<S.RequiredAsterisk>*</S.RequiredAsterisk>
              </S.FormLabel>
              <S.FormInput
                id="name"
                placeholder="Digite seu nome"
                {...register("name", { required: "Nome é obrigatório" })}
              />
              {errors.name && <S.FormError>{errors.name.message}</S.FormError>}
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel htmlFor="company">Nome da Empresa</S.FormLabel>
              <S.FormInput
                id="company"
                placeholder="Digite o nome da empresa"
                {...register("company")}
              />
            </S.FormGroup>
          </S.FieldRow>

          <S.FieldRow>
            <S.FormGroup>
              <S.FormLabel htmlFor="phone">
                Celular<S.RequiredAsterisk>*</S.RequiredAsterisk>
              </S.FormLabel>
              <S.FormInput
                id="phone"
                placeholder="Digite seu número"
                inputMode="tel"
                value={phoneValue}
                onChange={handlePhoneChange}
              />
              {errors.phone && (
                <S.FormError>{errors.phone.message}</S.FormError>
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel htmlFor="email">
                E-mail<S.RequiredAsterisk>*</S.RequiredAsterisk>
              </S.FormLabel>
              <S.FormInput
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "E-mail inválido",
                  },
                })}
              />
              {errors.email && (
                <S.FormError>{errors.email.message}</S.FormError>
              )}
            </S.FormGroup>
          </S.FieldRow>

          <S.FormGroup>
            <S.FormLabel htmlFor="socialProfile">
              Redes sociais (Opcional)
            </S.FormLabel>
            <S.FormInput
              id="socialProfile"
              placeholder="Ex.: @kamilasiqueira ou linkedin.com/in/..."
              {...register("socialProfile")}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.BudgetDisplay>
              Estimativa de Orçamento:{" "}
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
            <S.FormLabel htmlFor="goals">
              Seus objetivos<S.RequiredAsterisk>*</S.RequiredAsterisk>
            </S.FormLabel>
            <S.FormTextarea
              id="goals"
              placeholder="Digite o texto"
              {...register("goals", { required: "Objetivos são obrigatórios" })}
            />
            {errors.goals && <S.FormError>{errors.goals.message}</S.FormError>}
          </S.FormGroup>

          {/* Como nos encontrou */}
          <S.FormGroup>
            <S.FormLabel htmlFor="referral">
              Como nos encontrou (Opcional)
            </S.FormLabel>
            <S.FormSelect id="referral" {...register("referral")}>
              <option value="">Escolha uma opção</option>
              {referralOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </S.FormSelect>
          </S.FormGroup>

          <S.SubmitRow>
            <S.SubmitButton type="submit" disabled={!isFormValid}>
              Quero começar
            </S.SubmitButton>
          </S.SubmitRow>
        </S.Form>
      </S.Container>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && pendingData && (
          <S.ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={cancelSubmit}
          >
            <S.ModalCard
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <S.ModalHeader>
                <h3>Confirmar envio da proposta</h3>
                <S.ModalCloseButton onClick={cancelSubmit}>
                  <X size={18} />
                </S.ModalCloseButton>
              </S.ModalHeader>

              <S.ModalDivider />

              <S.ModalSection>
                <S.ModalSectionTitle>Dados do cliente</S.ModalSectionTitle>
                <S.ModalField>
                  <strong>Nome:</strong> {pendingData.name}
                </S.ModalField>
                {pendingData.company && (
                  <S.ModalField>
                    <strong>Empresa:</strong> {pendingData.company}
                  </S.ModalField>
                )}
                <S.ModalField>
                  <strong>Celular:</strong> {pendingData.phone}
                </S.ModalField>
                <S.ModalField>
                  <strong>E-mail:</strong> {pendingData.email}
                </S.ModalField>
                {pendingData.socialProfile && (
                  <S.ModalField>
                    <strong>Redes sociais:</strong> {pendingData.socialProfile}
                  </S.ModalField>
                )}
              </S.ModalSection>

              <S.ModalDivider />

              <S.ModalSection>
                <S.ModalSectionTitle>Serviços de interesse</S.ModalSectionTitle>
                <S.ModalChipList>
                  {(pendingData.interests ?? []).map((i) => (
                    <S.ModalChip key={i}>{i}</S.ModalChip>
                  ))}
                </S.ModalChipList>
              </S.ModalSection>

              {pendingData.goals && (
                <>
                  <S.ModalDivider />
                  <S.ModalSection>
                    <S.ModalSectionTitle>Objetivos</S.ModalSectionTitle>
                    <S.ModalField>{pendingData.goals}</S.ModalField>
                  </S.ModalSection>
                </>
              )}

              <S.ModalDivider />

              <S.ModalSection>
                <S.ModalSectionTitle>Orçamento estimado</S.ModalSectionTitle>
                <S.ModalField>{fmtBudget(budgetValue)}</S.ModalField>
              </S.ModalSection>

              {pendingData.referral && (
                <>
                  <S.ModalDivider />
                  <S.ModalSection>
                    <S.ModalSectionTitle>Como nos conheceu</S.ModalSectionTitle>
                    <S.ModalField>{pendingData.referral}</S.ModalField>
                  </S.ModalSection>
                </>
              )}

              <S.ModalDivider />

              <S.ModalActions>
                <S.ModalButtonSecondary onClick={cancelSubmit}>
                  Revisar
                </S.ModalButtonSecondary>
                <S.ModalButtonPrimary onClick={confirmSubmit}>
                  Enviar via WhatsApp
                </S.ModalButtonPrimary>
              </S.ModalActions>
            </S.ModalCard>
          </S.ModalOverlay>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <S.ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeThankYou}
          >
            <S.ModalCard
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <S.ThankYouContent>
                <S.ThankYouIcon>
                  <Heart size={22} />
                </S.ThankYouIcon>
                <S.ThankYouTitle>Proposta enviada com sucesso!</S.ThankYouTitle>
                <S.ThankYouText>
                  Agradecemos a sua confiança e preferência. Sua proposta já
                  está sendo analisada pela nossa equipe. Retornaremos em até 1
                  dia útil com os próximos passos para o seu projeto.
                </S.ThankYouText>
              </S.ThankYouContent>

              <S.ModalActions style={{ justifyContent: "center" }}>
                <S.ModalButtonPrimary onClick={closeThankYou}>
                  Fechar
                </S.ModalButtonPrimary>
              </S.ModalActions>
            </S.ModalCard>
          </S.ModalOverlay>
        )}
      </AnimatePresence>
    </S.ProposalPage>
  );
};
