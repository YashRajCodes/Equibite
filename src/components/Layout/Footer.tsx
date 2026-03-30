export default function Footer() {
    return (
        <div class="mt-25 w-full border-t eq-border eq-page-bg px-8 py-2">
            <div class="max-w-eq-lg mx-auto flex flex-col gap-12 px-6 py-6">
                <div class="flex items-center justify-between max-sm:flex-col-reverse max-sm:gap-3">
                    <span class="text-sm font-medium eq-page-text">
                        © {new Date().getFullYear()} A Vencord alternative.
                    </span>

                    <span class="text-sm font-medium eq-page-text">
                        This site is not affiliated with Equicord or Vencord.
                    </span>
                </div>
            </div>
        </div>
    )
}
