import { Theme } from "@emotion/react";

export const getLevels = (theme: Theme): { [key: string]: any } => {
  const colorPalette = theme.palette;
  return {
    INFO: {
      borderColor: colorPalette.info,
      backgroundColor: "rgba(0, 153, 153, 0.9)",
    },
    SUCCESS: {
      borderColor: colorPalette.success,
      backgroundColor: "rgba(50, 200, 205, 0.9)",
    },
    WARNING: {
      borderColor: colorPalette.warning,
      backgroundColor: "rgba(255, 204, 102, 0.9)",
    },
    ERROR: {
      borderColor: colorPalette.error,
      backgroundColor: "rgba(255, 102, 102, 0.9)",
    },
    CRITICAL: {
      borderColor: colorPalette.critical,
      backgroundColor: "rgba(255, 70, 64, 0.9)",
    },
    DEBUG: {
      borderColor: colorPalette.debug,
      backgroundColor: "rgba(110, 114, 120, 0.9)",
    },
  };
};
