const rows =[
    {
        feature: "Design Philosophy",
        vencord: "Minimalist & Stable",
        equicord: "Experimental & Feature-rich",
    },
    {
        feature: "Exclusive Plugins",
        vencord: "Core community set only",
        equicord: "MessageLoggerEnhanced, TriviaAI and more",
    },
    {
        feature: "Total Plugin Count",
        vencord: "150+ plugins",
        equicord: "300+ plugins",
    },
    {
        feature: "Target Audience",
        vencord: "Mainstream users",
        equicord: "Power-users & Developers",
    },
]

const faqs =[
    {
        question: "Where can I find Vencord Themes?",
        answer: "Equicord is fully compatible with all Vencord and BetterDiscord themes. Simply paste your CSS into the themes tab to customize your client."
    },
    {
        question: "What is the best Vencord alternative for logging messages?",
        answer: "While standard Vencord doesn't support persistent logging, Equicord is the best alternative as it includes MessageLoggerEnhanced. This saves deleted messages and images locally, even after you restart Discord."
    },
    {
        question: "Is this an official Vencord download?",
        answer: "This is Equicord, the most popular and feature-rich fork of Vencord. If you are looking for Vencord alternatives with more power, you're in the right place."
    }
]

export default function Comparison() {
    // FAQ Schema for Rich Snippets in Google Search
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }

    return (
        <article class="eq-overlay-surface rounded-xl border eq-border">
            {/* Inject JSON-LD Schema for SEO */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            {/* Header Section */}
            <header class="border-b eq-border px-6 py-8 sm:px-8">
                <p class="text-xs font-bold uppercase tracking-[0.28em] eq-text-muted-soft mb-2">
                    Top Vencord Alternatives
                </p>
                <h2 class="text-2xl font-bold eq-page-text sm:text-3xl">
                    Vencord vs <span class="text-[var(--eq-accent-soft)]">Equicord</span>
                </h2>
                <p class="mt-3 max-w-2xl text-sm font-medium eq-text-muted sm:text-base leading-relaxed">
                    Looking for the best Vencord alternative? Compare the features side-by-side. 
                    While Vencord covers the basics, <strong>Equicord</strong> is the ultimate choice if you want maximum control, exclusive plugins, and power-user features.
                </p>
            </header>

            {/* Table Section */}
            <div class="overflow-x-auto">
                <table class="min-w-[720px] w-full border-collapse text-left">
                    <thead class="text-xs uppercase tracking-wider eq-text-muted-soft bg-[var(--eq-base)]">
                        <tr>
                            <th scope="col" class="px-6 py-4 font-semibold sm:px-8 w-1/3">
                                Feature Comparison
                            </th>
                            <th scope="col" class="px-6 py-4 font-semibold w-1/3">
                                Vencord
                            </th>
                            <th scope="col" class="px-6 py-4 font-semibold w-1/3">
                                <div class="flex items-center gap-2 text-[var(--eq-accent-soft)]">
                                    Equicord
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr class="align-top border-t eq-border hover:bg-[var(--eq-surface-2)] transition-colors duration-150">
                                <th scope="row" class="px-6 py-5 font-semibold eq-page-text sm:px-8">
                                    {row.feature}
                                </th>
                                <td class="px-6 py-5 text-sm font-medium eq-text-muted">
                                    {row.vencord}
                                </td>
                                <td class="px-6 py-5 text-sm font-semibold eq-page-text">
                                    <div class="flex items-start gap-2">
                                        {/* Foam Checkmark */}
                                        <svg class="w-5 h-5 text-[var(--eq-accent-foam)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{row.equicord}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* FAQ & SEO Section */}
            <div class="border-t eq-border px-6 py-8 sm:px-8 bg-[var(--eq-base)]">
                <h3 class="text-xl font-bold eq-page-text">Frequently Asked Questions</h3>
                <p class="text-sm eq-text-muted mt-1 mb-5">Common questions about Vencord plugins, themes, and downloads.</p>

                <div class="space-y-3">
                    {faqs.map((faq) => (
                        <details class="group rounded-lg border eq-border eq-page-bg px-5 py-4 transition-all duration-200 hover:bg-[var(--eq-surface-2)] open:border-[var(--eq-accent-soft)]">
                            <summary class="cursor-pointer font-semibold eq-page-text flex items-center justify-between outline-none">
                                {faq.question}
                                <span class="transition group-open:rotate-180 text-[var(--eq-muted-soft)] group-open:text-[var(--eq-accent-soft)]">
                                    <svg fill="none" height="20" width="20" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <p class="mt-4 text-sm font-medium eq-text-muted leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div class="border-t eq-border px-6 py-8 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h4 class="font-bold eq-page-text text-lg">Ready to upgrade your client?</h4>
                    <p class="text-sm eq-text-muted mt-1">Join thousands of users who made the switch to Equicord.</p>
                </div>
                <a 
                    href="https://equicord.org" 
                    class="px-6 py-3 rounded-lg bg-[var(--eq-accent-soft)] hover:opacity-90 text-[var(--eq-base)] font-bold text-sm transition-opacity duration-200 flex items-center gap-2 whitespace-nowrap"
                    title="Download Equicord - The Best Vencord Alternative"
                >
                    Get Equicord
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </article>
    )
}