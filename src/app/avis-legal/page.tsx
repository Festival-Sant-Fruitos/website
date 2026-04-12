import type { Metadata } from 'next';
import Container from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Avís Legal',
  description: 'Avís legal, política de privacitat i cookies del Festival Internacional de Música Clàssica.',
};

export default function AvisLegalPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <h1 className="text-[3rem] md:text-[4rem] font-serif font-medium text-white leading-[1.05]">
            Avís Legal
          </h1>
          <p className="text-sm text-white/40 mt-3">
            Última actualització: Gener 2025
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <div className="max-w-[720px]">
            {/* Identity */}
            <div className="mb-[60px]">
              <h2 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-5">
                1. Identificació del titular
              </h2>
              <div className="border border-[var(--color-border)] p-6">
                <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
                  <li><strong className="text-[var(--color-primary)]">Titular:</strong> Associació MEMORIAL EDUARD CASAJOANA</li>
                  <li><strong className="text-[var(--color-primary)]">CIF:</strong> G-62580303</li>
                  <li><strong className="text-[var(--color-primary)]">Domicili:</strong> C/ Sallent, 1 2n 2ª – 08272 Sant Fruitós de Bages</li>
                  <li><strong className="text-[var(--color-primary)]">Email:</strong> festivalsantfruitos@gmail.com</li>
                </ul>
              </div>
            </div>

            {/* Privacy */}
            <div className="mb-[60px]">
              <h2 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-5">
                2. Política de privacitat
              </h2>
              <div className="space-y-4 text-base text-[var(--color-text-muted)] leading-[1.6]">
                <p>
                  D&apos;acord amb el Reglament General de Protecció de Dades (RGPD) (UE) 2016/679
                  i la Llei Orgànica 3/2018 de Protecció de Dades Personals i Garantia dels
                  Drets Digitals (LOPDGDD), us informem del següent:
                </p>

                <h3 className="text-lg font-medium text-[var(--color-primary)] pt-4">
                  2.1. Responsable del tractament
                </h3>
                <p>
                  L&apos;Associació MEMORIAL EDUARD CASAJOANA (CIF: G-62580303)
                  és responsable del tractament de les dades personals que ens proporcioneu.
                </p>

                <h3 className="text-lg font-medium text-[var(--color-primary)] pt-4">
                  2.2. Finalitat del tractament
                </h3>
                <p>
                  Les dades personals recollides a través del formulari de subscripció es
                  tractaran amb la finalitat d&apos;enviar informació sobre el festival, programació,
                  venda d&apos;entrades i activitats relacionades.
                </p>

                <h3 className="text-lg font-medium text-[var(--color-primary)] pt-4">
                  2.3. Base jurídica
                </h3>
                <p>
                  El tractament de les vostres dades es basa en el consentiment que ens
                  proporcioneu en subscriure-us al butlletí informatiu o contactar-nos
                  a través dels canals disponibles.
                </p>

                <h3 className="text-lg font-medium text-[var(--color-primary)] pt-4">
                  2.4. Drets dels interessats
                </h3>
                <p>
                  Podeu exercir els vostres drets d&apos;accés, rectificació, supressió,
                  limitació del tractament, portabilitat i oposició enviant un correu
                  electrònic a <a href="mailto:festivalsantfruitos@gmail.com" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">festivalsantfruitos@gmail.com</a>.
                </p>
                <p>
                  Així mateix, teniu dret a presentar una reclamació davant l&apos;Autoritat
                  Catalana de Protecció de Dades (apdcat.gencat.cat) si considereu que
                  el tractament no s&apos;ajusta a la normativa vigent.
                </p>

                <h3 className="text-lg font-medium text-[var(--color-primary)] pt-4">
                  2.5. Conservació de les dades
                </h3>
                <p>
                  Les dades es conservaran mentre es mantingui la relació o no se&apos;n sol·liciti
                  la supressió. En tot cas, es conservaran durant els terminis legalment establerts.
                </p>
              </div>
            </div>

            <hr className="mb-[60px]" />

            {/* Cookies */}
            <div className="mb-[60px]">
              <h2 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-5">
                3. Política de cookies
              </h2>
              <div className="space-y-4 text-base text-[var(--color-text-muted)] leading-[1.6]">
                <p>
                  Aquest lloc web utilitza cookies tècniques necessàries per al
                  correcte funcionament del lloc (com el registre de les vostres preferències
                  de cookies).
                </p>
                <p>
                  A la pàgina d&apos;ubicació, s&apos;utilitza un mapa incrustat de Google Maps
                  que pot establir cookies de tercers. Aquesta funcionalitat només es carrega
                  amb el vostre consentiment explícit. No s&apos;utilitzen cookies analítiques
                  ni publicitàries.
                </p>
                <p>
                  Podeu modificar o retirar el vostre consentiment en qualsevol moment
                  fent clic a <strong className="text-[var(--color-primary)]">&laquo;Preferències de cookies&raquo;</strong>{' '}
                  al peu de pàgina. El consentiment es renova automàticament cada 12 mesos.
                </p>
              </div>
            </div>

            <hr className="mb-[60px]" />

            {/* Terms */}
            <div className="mb-[60px]">
              <h2 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-5">
                4. Condicions d&apos;ús
              </h2>
              <div className="space-y-4 text-base text-[var(--color-text-muted)] leading-[1.6]">
                <p>
                  L&apos;accés i ús d&apos;aquest lloc web implica l&apos;acceptació de les presents
                  condicions. L&apos;associació es reserva el dret de modificar-les en qualsevol moment.
                </p>
                <p>
                  Tots els continguts d&apos;aquest lloc web (textos, imatges, dissenys, logotips)
                  són propietat de l&apos;Associació Música Clàssica Memorial Eduard Casajoana
                  o dels seus legítims titulars i estan protegits per les lleis de propietat
                  intel·lectual.
                </p>
              </div>
            </div>

            <hr className="mb-[60px]" />

            {/* External Links */}
            <div className="mb-[60px]">
              <h2 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-5">
                5. Enllaços externs
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.6]">
                Aquest lloc web pot contenir enllaços a pàgines externes (com CodeTickets
                per a la venda d&apos;entrades). L&apos;associació no es fa responsable dels
                continguts, polítiques de privacitat o pràctiques d&apos;aquests llocs web
                de tercers.
              </p>
            </div>

            <hr className="mb-[60px]" />

            {/* Applicable Law */}
            <div>
              <h2 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-5">
                6. Legislació aplicable
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.6]">
                Les presents condicions es regeixen per la legislació espanyola.
                Per a qualsevol controvèrsia seran competents els jutjats i tribunals
                de Manresa (Barcelona).
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
