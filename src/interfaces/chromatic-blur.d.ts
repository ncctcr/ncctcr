declare module 'chromatic-blur' {
  export interface ChromaticBlurOptions {
    /** Red channel offset in pixels (positive = right) */
    redOffset?: number; // default 5
    /** Blue channel offset in pixels (negative = left) */
    blueOffset?: number; // default -5
    /** Gaussian blur standard deviation */
    blurAmount?: number; // default 3
    /** Turbulence noise frequency (lower = smoother) */
    turbulenceFrequency?: number; // default 0.001
    /** Displacement map scale for wavy distortion */
    displacementScale?: number; // default 50
    /** Border color for glass effect */
    borderColor?: string; // default 'rgba(156, 156, 156, 0.2)'
    /** Add gradient overlay layer */
    addOverlay?: boolean; // default true
    /** Add noise overlay layer */
    addNoise?: boolean; // default true
  }

  export default class ChromaticBlur {
    constructor(selector: string, options?: ChromaticBlurOptions);

    /**
     * Update effect options dynamically.
     * Returns this for chaining.
     */
    update(options: Partial<ChromaticBlurOptions>): this;

    /** Enable the effect (if previously disabled). */
    enable(): this;

    /** Temporarily disable the effect. */
    disable(): this;

    /** Remove the effect and cleanup resources. */
    destroy(): void;

    /** Cleanup all instances globally. */
    static destroyAll(): void;
  }
}
