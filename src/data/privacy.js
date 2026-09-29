/**
 * Bidiex Studio — Personal Data Processing Policy.
 *
 * Written against Colombian law (Ley 1581 de 2012 and Decreto 1377 de 2013,
 * compiled in Decreto 1074 de 2015), which is what the contact form falls
 * under: it asks Colombian mobile numbers and quotes budgets in COP.
 *
 * The policy describes what the site actually does, so it has to change when
 * the site does. Today the form stores nothing: main.js builds a WhatsApp
 * message and the visitor sends it themselves. If the form ever posts to a
 * server, a CRM or an analytics tool, sections 3, 4 and 9 stop being true.
 *
 * Spanish is the governing text. `policyKeys()` flattens both languages into
 * the legal.* keys for the i18n runtime, the same way serviceKeys() does.
 */
export const policy = {
    updated: '2026-09-28',
    es: {
        doctitle: 'Política de Tratamiento de Datos Personales — Bidiex',
        back: 'Volver al inicio',
        eyebrow: 'Legal',
        title: 'Política de Tratamiento de Datos Personales',
        lead: 'Qué datos nos das cuando nos escribes, para qué los usamos y cómo puedes consultarlos, corregirlos o pedirnos que los borremos.',
        updated: 'Última actualización: 28 de septiembre de 2026',
        intro: 'Al escribirnos desde este sitio aceptas esta política. Te recomendamos leerla antes de enviar el formulario.',
        index: 'Contenido:',
        sections: [
            {
                id: 'responsable',
                title: 'Responsable del tratamiento',
                body: [
                    'Bidiex, estudio de software con operación en Colombia, es responsable del tratamiento de los datos personales que recibe a través de este sitio web.',
                    'Para cualquier asunto relacionado con tus datos puedes escribirnos por WhatsApp al +57 312 317 4919.'
                ]
            },
            {
                id: 'marco-legal',
                title: 'Marco legal',
                body: [
                    'Esta política aplica la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y las demás normas colombianas que las modifiquen o complementen.'
                ]
            },
            {
                id: 'datos',
                title: 'Datos que recolectamos',
                body: [
                    'Solo los que tú escribes en el formulario de contacto:'
                ],
                list: [
                    'Nombre y, si lo indicas, el nombre de tu compañía',
                    'Correo electrónico y número de teléfono celular',
                    'Servicio de interés y rango de presupuesto',
                    'La descripción de tu proyecto y cómo nos conociste, si decides contarlo'
                ],
                after: [
                    'No pedimos datos sensibles ni datos de niñas, niños o adolescentes. Te pedimos que no los incluyas en la descripción de tu proyecto.'
                ]
            },
            {
                id: 'recoleccion',
                title: 'Cómo los recolectamos',
                body: [
                    'El formulario no guarda nada en nuestros servidores. Al pulsar «Enviar», tu navegador arma un mensaje con lo que escribiste y abre WhatsApp. El mensaje solo nos llega si tú decides enviarlo.',
                    'Desde ese momento la conversación y sus datos quedan en WhatsApp, un servicio de Meta Platforms que puede almacenar información fuera de Colombia bajo sus propias condiciones. Al enviar el mensaje autorizas esa transferencia.',
                    'El sitio guarda en tu navegador el idioma que eliges (español o inglés). Ese dato no te identifica y no sale de tu dispositivo. No usamos cookies de publicidad ni herramientas de analítica.'
                ]
            },
            {
                id: 'finalidades',
                title: 'Para qué los usamos',
                list: [
                    'Responder tu solicitud y entender qué necesitas',
                    'Preparar y enviarte propuestas, cotizaciones y contratos',
                    'Coordinar reuniones y dar seguimiento al proyecto',
                    'Cumplir obligaciones legales, contables y tributarias si llegamos a trabajar juntos'
                ],
                after: [
                    'No vendemos, alquilamos ni cedemos tus datos a terceros, y no te enviaremos publicidad que no hayas pedido.'
                ]
            },
            {
                id: 'derechos',
                title: 'Tus derechos',
                body: [
                    'Como titular de los datos tienes derecho a:'
                ],
                list: [
                    'Conocer, actualizar y rectificar tus datos personales',
                    'Pedir prueba de la autorización que nos diste',
                    'Saber qué uso le hemos dado a tus datos',
                    'Revocar la autorización o pedir que suprimamos tus datos, cuando no exista un deber legal o contractual de conservarlos',
                    'Acceder gratuitamente a los datos que tratamos sobre ti',
                    'Presentar quejas ante la Superintendencia de Industria y Comercio, una vez hayas agotado el trámite de consulta o reclamo con nosotros'
                ]
            },
            {
                id: 'consultas-y-reclamos',
                title: 'Cómo ejercerlos',
                body: [
                    'Escríbenos por WhatsApp al +57 312 317 4919 indicando tu nombre, el número o correo con el que nos contactaste, qué solicitas y, si es un reclamo, los hechos que lo motivan.',
                    'Consultas: las respondemos en máximo diez (10) días hábiles desde que las recibimos. Si no alcanzamos, te avisamos el motivo y la nueva fecha, que no superará cinco (5) días hábiles adicionales.',
                    'Reclamos (corrección, actualización, supresión o incumplimiento): los atendemos en máximo quince (15) días hábiles, prorrogables por ocho (8) días hábiles más con aviso previo. Si el reclamo está incompleto te pediremos lo que falta dentro de los cinco (5) días siguientes; si no lo recibimos en dos (2) meses, entenderemos que desististe.'
                ]
            },
            {
                id: 'autorizacion',
                title: 'Autorización',
                body: [
                    'Al marcar la casilla del formulario y enviarnos el mensaje nos autorizas, de forma previa, expresa e informada, a tratar tus datos según esta política. Puedes revocar esa autorización en cualquier momento por el canal indicado arriba.'
                ]
            },
            {
                id: 'conservacion',
                title: 'Conservación y seguridad',
                body: [
                    'Conservamos tus datos mientras exista una conversación o una relación comercial contigo y, después, solo el tiempo que exijan nuestras obligaciones legales. Si no llegamos a trabajar juntos, eliminamos la conversación dentro de los doce (12) meses siguientes al último contacto.',
                    'Solo el equipo de Bidiex que atiende tu solicitud tiene acceso a esa información, y la protegemos con las medidas razonables a nuestro alcance, como cuentas con acceso restringido y verificación en dos pasos.'
                ]
            },
            {
                id: 'cambios',
                title: 'Cambios a esta política',
                body: [
                    'Si cambiamos algo importante lo publicaremos en esta página con una nueva fecha de actualización. Esta versión rige desde el 28 de septiembre de 2026.'
                ]
            }
        ]
    },
    en: {
        doctitle: 'Personal Data Processing Policy — Bidiex',
        back: 'Back to home',
        eyebrow: 'Legal',
        title: 'Personal Data Processing Policy',
        lead: 'What data you give us when you write to us, what we use it for and how you can review it, correct it or ask us to delete it.',
        updated: 'Last updated: September 28, 2026',
        intro: 'By writing to us from this site you accept this policy. We recommend reading it before you send the form.',
        index: 'Contents:',
        note: 'This is a translation for convenience. The Spanish version is the one that governs.',
        sections: [
            {
                id: 'responsable',
                title: 'Data controller',
                body: [
                    'Bidiex, a software studio operating in Colombia, is responsible for the personal data it receives through this website.',
                    'For anything related to your data, message us on WhatsApp at +57 312 317 4919.'
                ]
            },
            {
                id: 'marco-legal',
                title: 'Legal framework',
                body: [
                    'This policy applies Colombian Statutory Law 1581 of 2012, Decree 1377 of 2013 (compiled in Decree 1074 of 2015) and any Colombian rules that amend or supplement them.'
                ]
            },
            {
                id: 'datos',
                title: 'Data we collect',
                body: [
                    'Only what you type into the contact form:'
                ],
                list: [
                    'Your name and, if you give it, your company’s name',
                    'Email address and mobile phone number',
                    'Service of interest and budget range',
                    'Your project description and how you found us, if you choose to share them'
                ],
                after: [
                    'We do not ask for sensitive data or for data about children or teenagers. Please do not include it in your project description.'
                ]
            },
            {
                id: 'recoleccion',
                title: 'How we collect it',
                body: [
                    'The form stores nothing on our servers. When you press “Submit”, your browser builds a message from what you typed and opens WhatsApp. The message only reaches us if you choose to send it.',
                    'From then on the conversation and its data live in WhatsApp, a Meta Platforms service that may store information outside Colombia under its own terms. By sending the message you authorise that transfer.',
                    'The site saves the language you pick (Spanish or English) in your browser. It does not identify you and never leaves your device. We use no advertising cookies and no analytics tools.'
                ]
            },
            {
                id: 'finalidades',
                title: 'What we use it for',
                list: [
                    'Answering your request and understanding what you need',
                    'Preparing and sending proposals, quotes and contracts',
                    'Scheduling meetings and following up on the project',
                    'Meeting legal, accounting and tax obligations if we end up working together'
                ],
                after: [
                    'We do not sell, rent or hand over your data to third parties, and we will not send you advertising you did not ask for.'
                ]
            },
            {
                id: 'derechos',
                title: 'Your rights',
                body: [
                    'As the owner of the data you have the right to:'
                ],
                list: [
                    'Know, update and correct your personal data',
                    'Ask for proof of the authorisation you gave us',
                    'Know how your data has been used',
                    'Revoke the authorisation or ask us to delete your data, unless a legal or contractual duty requires us to keep it',
                    'Access the data we hold about you free of charge',
                    'File complaints with the Superintendence of Industry and Commerce (SIC), once you have gone through the query or claim process with us'
                ]
            },
            {
                id: 'consultas-y-reclamos',
                title: 'How to exercise them',
                body: [
                    'Message us on WhatsApp at +57 312 317 4919 with your name, the phone number or email you contacted us from, what you are asking for and, for a claim, the facts behind it.',
                    'Queries: answered within ten (10) business days of receipt. If we need longer, we will tell you why and give a new date no more than five (5) business days later.',
                    'Claims (correction, update, deletion or breach): handled within fifteen (15) business days, extendable by eight (8) more with prior notice. If a claim is incomplete we will ask for what is missing within five (5) days; if we do not hear back within two (2) months, we will treat it as withdrawn.'
                ]
            },
            {
                id: 'autorizacion',
                title: 'Authorisation',
                body: [
                    'By ticking the form’s checkbox and sending us the message, you give us prior, express and informed authorisation to process your data under this policy. You can revoke it at any time through the channel above.'
                ]
            },
            {
                id: 'conservacion',
                title: 'Retention and security',
                body: [
                    'We keep your data while there is a conversation or a business relationship with you and, afterwards, only for as long as our legal obligations require. If we do not end up working together, we delete the conversation within twelve (12) months of the last contact.',
                    'Only the Bidiex team members handling your request can access it, and we protect it with the reasonable measures available to us, such as restricted accounts and two-step verification.'
                ]
            },
            {
                id: 'cambios',
                title: 'Changes to this policy',
                body: [
                    'If we change anything significant we will publish it on this page with a new update date. This version is in force from September 28, 2026.'
                ]
            }
        ]
    }
};

/** Flattens one language of the policy into the legal.* i18n keys. */
export function policyKeys(lang) {
    const doc = policy[lang];
    const out = {
        'legal.doctitle': doc.doctitle,
        'legal.back': doc.back,
        'legal.eyebrow': doc.eyebrow,
        'legal.title': doc.title,
        'legal.lead': doc.lead,
        'legal.updated': doc.updated,
        'legal.intro': doc.intro,
        'legal.index': doc.index
    };
    // Only English has a translation notice; the page hides it under lang="es".
    if (doc.note) out['legal.note'] = doc.note;
    doc.sections.forEach((s, i) => {
        const k = `legal.s${i}`;
        out[`${k}.title`] = s.title;
        (s.body ?? []).forEach((p, j) => { out[`${k}.p${j}`] = p; });
        (s.list ?? []).forEach((l, j) => { out[`${k}.l${j}`] = l; });
        (s.after ?? []).forEach((p, j) => { out[`${k}.a${j}`] = p; });
    });
    return out;
}
