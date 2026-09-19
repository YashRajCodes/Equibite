import { actionRow, container, linkButton, separator, siteHeader, text } from "./common";

const EQUILOTL = "https://github.com/Equicord/Equilotl/releases/latest/download";

export function downloadEmbed() {
    return container([
        siteHeader(
            "# Download Equicord\nInstall Equicord on desktop, in your browser, or use Equibop.",
        ),
        separator(),
        text("**Installer**"),
        actionRow([
            linkButton("Windows", `${EQUILOTL}/Equilotl.exe`, "1550885992087420971"),
            linkButton("Linux", `${EQUILOTL}/Equilotl`, "1550886019597869096"),
            linkButton("macOS (Apple Silicon)", `${EQUILOTL}/Equilotl-darwin-arm64.zip`, "1550885956934959234"),
            linkButton("macOS (Intel)", `${EQUILOTL}/Equilotl-darwin-x64.zip`, "1550885956934959234"),
        ]),
        separator(1),
        text("**Browser extension**"),
        actionRow([
            linkButton(
                "Firefox",
                "https://addons.mozilla.org/en-US/firefox/addon/equicord-web/",
                "1550887663274434663"
            ),
            linkButton(
                "Chrome",
                "https://chromewebstore.google.com/detail/equicord-web/mcambpfmpjnncfoodejdmehedbkjepmi",
                "1550887605887963207"
            ),
            linkButton(
                "Edge",
                "https://microsoftedge.microsoft.com/addons/detail/equicord-web/nelknkpngcgdndlgikhfmldidjdjljgd",
                "1550887636367974491"
            ),
        ]),
        separator(1),
        text("**Equibop**\nA Vesktop fork with additional plugins, custom splashes, and extra features."),
        actionRow([
            linkButton("Latest release", "https://github.com/Equicord/Equibop/releases/latest", "1268138273507770421"),
        ]),
    ]);
}
