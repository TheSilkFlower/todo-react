import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBg = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    zIndex: -1
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        bubble: {
                            color: "#09579d",
                            size: 6,
                            distance: 36
                        }
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.2,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 170,
                    },
                    opacity: {
                        value: 0.7,
                    },
                    shape: {
                        type: "edge",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        anim: {
                            enable: true,
                            speed: 15,
                        }
                    },
                },
                detectRetina: true,
            }
        }
        />
    );
};

export default ParticleBg
