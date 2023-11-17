import { Link } from "@/components";
import { useTranslation } from "@/context/Localization";
import dayjs from "dayjs";

export default function HomeFooter() {

    const { t } = useTranslation();

    return (
        <footer>
            <div className="left">
                <h3>Applications</h3>
                <Link href={"https://play.google.com/store/apps/details?id=com.trenderapp.social"}>Android</Link>
                <Link href={"https://apps.apple.com/app/trender-social-network/id6443865410"}>IOS</Link>
            </div>
            <div className="middle">
                <h3>Informations</h3>
                <Link href="mailto:support@trenderapp.com">Contact</Link>
                <Link href="https://doc.trenderapp.com">API</Link>
                <span>© {dayjs().year()} Trender</span>
            </div>
            <div className="right">
                <h3>Legals</h3>
                <Link href="https://cdn.trenderapp.com/assets/legal/en/TOS.pdf">{t("terms_of_sales")}</Link>
                <Link href="/privacy">{t("terms_of_use")}</Link>
                <Link href="https://cdn.trenderapp.com/assets/legal/en/T&S.pdf">{t("privacy")}</Link>
            </div>
        </footer>
    )
}