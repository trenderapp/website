import HCaptcha from "@hcaptcha/react-hcaptcha";
import { captchasiteKey } from "@/services/constante";
type sectionProps = {
    onSuccess: (token: string) => any;
    reference?: any
}

function CaptchaBlock({ onSuccess, reference }: sectionProps) {

    return (
        <HCaptcha ref={reference} reCaptchaCompat sitekey={captchasiteKey ?? ""} onVerify={(token) => onSuccess(token)} />
    )
}

export default CaptchaBlock;