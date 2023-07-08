import dayjs from 'dayjs';
import isToday from "dayjs/plugin/isToday"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(isToday)
dayjs.extend(LocalizedFormat)

type dayjsType = string | number | dayjs.Dayjs | Date

export class formatDate {

    private current_date: dayjsType;

    constructor(date: dayjsType) {
        this.current_date = date;
    }

    time() {
        return dayjs(this.current_date).format("LT");
    }

    date() {
        return dayjs(this.current_date).format("L");
    }

    fullDate() {
        return dayjs(this.current_date).format("LLL");
    }

    fromNow() {
        const current = dayjs(this.current_date);
        return current.isToday() ? current.format("LT") : current.format("LLL");
    }

    isOlder(recent: dayjsType) {
        const current = dayjs(this.current_date);
        return current.isSameOrBefore(recent);
    }
}