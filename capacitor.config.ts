import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.trademaster.academy",
  appName: "TradeMaster Academy",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    androidScheme: "https"
  }
};

export default config;
