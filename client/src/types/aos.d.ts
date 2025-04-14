declare module 'aos' {
  interface AosOptions {
    // Core settings
    disable?: boolean | string | ((...args: any[]) => boolean);
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    mirror?: boolean;
    anchorPlacement?: string;
    once?: boolean;
  }

  interface AOS {
    init(options?: AosOptions): void;
    refresh(hard?: boolean): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}