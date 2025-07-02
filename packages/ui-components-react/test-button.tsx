// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import { Button } from "./src/button/button";
import { Check } from "./src/icons/check";

export const TestButton = () => {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button color="primary" size="md">
        Primary Button
      </Button>
      
      <Button color="secondary" size="md">
        Secondary Button
      </Button>
      
      <Button color="error" size="md">
        Error Button
      </Button>
      
      <Button color="success" size="md">
        Success Button
      </Button>
      
      <Button color="warning" size="md">
        Warning Button
      </Button>
      
      <Button color="info" size="md">
        Info Button
      </Button>
      
      <Button color="plain" size="md">
        Plain Button
      </Button>
      
      <Button color="ghost" size="md">
        Ghost Button
      </Button>
      
      <Button color="dark" size="md">
        Dark Button
      </Button>
      
      <Button color="primary" size="md" leftIcon={Check}>
        With Left Icon
      </Button>
      
      <Button color="primary" size="md" rightIcon={Check}>
        With Right Icon
      </Button>
      
      <Button color="primary" size="md" icon={Check} iconOnly>
        Icon Only
      </Button>
      
      <Button color="ghost" size="md" outline>
        Ghost Outline
      </Button>
      
      <Button color="primary" size="xs">
        XS Size
      </Button>
      
      <Button color="primary" size="sm">
        SM Size
      </Button>
      
      <Button color="primary" size="lg">
        LG Size
      </Button>
      
      <Button color="primary" size="xl">
        XL Size
      </Button>
      
      <Button color="primary" size="md" disabled>
        Disabled Button
      </Button>
    </div>
  );
}; 