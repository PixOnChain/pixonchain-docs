declare global {
  interface Window {
    gtag?: (...args: (string | number | boolean | object)[]) => void;
  }
}

export const trackEvent = ({
    action,
    category,
    label,
    value,
  }: {
    action: string;
    category: string;
    label: string;
    value?: number;
  }) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };
  