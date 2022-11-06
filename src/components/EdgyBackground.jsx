import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useCallback } from "react";

const EdgyBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  return (
    <div className=" absolute top-0 bottom-0 left-0 right-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ position: "absolute", top: 0 }}
        options={{
          preset: "stars",
          background: {
            color: {
              value: prefersDark === true ? "#000000" : "#ffffff",
            },
          },
          fpsLimit: 75,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
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
            },
          },
          particles: {
            color: {
              value: prefersDark === true ? "#ffffff" : "#747474",
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: false,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              limit: 0,
              value: 40,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 3,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default EdgyBackground;
