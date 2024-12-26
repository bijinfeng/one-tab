import { devError } from "./dev-log";
import { isDev } from "./is-dev";

export function measureCSSLength(raw: string | undefined | null): number {
	if (raw === null || raw === undefined || raw === "") {
		if (isDev) {
			devError(
				"Global",
				"Something went wrong when calculating CSS length. Please report an issue at https://github.com/ant-design/ant-design-mobile/issues/new/choose",
			);
		}
		return 0;
	}
	const withUnit = raw.trim();
	if (withUnit.endsWith("px")) {
		return Number.parseFloat(withUnit);
	} else if (withUnit.endsWith("rem")) {
		return Number.parseFloat(withUnit) * Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize);
	} else if (withUnit.endsWith("vw")) {
		return (Number.parseFloat(withUnit) * window.innerWidth) / 100;
	} else {
		if (isDev) {
			devError(
				"Global",
				`You are using a not supported CSS unit in \`${raw}\`. Only \`px\` \`rem\` and \`vw\` are supported.`,
			);
		}
		return 0;
	}
}
