// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true
    }
  }
});
